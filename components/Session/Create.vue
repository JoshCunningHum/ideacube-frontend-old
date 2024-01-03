<script lang="ts" setup>
import { get, set } from '@vueuse/core';
import { type SessionProps, SessionTypes } from '~/types/Session';
import type { Class } from '~/types/Class';
import type { Quiz } from '~/types/Quiz';

// Stores
const sessionStore = useSessionStore();
const classStore = useClassStore();
const quizStore = useQuizStore();

const { sync: syncClass } = classStore;
const { sync: syncQuiz } = quizStore;

const { classes } = storeToRefs(classStore);
const { quizzes } = storeToRefs(quizStore);

// Sync Data 

syncClass();
syncQuiz();

// Data
const sharecategories = ['Quiz', 'Screen'];
const sharecategory = ref(sharecategories[0]);
const chosenClass = ref<Class>();
const chosenQuiz = ref<Quiz>();
const filteredQuizzes = useArrayFilter(quizzes, q => q.class_id === get(chosenClass)?.id);

watchImmediate(sharecategory, () => set(chosenClass, undefined));
watchImmediate(chosenClass, () => set(chosenQuiz, undefined));

// Starting session
const canstart = computed(() => {
  switch(get(sharecategory)){
    case 'Screen':
      return false;
    case 'Quiz':
      return !!get(chosenClass) && !!get(chosenQuiz);
  }
})

const start = () => {
  const type = get(sharecategory) === 'Quiz' ? SessionTypes.Quiz : SessionTypes.Video;

  const args : SessionProps = 
    type === SessionTypes.Quiz ? 
      { quiz_id: get(chosenQuiz)?.id || 0, class_id: get(chosenClass)?.id || 0 } :
      { offer: 'test' };

  sessionStore.start(type, args);
}

</script>

<template>
  <div class="flex flex-col gap-2">
    
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Share Something</h1>

      <UPopover :popper="{ placement: 'bottom-end' }">

        <UButton variant="link" :padded="false" icon="i-mdi-dots-vertical" size="xl" />

        <template #panel>
          <SessionProperties />
        </template>

      </UPopover>

    </div>
    <p>Welcome to sessions, start sharing something here...</p>

    <UButtonGroup :ui="{ rounded: 'rounded-sm' }">

      <USelectMenu class="flex-grow" :ui="{ rounded: 'rounded-sm' }" v-model="sharecategory" :options="sharecategories" />

      <USelectMenu v-if="sharecategory === 'Quiz'" class="flex-grow" :ui="{ rounded: 'rounded-sm' }" v-model="chosenClass" :options="classes" option-attribute="name" />
      <USelectMenu v-if="sharecategory === 'Quiz'" class="flex-grow" :ui="{ rounded: 'rounded-sm' }" v-model="chosenQuiz" :options="filteredQuizzes" option-attribute="name" />

      <UButton color="accent" class="min-w-[100px] flex justify-center" @click="start" :disabled="!canstart">Start</UButton>

    </UButtonGroup>
    <UDivider><span class="text-prim-500 text-sm">Session Options</span></UDivider>

  </div>
</template>

<style lang="scss" scoped>

</style>