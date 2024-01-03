<script lang="ts" setup>
import { get, set } from '@vueuse/core';

// Stores
const classStore = useClassStore();
const responsiveStore = useResponsiveStore();

// Reponsivness
const { isLessLarge, isLessExtra } = storeToRefs(responsiveStore);
const grid_cols = computed(() => `col-${get(isLessLarge) ? 2 : get(isLessExtra) ? 3 : 4}`);

// Data
const { sync } = classStore;
const { classes } = storeToRefs(classStore);
const search = ref('');
const isCreating = ref(false);
sync();

</script>

<template>
  <div class="p-4 h-full flex flex-col gap-2">
    <ClassModalCreate v-model="isCreating" />
    <ClassModalCode />
    <ClassModalDelete />
    <ClassModalRename />

    <div class="flex gap-2 w-full">
      <UInput icon="i-mdi-search" placeholder="Search..." class="flex-grow" v-model="search" />
      <UButton icon="i-mdi-plus" color="gray" @click="isCreating = true">Create</UButton>
    </div>

    <div :class="`flex-grow scroll-stable min-h-0 overflow-y-auto`">
      <div :class="`grid pr-4 ${grid_cols} grid-rows-none gap-2`">

        <template v-for="c in classes" :key="c.id">
          <ClassCard v-if="!search || (c.name && c.name.toLowerCase().includes(search.toLowerCase()))" :name="c.name"
            :code="c.code" :student-count="c.studentCount" :id="c.id" />
        </template>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col-2 {
  @apply grid-cols-2;
}

.col-3 {
  @apply grid-cols-3;
}

.col-4 {
  @apply grid-cols-4;
}
</style>