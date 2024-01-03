<template>
  <div class="h-screen w-screen flex flex-col">
      <NavBar />
      <div class="flex-grow min-h-0 overflow-y-auto" v-show="!isSmall || !mob_sidebar_open">
          <slot />
      </div>
        <Chat />
  </div>
</template>

<script setup>

// Sidebar responsiveness
const responsiveStore = useResponsiveStore();
const { isSmall, mob_sidebar_open } = storeToRefs(responsiveStore);

// Initialize socket on mount
onMounted(() => {
    const ws = useSocket();
    if(!ws.isInitialized(ws.socket)) ws.initialize();
})

</script>

<style lang="scss"></style>