import { Session } from './Session';

// Socket Server Events

import type { WebSocket, WebSocketServer } from "ws";
import type { Socket } from "./Socket";
import type { SocketUser } from "./User";

// Events that the server executes
export interface SocketEvent{
    name: string,
    handler: (ws: Socket, sv: WebSocketServer, wsa: Socket[], args: any[], session: Session) => void | Promise<any>,
    onClose?: boolean
}

// Events that the client executes
export interface ClientSocketEvent {
    name: string,
    handler: (ws: Socket, wsa: SocketUser[], args: any[]) => void | Promise<any>
}

// Emit structure. Used by both the server and the client
export interface SocketEmit{
    name: string,
    data: any[]
}