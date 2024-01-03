import type { ClientSocketEvent } from "~/types/SocketEvent";

import setID from './set-id';
import getConnection from './get-connection';
import approveSignal from "./approve-signal";
import unenrollSignal from "./unenroll-signal";
import sessionNotif from "./session-notif";
import sessionEnd from "./session-end";
import sessionJoin from "./session-join";
import sessionMembers from './session-members';
import messageSend from "./message-send";

export default <ClientSocketEvent[]>[
    getConnection,
    setID,
    approveSignal,
    unenrollSignal,
    sessionNotif,
    sessionEnd,
    sessionJoin,
    sessionMembers,
    messageSend
]