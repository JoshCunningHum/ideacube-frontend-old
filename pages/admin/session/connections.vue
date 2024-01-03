<script lang="ts" setup>
// Stores
const socketStore = useSocketStore();

// Data
const { peers } = storeToRefs(socketStore);
const peers_unique = useArrayUnique(peers, (a, b) => a.id === b.id);
const peers_sorted = computed(() => [...peers_unique.value].sort((a, b) => {
  const fna = userFullName(a).toLowerCase(), fnb = userFullName(b).toLowerCase();
  return fna < fnb ? -1 : fna > fnb ? 1 : 0;
}));

const search = ref('');

</script>

<template>
  <div class="p-4 h-full flex flex-col gap-2">

    <UButton icon="i-mdi-chevron-left" variant="link" label="Back" to="/admin/session" color="prim" :padded="false" />
    <h1 class="text-3xl font-bold">Device Connections</h1>
    <p class="text-sm text-prim-400">Here you can see all connected users along with their corresponding accounts and wether have they started joining the session or not (only when you start sharing)</p>
    <UDivider />

    <UButtonGroup :ui="{ rounded: 'rounded-sm'}">
      <UInput icon="i-mdi-search" class="flex-grow" placeholder="Search..." v-model="search" />
    </UButtonGroup>

    <div class="flex-grow min-h-0 overflow-y-auto flex flex-col gap-2">
      <template v-for="p in peers_sorted" :key="p.id">
        <SessionDeviceItem v-if="`${p.first_name} ${p.last_name}`.toLowerCase().includes(search)" :socket-user="p" />
      </template>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
</style>