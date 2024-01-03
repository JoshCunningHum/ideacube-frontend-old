import type { ClientSocketEvent } from "~/types/SocketEvent";

export default <ClientSocketEvent>{
    name: 'message-send',
    handler: async (ws, socketpeers, [data]: [Message]) => {
        const chatStore = useChatStore();
        chatStore.receive(data);
    }
}