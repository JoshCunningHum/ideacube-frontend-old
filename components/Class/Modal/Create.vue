<script lang="ts" setup>
import { object, string, type InferType } from 'yup';
import { get, set } from '@vueuse/core';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

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
const classStore = useClassStore();
const { classes } = storeToRefs(classStore);
const state = reactive({ classname: '' });

// Validation
const schema = object({
  classname: string().required(`Class name shouldn't be empty`)
    .test('No Duplicate Names', "A class with that name already exists", () => {
      return new Promise(resolve => resolve(!get(classes).some(c => c.name === state.classname)));
    })
})
type Schema = InferType<typeof schema>
const isFetching = ref(false);

// Fetching

const create = (e: FormSubmitEvent<Schema>) => {
  set(isFetching, true);

  classStore.create(e.data.classname);

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
            <UIcon name="i-mdi-class" />
            <span>Create Class</span>
          </div>
        </template>
        <UFormGroup name="classname">
          <UInput icon="i-mdi-class" placeholder="Class name" v-model="state.classname" />
        </UFormGroup>

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