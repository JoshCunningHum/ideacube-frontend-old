<script lang="ts" setup>
import { get, set } from '@vueuse/core';

// Stores
const classStore = useClassStore();

// Data
const { classToDelete, classes } = storeToRefs(classStore);

const targetClass = computed(() => get(classes).find(c => c.id === get(classToDelete)));
const show = computed({
  get: () => !!get(targetClass),
  set: (v: boolean) => set(classToDelete, -1)
});

// Request
const isFetching = ref(false);

const remove = async () => {
  set(isFetching, true);

  await classStore.remove(get(classToDelete));

  set(isFetching, false);
  set(show, false);
}

</script>

<template>
  <UModal v-model="show" :transition="false" :ui="{
    background: 'bg-white dark:bg-prim-950',
  }">

      <UCard :ui="{ background: 'bg-white dark:bg-prim-950' }" v-if="!!targetClass">

        <template #header>
          <div class="text-2xl">Are you sure you want to delete?</div>
        </template>
        
        <div>{{ targetClass.name }}</div>
        <div>has {{ targetClass.studentCount }} student<span v-if="targetClass.studentCount !== 1">s</span> </div>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton color="white" @click="show = false">Cancel</UButton>
            <UButton color="red" :loading="isFetching" @click="remove" >Delete</UButton>
          </div>
        </template>

      </UCard>

  </UModal>
</template>

<style lang="scss" scoped>

</style>