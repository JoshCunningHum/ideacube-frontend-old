<script lang="ts" setup>
import { set, get } from '@vueuse/core';
import { SessionTypes, type SessionProps, type SessionQuizParams } from '~/types/Session';

const { user } = useAccount();
const quizStore = useQuizStore();
const sessionStore = useSessionStore();
const classStore = useClassStore();

classStore.sync();
quizStore.sync();

const isquiz = (args: SessionProps | undefined): args is SessionQuizParams => !!args && 'quiz_id' in args && 'class_id' in args;

const { quizzes } = storeToRefs(quizStore);
const { classes } = storeToRefs(classStore);
const { _type, _args, type, args } = storeToRefs(sessionStore);


const _quiz = useArrayFind(quizzes, q => isquiz(_args.value) && q.id === _args.value.quiz_id);
const _class = useArrayFind(classes, c => !!_quiz.value && c.id === _quiz.value.class_id);

const quiz = useArrayFind(quizzes, q => isquiz(args.value) && q.id === args.value.quiz_id);
const clas = useArrayFind(classes, c => !!quiz.value && c.id === quiz.value.class_id);

const hasSession = computed(() => 
  _type.value !== SessionTypes.Null && 
  user.value && _class.value && user.value.class_id === _class.value.id);
const inSession = computed(() => type.value !== SessionTypes.Null);

const join = () => {
  if(!_args.value) return;
  sessionStore.join(get(_type), _args.value);
}

</script>

<template>
  <div class="p-4 h-full flex flex-col gap-2">

    <template v-if="inSession && type && quiz">
      <div class="p-2 rounded-sm flex flex-col h-full">
        <Quiz />
      </div>
    </template>
    <template v-else-if="hasSession && !!_type">
      <div class="p-2 bg-zinc-800 rounded-sm flex justify-between items-center">

        <div>
          <h1 class="text-3xl font-bold">{{ SessionTypes[_type] }} Session Ongoing</h1>
          <p class="text-prim-400 text-sm" v-if="!!_quiz">{{ _quiz.name }} - {{ _class?.name }}</p>
        </div>

        <UButton color="accent" @click="join">Join</UButton>
      </div>

    </template>
    <template v-else>
      <h1 class="text-3xl font-bold">No session started yet</h1>
    </template>

  </div>
</template>

<style lang="scss" scoped></style>