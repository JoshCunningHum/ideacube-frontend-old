import { defineNuxtModule } from "@nuxt/kit";
import websocket from "../socket/socket-server";


export default defineNuxtModule({
    setup(options, nuxt){
        nuxt.hook('ready', () => {
            // Create a websocket server with port close to the current port
            if(process.client) return;
            websocket();
        })
    }
})