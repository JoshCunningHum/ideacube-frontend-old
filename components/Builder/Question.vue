<script lang="ts" setup>
import { QuestionType, type Question } from '~/types/Question';
import { get, set } from '@vueuse/core';
import draggable from 'vuedraggable'

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

// Stores
const builderStore = useQuizBuilderStore();

// Data
const { copyQuestions: questions, copyChoiceMap: choiceMap } = storeToRefs(builderStore);
const choices = computed(() => get(choiceMap).find(cm => cm.quizID === props.question.id)?.choices || []);

// Question Types
const qtypes = [{
  label: 'Choices',
  value: 0
}, {
  label: 'Identification',
  value: 1
}];
const chosenType = ref(qtypes[props.question.type || 0]);
watch(chosenType, v => {
  props.question.type = v.value;

  if(v.value === QuestionType.Identification){
    // Set all choices to correct and their points equal to our points
    get(choices).forEach(c => {
      c.is_correct = true;
      c.point = props.question.points;
    });
  }
})

// Points
const autoPoints = ref(false);
const points = ref(props.question.points);

const highestPointChoice = useArrayReduce(choices, (highest, c) => !c.point || c.point < highest ? highest : c.point, 0);
const correctChoices = useArrayFilter(choices, c => !!c.is_correct);
const totalPointsOnCorrect = useArrayReduce(correctChoices, (total, c) => total += !!c.point ? c.point : 0, 0);

watchDeep([choices, chosenType, autoPoints, points], () => {
  if(!get(autoPoints)) return;
  
  if(get(chosenType).value === QuestionType.Identification){
    set(points, get(highestPointChoice));
  }else{
    set(points, get(totalPointsOnCorrect));
  }
})

watch(points, v => {
  if (v === undefined) set(points, 0);
  else props.question.points = v;
})

// Operations
const remove = () => {
  get(questions).splice(props.index, 1);
}

const addChoice = () => {
  get(choices).push({
    id: Math.round(Math.random() * 1000), // Not really important
    text: `${props.question.id} - Choice #${get(choices).length}`,
    question_id: props.question.id,
    is_correct: get(chosenType).value === QuestionType.Identification,
    point: get(chosenType).value === QuestionType.Identification ? get(points) : 0
  });
}

</script>

<template>
  <div class=" bg-prim-900 rounded-sm mb-2 p-2 flex gap-2 items-center min-w-[90vw]">

    <UIcon name="i-mdi-menu" class="text-2xl cursor-pointer dragger" />

    <div class="flex flex-col flex-grow">

      <div class="flex gap-2 items-center">

        <UFormGroup :label="`Question Text`" :ui="{ label: { base: 'text-xs' } }" class="flex-grow">

          <UTextarea :autoresize="true" v-model="question.text" :rows="1" variant="none" placeholder="Question Text..."
            class="border-b border-prim-600" />

        </UFormGroup>
        <UIcon name="i-mdi-trash" class="text-2xl cursor-pointer text-red-500" @click="remove" />

      </div>

      <div class="py-2 flex gap-2">

        <div class="w-2/5 min-w-[6rem] max-w-[20rem] flex flex-col gap-1">

          <!-- Question Type -->
          <UFormGroup label="Question type" :ui="{ label: { base: 'text-xs' } }">
            <USelectMenu :options="qtypes" v-model="chosenType" variant="none" class="border-b border-prim-600" />
          </UFormGroup>

          <!-- Points -->
          <UFormGroup label="Points" :ui="{ label: { base: 'text-xs' } }">
            <UButtonGroup class="flex">
              <UInput type="number" class="flex-grow" :disabled="autoPoints" v-model="points" />
              <UButton :label="`${autoPoints ? 'Automatic' : 'Manual'}`" @click="autoPoints = !autoPoints"
                :color="`${autoPoints ? 'accent' : 'prim'}`"
                :ui="{ base: 'w-28 text-center flex justify-center items-center' }" />
            </UButtonGroup>
          </UFormGroup>

        </div>


        <UFormGroup :label="chosenType.value === QuestionType.Identification ? 'Answers' : 'Choices'" :ui="{ label: { base: 'text-xs' } }" class="w-full">

          <div class="flex flex-col gap-1 w-full">


            <draggable tag="div" :list="choices" class="list-group" handle=".dragger" item-key="id" :="{
              animation: 200,
              ghostClass: 'ghost'
            }">

              <template #item="{ element: c, index: i }" >

                <BuilderChoice :choice="c" :index="i" :question="question" />

              </template>

            </draggable>

            <div>
            <UButton color="amber" @click="addChoice">
              Add {{ chosenType.value === QuestionType.Identification ? 'Answer' : 'Choice' }}
            </UButton>
            </div>

          </div>

        </UFormGroup>

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped></style>