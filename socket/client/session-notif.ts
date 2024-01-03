import type { SessionProps, SessionTypes } from "../../types/Session";
import type { ClientSocketEvent } from "../../types/SocketEvent";
import { set, get } from '@vueuse/core';

export default <ClientSocketEvent>{
    name: 'session-notif',
    handler: (ws, peers, data: [SessionTypes, SessionProps, ...any[]]) => {
        const [type, args] = data;
        const sessionStore = useSessionStore();
        const classStore = useClassStore();
        const quizStore = useQuizStore();

        classStore.sync();
        quizStore.sync();

        sessionStore._type = type;
        sessionStore._args = args;
    }
}