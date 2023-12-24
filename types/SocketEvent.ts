// Socket Server Events

export interface SocketEvent{
    name: string,
    handler: () => void
}