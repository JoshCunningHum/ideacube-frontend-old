<script lang="ts" setup>
import type { Choice } from '~/types/Choice';
import { QuestionType, type Question } from '~/types/Question';
import { get, set } from '@vueuse/core';


const props = defineProps({
  question: {
    type: Object as () => Question,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const question = computed(() => props.question);

const questionStore = useQuestionsStore();
const choices = ref<Choice[]>([]);

const chosen = ref<string>('');

watchImmediate(question, async (q) => {
  if(!q.quiz_id) return;

  const data = await questionStore.choices(q.quiz_id);
  if(!data.value) return;

  get(choices).splice(0);
  get(choices).push(...data.value.choices.filter(c => c.question_id === q.id));
})

</script>

<template>
  <div class="bg-zinc-800 px-3 py-1.5 flex flex-col gap-1">

    <div class="flex justify-between items-center">
      <h2 class="text-0xl font-light">{{ index + 1 }}. {{ question.text }}</h2>
      <span class="text-zinc-500">{{ question.points }} points</span>
    </div>

    <div v-if="question.type === QuestionType.Choice">
      <URadioGroup :name="`${question.id}`" v-model="chosen" :options="choices" option-attribute="text" />
    </div>
    <div v-else-if="question.type === QuestionType.Identification">
      <UTextarea :autoresize="true" :rows="1" />
    </div>

  </div>
</template>

<style lang="scss" scoped></style>