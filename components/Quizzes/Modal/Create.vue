<script lang="ts" setup>
import { object, string, type InferType, number } from 'yup';
import { get, set } from '@vueuse/core';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import type { Class } from '~/types/Class';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', v: Boolean): void
}>();

const show = computed({
  get: () => props.modelValue,
  set: (v: Boolean) => emits('update:modelValue', v)
})

// Data
const quizStore = useQuizStore();
const classStore = useClassStore();
const { classes } = storeToRefs(classStore);
const { quizzes } = storeToRefs(quizStore);
const state = reactive<{ name: string, class: Class | undefined }>({
  name: '',
  class: undefined
})

watch(show, v => {
  if(v) state.class = undefined;
})

// Validation
const schema = object({
  name: string().required(`Quiz name shouldn't be empty`),
  class: object<Class>().required('Select a class to assign to')
})
type Schema = InferType<typeof schema>
const isFetching = ref(false);

// Fetching

const create = async (e: FormSubmitEvent<Schema>) => {
  set(isFetching, true);

  await quizStore.create(e.data.name, state.class?.id || -1);

  set(isFetching, false);
  set(show, false);
}
</script>

<template>
  <UModal v-model="show" :transition="false" :ui="{
    background: 'bg-white dark:bg-prim-950',
  }">

    <UForm :state="state" ref="form" :schema="schema" @submit="create">

      <UCard :ui="{ background: 'bg-white dark:bg-prim-950' }">

        <template #header>
          <div class="text-2xl flex items-center gap-2">
            <UIcon name="i-mdi-pen" />
            <span>Create Quiz</span>
          </div>
        </template>

        <div class="flex flex-col gap-2">

          <UFormGroup name="name">
            <UInput icon="i-mdi-pen" placeholder="Quiz name" v-model="state.name" />
          </UFormGroup>


          <UFormGroup name="class">

            <USelectMenu v-model="state.class" :options="classes">

              <template #label>
                <span class="min-w-[150px]">{{ state.class?.name || 'Nothing Selected' }} </span>
              </template>

              <template #option="{ option: cl }">
                <span>{{ cl.name }}</span>
              </template>

            </USelectMenu>

          </UFormGroup>

        </div>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton color="white" @click="show = false">Cancel</UButton>
            <UButton :loading="isFetching" type="submit" color="accent">Create</UButton>
          </div>
        </template>

      </UCard>
    </UForm>

  </UModal>
</template>

<style lang="scss" scoped></style>