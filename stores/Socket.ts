import { defineStore } from 'pinia'
import { get, set } from '@vueuse/core'
import type { SocketUser } from '../types/User';

export const useSocketStore = defineStore('Socket', () => {
  const peers = ref<SocketUser[]>([]);

  const getIDFrom = ({ id, firstname, lastname } : { 
    id?: number,
    firstname?: string,
    lastname?: string
  }) => {
    return get(peers).find(p => !!id ? p.id : !!firstname && !!lastname ? p.first_name === firstname && p.last_name === lastname : false)?.socketID || undefined;
  }

  const clear = () => get(peers).splice(0);

  return {
    peers,

    getIDFrom,
    clear
  }
})
