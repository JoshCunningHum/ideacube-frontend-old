export class Socket extends WebSocket{
    constructor(url: string, ...protocols: string[]){
        super(url, ...protocols);
    }

    
}