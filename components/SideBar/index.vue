<script lang="ts" setup>

const account = useAccount();
const isAdmin = computed(() => account.user.value?.is_admin || false);

</script>

<template>

  <div class="w-full h-full min-h-0 overflow-y-auto">

    <SideBarAdmin v-if="isAdmin" />
    <SideBarStudent v-else />

  </div>

</template>

<style lang="scss" scoped>

</style>