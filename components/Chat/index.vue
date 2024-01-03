<script lang="ts" setup>
import type { Socket } from '~/types/Socket';
import { get, set } from '@vueuse/core';

const chatStore = useChatStore();
const socket = ref<Socket>();
const { user } = useAccount();
const open = ref(false);
const { messages } = storeToRefs(chatStore);

onMounted(() => {
  const ws = useSocket();
  watchImmediate(ws.socket, s => set(socket, s));
})

const usable = computed(() => !!user.value && user.value.id !== -1 && !!socket.value);

const toggle = () => {
  set(open, !get(open));
}

const scroller = ref<InstanceType<typeof HTMLDivElement>>();
const text = ref('');
const focus = ref(false);

watch(messages, () => {
  // Scroll to the last
  if (!(scroller.value instanceof HTMLDivElement)) return;
  // scroller.value.scrollBy({ top: -9999 });
  scroller.value.scroll({ top: -9999999 });
})

const send = () => {
  chatStore.send(text.value);
  set(text, '');
}

defineShortcuts({
  enter: {
    usingInput: true,
    whenever: [() => !!text.value, focus],
    handler: send
  },
  "CTRL_enter": {
    usingInput: true,
    whenever: [() => !!text.value, focus],
    handler: () => text.value = text.value + '\n'
  }
})

</script>

<template>
  <div
    :class="`absolute bottom-0 right-0 md:right-[2rem] w-full md:max-w-[350px] flex flex-col ${open ? 'open' : 'closed'} z-50`"
    v-if="usable">

    <UButton color="accent" class="w-full" @click="toggle">
      <div class="w-full flex justify-between helvetica round items-center">
        <span>Chat</span>
        <UIcon class="text-xl" :name="!open ? 'i-mdi-chevron-down' : 'i-mdi-chevron-left'" />
      </div>
    </UButton>

    <div v-if="open" class="flex-grow bg-zinc-900 min-h-0">

      <div class="p-2 h-full min-h-0 overflow-y-auto" ref="scroller">
        <div class="flex flex-col gap-2">
          <ChatMessage v-for="m in messages" :data="m" />
        </div>
      </div>


    </div>
    <div class="px-2 pb-2 border-t border-zinc-700 overflow-y-auto max-h-[200px] flex-shrink-0" v-if="open">
      <span class="text-xs text-zinc-500">Press <kbd>SHIFT + ENTER</kbd> to add a new line</span>
      <UTextarea @click="focus = true" @blur="focus = false" v-model="text" placeholder="Send Message..." :rows="1"
        :autoresize="true" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.open {
  @apply h-screen md:max-h-[500px];
}
</style>