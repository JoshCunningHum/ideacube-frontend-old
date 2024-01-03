import { WebSocketServer } from "ws";
import { Socket } from "../types/Socket";
import { Session } from "../types/Session";
import type { SocketEvent } from "../types/SocketEvent";
import loadFiles from '../utils/loadFiles';
import path from "path";

const clients : Socket[] = [];
const session : Session = new Session();
const handlers : SocketEvent[] = loadFiles<SocketEvent>(path.join(__dirname, './server'), 'ts');

const websocket = () => {
    const wss = new WebSocketServer({ port: parseInt(process.env.PORT || '5173') + 3});
    console.log(wss.address());

    wss.on('connection', ws => {
        const socket = new Socket(ws);
        clients.push(socket);
        console.log(`Socket connected: ${socket.id}`);

        // Auto send id-changing signal
        socket.emit('_SET_ID_', socket.id);

        // Handle events that fires in the browser here
        handlers.forEach(event => {
            socket.on(event.name, (...data) => event.handler(socket, wss, clients, data, session));
        })

        ws.on('close', () => {
            const i = clients.findIndex(s => s.id === socket.id);
            if(i !== -1) clients.splice(i, 1);
            console.log(`Socket closed: ${socket.id}`);

            // Also trigger all handlers that triggers on close
            handlers.filter(ev => ev.onClose).forEach(event => event.handler(socket, wss, clients, [], session));
        })
    })

}

export default websocket;