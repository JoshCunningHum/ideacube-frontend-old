
import { WebSocketServer } from 'ws';
import { defineNuxtModule } from '@nuxt/kit'
import io from '@/model/io'

export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.hook('listen', server => {
            console.log(`Ideacube Server Starting...`)

            // Start server
            io.server = new WebSocketServer({ server });
            nuxt.hook('close', () => io.server?.close())
            io.server.on('connection', ws => {
                
                // Add Websocket on the model
                io.add(ws)

            })
        })
    }
})