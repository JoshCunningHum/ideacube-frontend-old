<script lang="ts" setup>
import { get, set } from '@vueuse/core';

definePageMeta({
    layout: 'student',
    middleware: 'auth'
})

// Stores
const responsiveStore = useResponsiveStore();
const { isSmall } = storeToRefs(responsiveStore);

// Account Details
const hasMounted = ref(false);
const hasApproved = ref(false);

onMounted(() => {
  const account = useAccount();
  set(hasApproved, !!account.user.value?.is_approved);
  set(hasMounted, true);
})

</script>

<template>
  <div class="w-full max-w-7xl px-4 mx-auto flex h-full">
    
    <!-- Sidebar Nav -->
    <template v-if="hasApproved">
      
      <div class="h-full w-full shrink max-w-[12.5rem] border-r border-prim-700" v-if="!isSmall">
        <SideBar />
      </div>
      <div class="flex-grow h-full w-full max-w-[67.5rem] ">
        <NuxtPage />
      </div>
      
    </template>
    <template v-else-if="hasMounted">
      <NotApproved />
    </template>

  </div>
</template>

<style lang="scss" scoped>

</style>