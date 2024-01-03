import type { SocketUser, User } from '../../types/User';
import type { SocketEvent } from '../../types/SocketEvent';

interface RelayData{
    targets: string[] | 'all' | 'allexceptown',
    arguments?: any[],
    name: string
}

/**Used to relay messages client-client, no server intervention */
module.exports = <SocketEvent>{
    name: 'relay',
    handler: (socket, wss, clients, args : [RelayData], session) => {
        const [ data ] = args;

        clients.filter(c => 
            data.targets === 'all' || 
            (data.targets === 'allexceptown' && c.id !== socket.id) ||
             data.targets.includes(c.id))
            .forEach(ws => ws.emit(data.name, ...(data.arguments || [])));
    }
};