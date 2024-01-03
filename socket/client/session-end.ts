import type { ClientSocketEvent } from "../../types/SocketEvent";
import { set, get } from '@vueuse/core';

export default <ClientSocketEvent>{
    name: 'session-end',
    handler: (ws, peers, data) => {
        // TODO: Add a warning notif that session has ended
        const sessionStore = useSessionStore();
        sessionStore.stop(false, true);
    }
}