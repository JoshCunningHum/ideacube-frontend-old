<script lang="ts" setup>
import type { Quiz } from '~/types/Quiz';

const props = defineProps({
  quiz: {
    type: Object as () => Quiz,
    required: true
  }
})

// Stores
const quizStore = useQuizStore();

// Data
const { quizToDelete } = storeToRefs(quizStore);
const _class = classFromId(props.quiz.class_id);

</script>

<template>
  <div class="w-full h-24 rounded-sm overflow-hidden">

    <div class="h-2/3 bg-prim-800/80 p-2 flex-col">

      <div class="text-2xl flex justify-between">
        <span class="truncate">{{ quiz.name }}</span>

        <div class="flex gap-2">
          <UButton label="Edit" color="prim" icon="i-mdi-edit" :to="`/admin/quizzes/${quiz.id}`" />
          <UButton icon="i-mdi-play" color="accent" label="Start"/>
          <UButton color="rose" icon="i-mdi-trash" variant="ghost" :ui="{ rounded: 'rounded-full'}" @click="quizToDelete = quiz.id"/>
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