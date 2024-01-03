<script lang="ts" setup>
import { get, set } from '@vueuse/core'
import type { Class } from '~/types/Class';

// Stores
const classStore = useClassStore();
const quizStore = useQuizStore();

// Data
const { quizzes } = storeToRefs(quizStore);
const { sync: syncQuiz } = quizStore;
const { sync: syncClass } = classStore;

// onMounted(() => {
  syncClass();
  syncQuiz();
// });

// Filters
const { classes } = storeToRefs(classStore);
const class_filter = ref<Class[]>([]);
const search = ref('');

// Data
const isCreating = ref(false);

// For showing the editor

</script>

<template>
  <div class="p-4 h-full flex flex-col gap-2">
    <QuizzesModalCreate v-model="isCreating" />
    <QuizzesModalDelete />
    <NuxtPage />
    

    <div class="flex gap-2">
      <UButtonGroup class="flex-grow" :ui="{ rounded: 'rounded-sm' }">
        <UInput icon="i-mdi-search" placeholder="Search..." class="flex-grow" v-model="search" />

        <USelectMenu v-model="class_filter" :options="classes" multiple>

          <template #label>
            <span class="min-w-[150px]">{{ class_filter.length || 'Nothing' }} Selected</span>
          </template>

          <template #option="{ option: cl }">
            <span>{{ cl.name }}</span>
          </template>

        </USelectMenu>
      </UButtonGroup>

      <UButton label="Create" color="gray" icon="i-mdi-plus" @click="isCreating = true" />
    </div>

    <div class="flex-grow min-h-0 overflow-y-auto w-full">
      <div class="flex flex-col gap-2 w-full pr-2">
        
        <template v-for="q in quizzes" :key="q.id">
          <QuizzesItem :quiz="q" :search="search" :classfilter="class_filter" />
        </template>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>