<script lang="ts" setup>

definePageMeta({
    layout: 'admin',
    middleware: 'auth'
})

// Stores
const responsiveStore = useResponsiveStore();
const { isSmall } = storeToRefs(responsiveStore);

</script>

<template>
  <div class="w-full max-w-7xl px-4 mx-auto flex h-full">
    
    <!-- Sidebar Nav -->
    <div class="h-full w-full shrink max-w-[12.5rem] border-r border-prim-700" v-if="!isSmall">
      <SideBar />
    </div>
    <div class="flex-grow h-full w-full max-w-[67.5rem] ">
      <!-- Children Route -->
      <NuxtPage />
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>