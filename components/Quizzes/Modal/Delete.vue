<script lang="ts" setup>
import { get, set } from '@vueuse/core';

// Stores
const quizStore = useQuizStore();
const classStore = useClassStore();

// Data
const { quizToDelete, quizzes } = storeToRefs(quizStore);
const target = computed(() => get(quizzes).find(c => c.id === get(quizToDelete)));
const show = computed({
  get: () => !!get(target),
  set: (v: boolean) => set(quizToDelete, -1)
});

const { classes } = storeToRefs(classStore);
const _class = computed(() => get(classes).find(c => c.id === get(target)?.class_id));

// Request
const isFetching = ref(false);

const remove = async () => {
  set(isFetching, true);

  await quizStore.remove(get(quizToDelete));

  set(isFetching, false);
  set(show, false);
}

</script>

<template>
  <UModal v-model="show" :transition="false" :ui="{
    background: 'bg-white dark:bg-prim-950',
  }">

      <UCard :ui="{ background: 'bg-white dark:bg-prim-950' }" v-if="!!target">

        <template #header>
          <div class="text-2xl">Are you sure you want to delete?</div>
        </template>
        
        <div><span class="text-prim-400">{{ _class?.name }}</span> {{ target.name }}</div>

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