import { Socket } from "~/types/Socket";

export default defineNuxtPlugin((nuxtApp) => {
    if(process.server) return;

    const socket = ref<Socket>();

    return {
        provide: {
            socket
        }
    }
})
