<script lang="ts" setup>
import { get, set } from '@vueuse/core'

// Account Details
const account = useAccount();
const user = computed(() => get(account.user));

// Stores
const responsiveStore = useResponsiveStore();

const { isSmall, mob_sidebar_open } = storeToRefs(responsiveStore);

// Socket
const { $socket: socket } = useNuxtApp();
const isOpen = ref(false);
const isInitialized = ref(false);

onMounted(() => {
  const { readystate, isInitialized: checkInitialize } = useSocket();
  set(mob_sidebar_open, false);

  // Since socket should only run on client
  const _isInitialized = computed(() => checkInitialize(socket));
  watchImmediate(_isInitialized, v => set(isInitialized, v));
  watchImmediate(readystate, v => {
    set(isOpen, v === 1);
    if(v === 0 && socket.value?.ws instanceof WebSocket){
      socket.value.ws.addEventListener('open', () => set(isOpen, true));
      socket.value.ws.addEventListener('close', () => set(isOpen, false));
    }
  });

})

// Responsiveness
const mob_toggleSideBar = () => {
  set(mob_sidebar_open, !get(mob_sidebar_open));
}

</script>

<template>
  <header class="w-full sticky flex justify-between px-4 py-2 border-b border-primary-700 items-center z-10">

    <div class="flex items-center gap-2">
      <UIcon :name="`${mob_sidebar_open ? 'i-mdi-close' : 'i-mdi-menu'}`" class="text-xl" v-if="isSmall && user && (user.is_admin || user.is_approved)"
        @click="mob_toggleSideBar" />
      <Logo :animated="false" :squared="false" style="font-size: 1.2rem;" />
    </div>


    <UPopover class="z-50">
      <div class="flex gap-2 items-center">
        <span class="text-xs" v-if="isInitialized">{{ socket?.id }}</span>
        <UIcon name="i-mdi-wifi" :class="`${isOpen ? 'connected' : ''}`" />
        <div class="helvetica round">{{ user?.first_name }} {{ user?.last_name }}</div>
        <UAvatar icon="i-mdi-account" size="md" alt="avatar" />
      </div>

      <template #panel>
        <NavBarDropDown />
      </template>
    </UPopover>

  </header>

  <!-- Mobile Side Nav -->
  <div v-if="mob_sidebar_open && isSmall" class="flex-grow">
    <SideBar />
  </div>
</template>

<style lang="scss" scoped>

.connected {
  @apply text-accent-500;
}

</style>