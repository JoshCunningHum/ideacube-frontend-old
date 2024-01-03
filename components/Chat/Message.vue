<script lang="ts" setup>

const props = defineProps({
  data: {
    type: Object as () => Message,
    required: true
  }
})

const { user } = useAccount();
const isOwnMessage = computed(() => user.value && userFullName(user.value) === props.data.name);

</script>

<template>
  <div :class="`container ${isOwnMessage ? 'own' : ''}`">
    <span class="name" v-if="!isOwnMessage">{{ data.name }}</span>
    <p class="message">{{ data.message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply max-w-[60%] flex flex-col self-start items-start;

  &.own {
    @apply items-end self-end;

    .message {
      @apply bg-accent-600;
    }
  }

  .name {
    @apply text-xs text-zinc-600;
  }

  .message {
    @apply px-3 py-1.5 bg-zinc-700/50 rounded-lg text-sm;
    word-break: break-word;
  }
}
</style>