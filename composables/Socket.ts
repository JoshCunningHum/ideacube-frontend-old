// Used by client only
import { Socket } from "~/types/Socket"
import { useSocketStore } from "../stores/Socket";
import { get, set } from '@vueuse/core';
import handlers from '../socket/client'

export const useSocket = () => {
    const { $socket: socket } = useNuxtApp();
    const socketStore = useSocketStore();
    const account = useAccount();
    const { peers } = storeToRefs(socketStore);

    // All of this only happens and should only happen in client
    const initialize = () => {
        const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const ws = Socket.create(`${wsProtocol}//${window.location.hostname}:${parseInt(process.env.PORT || '5173') + 3}`);

        watchImmediate(account.user, v => {
            ws.user = v || undefined;
            console.log(v);
        })

        // Set events here
        handlers.forEach(ev => {
            ws.on(ev.name, (...data) => {
                ev.handler(ws, get(peers), data);
            })
        })

        socket.value = ws;
    }
    const readystate = computed(() => !socket.value ? -1 : socket.value.ws.readyState);
    const isInitialized = (socket: globalThis.Ref<Socket | undefined>) : socket is globalThis.Ref<Socket> => {
        return readystate.value === 1 || readystate.value === 0
    }
    const close = () => {
        if(!isInitialized(socket)) return;
        socket.value.close();
        set(socket, undefined);
    }

    return {
        socket,
        readystate,
        isInitialized,

        initialize,
        close,
    }
}