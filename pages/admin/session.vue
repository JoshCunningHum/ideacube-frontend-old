<script lang="ts" setup>
import { SessionTypes } from '~/types/Session';

// Route
const route = useRoute();

const sessionStore = useSessionStore();
const { type } = storeToRefs(sessionStore);

</script>

<template>
  <div class="p-4 h-full flex flex-col gap-2" v-if="route.path === '/admin/session'">

    <SessionCreate v-if="type === SessionTypes.Null" />
    <Session v-else />

  </div>
  <NuxtPage v-else />
</template>

<style lang="scss" scoped></style>