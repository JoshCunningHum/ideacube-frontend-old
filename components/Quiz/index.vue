<script lang="ts" setup>
import type { Question } from '~/types/Question';
import { get, set } from '@vueuse/core';

const quizStore = useQuizStore();
const classStore = useClassStore();
const sessionStore = useSessionStore();
const questionStore = useQuestionsStore();

classStore.sync();
quizStore.sync();

const { type, args } = storeToRefs(sessionStore);
const { classes } = storeToRefs(classStore);
const { quizzes } = storeToRefs(quizStore);

const quiz = useArrayFind(quizzes, q => isSessionQuiz(args.value) && args.value.quiz_id === q.id);
const clas = useArrayFind(classes, c => isSessionQuiz(args.value) && args.value.class_id === c.id);
const questions = ref<Question[]>([]);

// Monitor quiz for any changes to update the question list
watchImmediate(quiz, async (v) => {
  if (!v) return;
  get(questions).splice(0);
  const fetched_questions = await questionStore.questions(v.id);
  if (fetched_questions) get(questions).push(...fetched_questions.questions);
})

</script>

<template>
  <div class="flex-grow min-h-0 overflow-y-auto pr-2 scroll-stable" v-if="!!quiz && !!clas">
    <h1 class="text-3xl font-bold">{{ quiz.name }} - {{ clas.name }}</h1>
    <p class="text-prim-400 text-sm">Please answer honestly</p>

    <UDivider class="my-2" />

    <div class="flex flex-col gap-2">
      <QuizQuestion v-for="(q, i) in questions" :key="q.id" :question="q" :index="i" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>