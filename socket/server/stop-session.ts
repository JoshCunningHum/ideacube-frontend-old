import type { SocketEvent } from '../../types/SocketEvent';

/**Called right after socket (client) received the set-id event */
module.exports = <SocketEvent>{
    name: 'stop-session',
    handler: (socket, wss, clients, data, session) => {
        session.stop();

        console.log(`Ending Session`);

        // Send a signal that session has stop
        clients.forEach(c => c.emit('session-end'));
    }
};