<script lang="ts" setup>
import type { SocketUser } from '~/types/User';
import { set, get } from '@vueuse/core';


const props = defineProps({
  socketUser: {
    type: Object as () => SocketUser,
    required: true
  }
})

const classStore = useClassStore();
const socketStore = useSocketStore();
const sessionStore = useSessionStore();

const { peers } = storeToRefs(socketStore);
const { classes } = storeToRefs(classStore);
const { members } = storeToRefs(sessionStore);

classStore.sync();
const _class = useArrayFind(classes, c => c.id === props.socketUser.class_id);
const hasJoined = computed(() => get(members).some(m => m.id === props.socketUser.id));

// Count devices
const deviceCount = useArrayReduce(peers, (n, p) => n += p.id === props.socketUser.id ? 1 : 0, 0);

</script>

<template>
  <div class="px-3 py-2 bg-zinc-800/50 hover:bg-zinc-800 flex items-center gap-2 justify-between">

    <div class="flex items-center gap-2">
      <UIcon v-if="socketUser.is_admin" name="i-mdi-security" class="text-accent-400 min-w-7" />
      <UIcon v-else name="i-mdi-account" class="text-2xl min-w-7" />
      <span>{{ socketUser.first_name }} {{ socketUser.last_name }}</span>
      <span class="text-prim-500" v-if="!!_class">{{ _class.name }}</span>
    </div>

    <div class="flex items-center text-prim-500 gap-2">

      <span class="helvetica round text-accent-500 text-sm" v-if="hasJoined">JOINED</span>

      <UIcon 
      :name="socketUser.socketID !== '' ? 'i-mdi-wifi' : 'i-mdi-wifi-off'" 
      :class="!!socketUser.socketID ? 'connected' : ''" />

      <span v-if="deviceCount > 1">{{ deviceCount }}</span>
      <UIcon name="i-mdi-devices" class="text-2xl" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.connected {
  @apply text-accent-400;
}
</style>