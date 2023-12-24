import { WebSocket, WebSocketServer } from "ws"
import 'fs'

type IO = {
    server?: WebSocketServer
    clients: WebSocket[]
    add: (ws: WebSocket) => void
}

const clients : WebSocket[] = []

const io : IO = {
    clients,
    add: ws => {
        // Do event handling here

        clients.push(ws)
    }
};

export default io;