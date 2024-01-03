import type { ClientSocketEvent } from "~/types/SocketEvent";
import type { SocketUser } from "~/types/User";
import { get, set } from '@vueuse/core';

export default <ClientSocketEvent>{
    name: 'get-connections',
    handler: async (ws, socketpeers, [clients] : [SocketUser[], ...any]) => {
        const socketStore = useSocketStore();
        const studentStore = useStudentStore();

        // // Make sure to filter duplicates
        // const set = new Array<SocketUser>();
        // clients.forEach(c => set.every(s => s.id !== c.id) && set.push(c));

        const { peers } = storeToRefs(socketStore);
        socketStore.clear();
        get(peers).push(...clients);

        console.log(`Peers: `, clients);


        // Try to update student list when someone logins
        await studentStore.sync();

        // Send session notif to all students
    }
}