import type { SocketUser, User } from '../../types/User';
import type { SocketEvent } from '../../types/SocketEvent';
import { SessionTypes } from '../../types/Session';

const getconnections = require('./get-connections') as SocketEvent;
const joinsession = require('./join-session') as SocketEvent;

/**Called right after socket (client) received the set-id event */
module.exports = <SocketEvent>{
    name: 'init-socket',
    handler: (socket, wss, clients, data: [User, ...any], session) => {
        const [user] = data;

        console.log(`Received User Data:`, user);
        socket.user = user;

        // Send this data to admin
        clients.forEach(c => getconnections.handler(c, wss, clients, data, session));

        if (session.type === SessionTypes.Null) return;
        if (user.is_admin) {
            // If session is active and user is admin, then force join the admin
            joinsession.handler(socket, wss, clients, data, session);
        } else if (session.members.some(m => m.id === user.id)) {
            // If session is active and current user is already in the session then force join this different socket connection
            joinsession.handler(socket, wss, clients, data, session);
        } else {
            // If session is active, send a session active signal to the user
            socket.emit('session-notif', session.type, session.args);
        }
    }
};