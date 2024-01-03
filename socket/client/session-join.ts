import type { ClientSocketEvent } from "../../types/SocketEvent";
import { SessionTypes, type SessionProps } from "../../types/Session";

export default <ClientSocketEvent>{
    name: 'session-join',
    handler: (ws, peers, data: [SessionTypes, SessionProps]) => {
        const sessionStore = useSessionStore();
        const [type, args] = data;
        sessionStore.join(type, args, false);
    }
}