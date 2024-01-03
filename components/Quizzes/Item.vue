<script lang="ts" setup>
import { get, set } from '@vueuse/core';
import type { Class } from '~/types/Class';
import type { Quiz } from '~/types/Quiz';
import { SessionTypes, type SessionProps, type SessionQuizParams } from '~/types/Session';

const props = defineProps({
  quiz: {
    type: Object as () => Quiz,
    required: true
  },
  search: {
    type: String
  },
  classfilter: {
    type: Array<Class>,
    default: []
  }
})

const router = useRouter();

// Stores
const sessionStore = useSessionStore();
const quizStore = useQuizStore();

// Helper Predicates
const isQuizParams = (args: SessionProps | undefined) : args is SessionQuizParams => !!args && 'quiz_id' in args && 'class_id' in args;

// Data
const { quizToDelete } = storeToRefs(quizStore);
const { type, args } = storeToRefs(sessionStore);
const _class = classFromId(props.quiz.class_id);

const isSessionExisting = computed(() => get(type) !== SessionTypes.Null);
const isQuizOnSession = computed(() => isQuizParams(args.value) && args.value.quiz_id === props.quiz.id);

// Filter
const classfilter = computed(() => props.classfilter);
const show = computed(() => 
(!props.search || props.quiz.name?.toLowerCase().includes(props.search.toLowerCase())) && 
(get(classfilter).length === 0 || get(classfilter).some(c => c.id === props.quiz.class_id)));

// Starting Session
const start = () => {
  const args = { quiz_id: props.quiz.id, class_id: props.quiz.class_id };
  sessionStore.start(SessionTypes.Quiz, args);
  // Then go to session route
  router.push('/admin/session');
}

</script>

<template>
  <div class="w-full h-24 rounded-sm overflow-hidden" v-if="show">

    <div class="h-2/3 bg-prim-800/80 p-2 flex-col">

      <div class="text-2xl flex justify-between">
        <span class="truncate">{{ quiz.name }}</span>

        <div class="flex gap-2">

          <UButton 
          label="Edit"
          color="prim" 
          icon="i-mdi-edit" 
          :to="`/admin/quizzes/${quiz.id}`" 
          v-if="!isQuizOnSession" />

          <UButton icon="i-mdi-play" 
          @click="start" :disabled="isSessionExisting" 
          :color="isQuizOnSession ? 'prim' : 'accent'" 
          :label="isQuizOnSession ? 'Ongoing' : 'Start'" 
          :loading="isQuizOnSession" />

          <UButton 
          color="rose" 
          icon="i-mdi-trash" 
          variant="ghost" 
          :ui="{ rounded: 'rounded-full'}" 
          @click="quizToDelete = quiz.id"/>
        </div>
      </div>

      <div class="text-xs px-1 text-prim-300">
        <span>{{ _class?.name }}</span>
      </div>
    </div>

    <div class="flex items-center h-1/3 justify-between bg-prim-800/30 px-2">
      <span class="text-xs">{{ quiz.points ? quiz.points : 0 }} points</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>