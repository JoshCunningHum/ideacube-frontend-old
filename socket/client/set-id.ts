import type { ClientSocketEvent } from "~/types/SocketEvent";

export default <ClientSocketEvent>{
    name: '_SET_ID_',
    handler: (ws, peers, [id] : [string, ...any]) => {
        const { $socket: socket } = useNuxtApp();

        console.log('Setting ID to ' + id);
        if(socket.value) socket.value.id = id;

        // Send emit for initialization of this socket in the server
        ws.emit('init-socket', ws.user);
    }
}