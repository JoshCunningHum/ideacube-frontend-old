<script lang="ts" setup>
import { get, set } from '@vueuse/core';
import type { Choice } from '~/types/Choice';
import { type Question, QuestionType } from '~/types/Question';

const props = defineProps({
  choice: {
    type: Object as () => Choice,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  question: {
    type: Object as () => Question,
    required: true
  }
})

// Stores
const builderStore = useQuizBuilderStore();

// Data
const { copyChoiceMap: choiceMap } = storeToRefs(builderStore);
const choices = computed(() => get(choiceMap).find(cm => cm.quizID === props.question.id)?.choices || []);

const iscorrect = computed(() => props.choice.is_correct);
const pointdistribute = ref(!props.choice.point);

const chosenType = computed(() => props.question.type);

const correctChoices = useArrayFilter(choices, c => !!c.is_correct);
const totalPointsOnCorrect = useArrayReduce(correctChoices, (total, c) => total += !!c.point ? c.point : 0, 0);


watch([chosenType, pointdistribute, props.question, choices], () => {
  if(!get(pointdistribute)) return;

  if(get(chosenType) === QuestionType.Identification){
      get(choices).forEach(c => c.point = props.question.points);
    }else{
      get(correctChoices).forEach((c, i, arr) => c.point = Math.floor((props.question.points || 0) / arr.length))
    }

})

// Operations
const remove = () => {
  get(choices).splice(props.index, 1);
}
</script> 

<template>
  <div class="mb-2 px-2 py-1 flex gap-2 items-center">
    <UIcon name="i-mdi-menu" class="text-2xl cursor-pointer dragger" />
    <div class="w-24" v-if="question.type !== QuestionType.Identification">
      <UButton :color="choice.is_correct ? 'primary' : 'prim'" @click="choice.is_correct = !choice.is_correct" block>{{ choice.is_correct ? 'Correct' : 'Incorrect' }}</UButton>
    </div>
    <div class="w-60" v-if="choice.is_correct">
      <UButtonGroup class="flex">

        <UInput type="number" class="flex-grow" :disabled="pointdistribute" placeholder="Points" v-model="choice.point" />
        
        <UButton :label="`${pointdistribute ? 'Distributed' : 'Manual'}`" @click="pointdistribute = !pointdistribute"
                :color="`${pointdistribute ? 'primary' : 'prim'}`"
                :ui="{ base: 'w-28 text-center flex justify-center items-center' }" />

      </UButtonGroup>
    </div>
    <div class="flex-grow">
          <UTextarea :autoresize="true" v-model="choice.text" :rows="1" variant="none" placeholder="Question Text..."
            class="border-b border-prim-600" />
    </div>
      <UIcon name="i-mdi-close" class="text-2xl cursor-pointer" @click="remove" />
  </div>
</template>

<style lang="scss" scoped>

</style>