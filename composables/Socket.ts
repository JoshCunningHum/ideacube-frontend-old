// Used by client only
import { Socket } from "~/types/Socket";

let socket : Socket;

export const useSocket = () => {
    if(!!socket) return socket;
    const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';

    const ws = new Socket(`${wsProtocol}//${window.location.host}`)
    socket = ws;
    return ws;
}