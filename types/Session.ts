import type { SocketUser } from './User';

export enum SessionTypes {
    Null,
    Quiz,
    Video,
}

export type SessionQuizParams = {
    quiz_id: number;
    class_id: number;
}

export type SessionVideoParams = {
    offer: string;
}

export type SessionProps = SessionQuizParams | SessionVideoParams;

// Used by the server only
export class Session {
    type: SessionTypes = SessionTypes.Null;
    args: SessionProps | {} = {};
    members: SocketUser[] = new Array<SocketUser>();

    start(type: SessionTypes, args: SessionProps) {
        this.type = type;
        this.args = args;
    }

    stop() {
        this.type = SessionTypes.Null;
        this.members.splice(0);
        this.args = {};
    }
}