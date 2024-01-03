import type { SocketEvent } from '../../types/SocketEvent';

const getconnections = require('./get-connections') as SocketEvent;

/**Called when a client disconnects */
module.exports = <SocketEvent>{
    name: 'close-socket',
    onClose: true,
    handler: (socket, wss, clients, data, session) => {
        // Send this data to admin. get-connection only sends data to admin so no need to filter
        clients.forEach(c => getconnections.handler(c, wss, clients, [], session));
    }
};