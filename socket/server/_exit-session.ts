import { SessionTypes } from '../../types/Session';
import type { SocketEvent } from '../../types/SocketEvent';

const getconnections = require('./get-connections') as SocketEvent;

/**Called when a client disconnects */
module.exports = <SocketEvent>{
    name: 'exit-session',
    onClose: true,
    handler: (socket, wss, clients, data, session) => {
        if(session.type === SessionTypes.Null) return;
        const i = session.members.findIndex(m => m.socketID === socket.id);
        if(i === -1) return;
        session.members.splice(i, 1);
        
        // Send the session members to admins
        clients.forEach(c => {
            if(!c.user || !c.user.is_admin) return;
            c.emit('session-members', session.members);
        })
    }
};