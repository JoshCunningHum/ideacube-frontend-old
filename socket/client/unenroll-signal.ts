import type { ClientSocketEvent } from "~/types/SocketEvent";

export default <ClientSocketEvent>{
    name: 'unenroll-signal',
    handler: () => {
        // Just logouts the whole page if removed
        useAuthStore().logout();
    }
}