<script lang="ts" setup>
import { get, set } from '@vueuse/core';
import { QuestionType } from '~/types/Question';
import draggable from 'vuedraggable'

const alwaysopen = ref(true);
watchImmediate(alwaysopen, v => !!v || set(alwaysopen, true));

// Store
const responsiveStore = useResponsiveStore();
const quizStore = useQuizStore();
const builderStore = useQuizBuilderStore();

// Router
const route = useRoute('admin-quizzes-quiz');
const router = useRouter();

// Data
const { copyQuiz: quiz, copyQuestions: questions, hasChanges } = storeToRefs(builderStore);

// Responsiveness
const { isSmall } = responsiveStore;

// Exiting
const exit = () => {
  if(get(hasChanges)){
    const proceed = confirm('You have unsaved changes, proceed?');
    if(!proceed) return;
  }

  builderStore.end();
  router.push('/admin/quizzes');
}

// Operations
const addQuestion = () => {
  get(questions).push({
    id: Math.round(Math.random() * 1000), // Not really important
    text: `Question #${questions.value.length}`,
    quiz_id: quiz.value?.id || -1,
    type: QuestionType.Choice,
    autograded: true,
    points: 1
  })
}

const isSaving = ref(false);
const save = async () => {
  set(isSaving, true);

  await builderStore.apply();

  set(isSaving, false);
}

// On Mount
onMounted(async () => {
  const quizExist = await builderStore.acquire(parseInt(route.params.quiz));
  if(!quizExist) exit();
});

</script>

<template>
  <UModal v-model="alwaysopen" :transition="false" :ui="{
    background: 'bg-transparent dark:bg-transparent',
    height: 'h-[90vh]',
    rounded: 'rounded-sm',
    width: '',
    padding: 'p-0',
    margin: 'm-0 sm:m-0'
  }" :prevent-close="true"
    :fullscreen="isSmall">
    <div class="p-3 flex flex-col gap-2 container mx-auto bg-prim-950" v-if="!!quiz">
      
      <!-- Header -->
      <div class="flex justify-between">

        <UInput size="lg" icon="i-mdi-pen" placeholder="Quiz Name" v-model="quiz.name" />

        <div class="flex gap-2">

          <UButton icon="i-mdi-floppy" size="xs" v-if="hasChanges" :loading="isSaving" @click="save" color="accent">Save Changes</UButton>

          <UButton variant="link" :square="true" icon="i-mdi-close" color="white" @click="exit" />

        </div>

      </div>

      <!-- Body -->
      <div class="flex-grow min-h-0 overflow-y-auto pr-2">

        <draggable
          tag="div"
          :list="questions"
          class="list-group"
          handle=".dragger"
          item-key="id"
          :="{
            animation: 200,
            ghostClass: 'ghost'
          }">

          <template #item="{ element: q, index: i }">

            <BuilderQuestion :key="q.id" :index="i" :question="q" />

          </template>

        </draggable>

        <!-- Add a question -->
        <div class="sticky bottom-0">
          <UButton block @click="addQuestion" color="white">Add Question</UButton>
        </div>

      </div>

    </div>

  </UModal>
</template>

<style lang="scss" scoped>

.container{
  @apply h-full min-h-[90vh];

  &.mobile {

  }
}

</style>