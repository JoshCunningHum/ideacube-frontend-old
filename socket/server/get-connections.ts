import type { SocketUser } from '~/types/User';
import type { SocketEvent } from '../../types/SocketEvent';

module.exports = <SocketEvent>{
    name: 'get-connections',
    handler: (socket, wss, clients, data) => {
        // Only proceed when user is admin
        if(!socket.user?.is_admin) return;
        
        const clientsUserData = clients.filter(c => !!c.user).map(c => <SocketUser>{
            socketID: c.id,
            ...c.user
        });

        socket.emit('get-connections', clientsUserData);
    }
};