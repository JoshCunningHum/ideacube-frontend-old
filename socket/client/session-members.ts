import type { ClientSocketEvent } from "../../types/SocketEvent";
import type { SocketUser } from "../../types/User";

export default <ClientSocketEvent>{
    name: 'session-members',
    handler: (ws, peers, data: [SocketUser[]]) => {
        const sessionStore = useSessionStore();
        const { members } = storeToRefs(sessionStore);

        console.log(`Session members updated: `, data[0]);

        members.value.splice(0);
        members.value.push(...data[0]);
    }
}