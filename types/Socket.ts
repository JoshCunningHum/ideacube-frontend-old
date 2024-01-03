import WebSocketServerClient from "ws";
import type { SocketEmit, SocketEvent } from "./SocketEvent";
import type { User } from "./User";

const isSocketEvent = (data: any) : data is SocketEmit => {
    return 'name' in data && 'data' in data;
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export class Socket{
    __evs__: Record<string, ((...params: any[]) => void | Promise<any>)[]> = {};

    id: string;
    ws: WebSocket | WebSocketServerClient;
    user?: User; // Used for identifying different users

    constructor(ws: WebSocket | WebSocketServerClient){
        this.id = s4() + s4() + '-' + s4();
        this.ws = ws;

        if(ws instanceof WebSocketServerClient){
            ws.on('message', rawData => {
                const data = JSON.parse(rawData.toString()) as SocketEvent;
                if(isSocketEvent(data)) this.exec(data);
            })
        }else if(ws instanceof WebSocket){
            ws.addEventListener('message', ({data: rawData}) => {
                const data = JSON.parse(rawData) as SocketEvent;
                if(isSocketEvent(data)) this.exec(data);
            })  
        }
    }    

    has(event: string): boolean { return this.__evs__[event] !== undefined; }

    emit(name: string, ...data: any[]){
        switch(this.ws.readyState){
            case 0: // Connecting
                console.log(`Cached event added since socket is not yet connected`);
                if(this.ws instanceof WebSocketServerClient){
                    this.ws.on('open', () => this.ws.send(JSON.stringify(<SocketEmit>{ name, data })))
                }else if(this.ws instanceof WebSocket){
                    this.ws.addEventListener('open', () => this.ws.send(JSON.stringify(<SocketEmit>{ name, data })))
                }
                break;
            case 1: // Open
                console.log(`Sending data to socket: ${this.id}`);
                this.ws.send(JSON.stringify(<SocketEmit>{ name, data }));
                break;
            default:
                throw new Error(`Websocket is already closed or closing with readystate: ${this.ws.readyState}`);
        }        
    }

    on(event: string, callback: (...params: any[]) => void | Promise<any>){
        this.__evs__[event] = this.__evs__[event] || new Array<(...params: any[]) => void | Promise<any>>();
        this.__evs__[event].push(callback);
    }

    off(event: string, callback: (...params: any[]) => void | Promise<any>){
        if(this.has(event)) return;

        const indexes : Array<number> = this.__evs__[event]
            .filter(ev => ev === callback || ev.toString() === callback.toString())
            .map((cb, i) => i);
        if(indexes.length > 0) for(let i = 0; i < indexes.length; i++) this.__evs__[event].splice(indexes[i] - i, 1);
    }
    
    exec(se: SocketEmit){
        this.has(se.name) && this.__evs__[se.name].forEach(ev => ev(...se.data));
    }

    close(){
        this.ws.close();
    }

    static create(url: string, ...protocols: string[]){
        
        return new Socket(process.client ? new WebSocket(url, protocols) : new WebSocketServerClient(url));
    }
}