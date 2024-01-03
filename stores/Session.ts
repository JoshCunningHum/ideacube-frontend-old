import { defineStore } from 'pinia'
import { set, get } from '@vueuse/core';
import { SessionTypes, type SessionProps } from '~/types/Session';
import type { SocketUser } from '~/types/User';

export const useSessionStore = defineStore('Session', () => {
  const socket = useSocket();

  const type = ref<SessionTypes>(SessionTypes.Null);
  const args = ref<SessionProps>();
  const stopconfirm = ref(false);

  // Only available in client
  const tempType = ref<SessionTypes>(SessionTypes.Null);
  const tempArgs = ref<SessionProps>();

  // Only available in admins
  const members = ref<SocketUser[]>([]);

  const start = (_type: SessionTypes, _args: SessionProps) => {
    // Don't start if session is already going on
    if(get(type) !== SessionTypes.Null) return;

    // Just send a socket signal to start the session with these information
    get(socket.socket)?.emit('start-session', _type, _args);
  }

  const join = (_type: SessionTypes, _args: SessionProps, sendToSocket = true) => {
    if(sendToSocket) get(socket.socket)?.emit('join-session');
    else {
      set(type, _type);
      set(args, _args)
    }
  }

  const stop = (sendToSocket = true, fromSocket = false) => {
    if(!get(stopconfirm) && !fromSocket) {
      set(stopconfirm, true);
      return;
    }

    if(sendToSocket){
      get(socket.socket)?.emit('stop-session');
      return;
    }

    set(type, SessionTypes.Null);
    set(args, undefined);
    set(tempType, SessionTypes.Null);
    set(tempArgs, undefined);
    set(stopconfirm, false);
    get(members).splice(0);
  }

  return {
    type,
    args,
    stopconfirm,
    _type: tempType,
    _args: tempArgs,
    members,

    start,
    stop,
    join
  }
})
