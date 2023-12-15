<script lang="ts" setup>

definePageMeta({
    layout: 'admin',
    middleware: 'auth'
})

</script>

<template>
  <div>
    This is the admin
    <UButton label="Logout" />
  </div>
</template>

<style lang="scss" scoped>

</style>