<script lang="ts" setup>

const sessionStore = useSessionStore();

const { stopconfirm: show } = storeToRefs(sessionStore);

</script>

<template>
  <UModal v-model="show">
    <UCard>
      <template #header>
        <h1 class="text-3xl">End the session?</h1>
      </template>

      <p class="text-sm">Ending the session will forcefully end the sesion to all device connections. Continue?</p>

      <template #footer>
        <div class="flex justify-end gap-2">
          <UButton color="gray" @click="show = false">Cancel</UButton>
          <UButton color="red" @click="sessionStore.stop">Confirm</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style lang="scss" scoped>

</style>