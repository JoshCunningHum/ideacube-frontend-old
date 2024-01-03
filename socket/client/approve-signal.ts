import type { ClientSocketEvent } from "~/types/SocketEvent";
import { set, get } from '@vueuse/core';

export default <ClientSocketEvent>{
    name: 'approve-signal',
    handler: (ws, peers, [id] : [string, ...any]) => {
        const account = useAccount();
        if(account.user.value) account.user.value.is_approved = 1;
    }
}