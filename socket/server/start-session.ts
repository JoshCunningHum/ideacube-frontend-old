import type { SocketUser, User } from '../../types/User';
import type { SocketEvent } from '../../types/SocketEvent';
import { SessionTypes, type SessionProps } from '../../types/Session';

const joinsession = require('./join-session') as SocketEvent;

/**Called right after socket (client) received the set-id event */
module.exports = <SocketEvent>{
    name: 'start-session',
    handler: (socket, wss, clients, data : [SessionTypes, SessionProps], session) => {
        // Note: This can only be emitted by the admin
        const [type, args] = data;

        session.start(type, args);

        console.log(`Starting Session`, type, args);

        clients.forEach(c => {
            if(!c.user) return;
            if(c.user.is_admin) {
                // Send a session join
                joinsession.handler(c, wss, clients, data, session);
            }else{
                // Send a session notif
                c.emit('session-notif', type, args);
            }
        })
    }
};