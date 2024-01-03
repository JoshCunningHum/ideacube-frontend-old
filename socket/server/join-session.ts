import type { SocketUser, User } from '../../types/User';
import type { SocketEvent } from '../../types/SocketEvent';
import { SessionTypes, type SessionProps } from '../../types/Session';

/**When a client clicks on a 'join session' button */
module.exports = <SocketEvent>{
    name: 'join-session',
    handler: (socket, wss, clients, data, session) => {
        socket.emit('session-join', session.type, session.args);
        
        // Then add the said member to the session, make sure said member is not already in the list
        if(!session.members.some(m => m.socketID === socket.id) && !!socket.user) {
            session.members.push({ ...socket.user, socketID: socket.id });
        }

        // Send the session members to admins
        clients.forEach(c => {
            if(!c.user || !c.user.is_admin) return;
            c.emit('session-members', session.members);
        })
    }
};