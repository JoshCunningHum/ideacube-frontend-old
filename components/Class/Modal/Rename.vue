<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { get, set } from '@vueuse/core';
import { object, string, type InferType } from 'yup';

// Stores 
const classStore = useClassStore();
const { classes, classToRename } = storeToRefs(classStore);
const state = reactive({ classname: '' });

const targetClass = computed(() => get(classes)
  .find(c => c.id === get(classToRename)));

const show = computed({
  get: () => !!get(targetClass),
  set: (v: boolean) => set(classToRename, -1)
});

watch(targetClass, c => {
  if(!c || !c.name) return;
  state.classname = c.name;
})

// Validation
const schema = object({
  classname: string().required(`Class name shouldn't be empty`)
    .test('No Duplicate Names', "A class with that name already exists", () => {
      return new Promise(resolve => resolve(!get(classes).some(c => c.id !== get(classToRename) && c.name === state.classname)));
    })
})
type Schema = InferType<typeof schema>
const isFetching = ref(false);

// Fetching

const rename = async (e: FormSubmitEvent<Schema>) => {
  set(isFetching, true);

  await classStore.rename(get(classToRename), e.data.classname);

  set(isFetching, false);
  set(show, false);
}

</script>

<template>
  <UModal v-model="show" :transition="false" :ui="{
    background: 'bg-white dark:bg-prim-950',
  }">

    <UForm :state="state" ref="form" :schema="schema" @submit="rename">

      <UCard :ui="{ background: 'bg-white dark:bg-prim-950' }">

        <template #header>
          <div class="text-2xl flex items-center gap-2">
            <UIcon name="i-mdi-class" />
            <span>Rename Class</span>
          </div>
        </template>
        <UFormGroup name="classname">
          <UInput icon="i-mdi-class" placeholder="Class name" v-model="state.classname" />
        </UFormGroup>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton color="white" @click="show = false">Cancel</UButton>
            <UButton :loading="isFetching" type="submit">Rename</UButton>
          </div>
        </template>

      </UCard>
    </UForm>

  </UModal>
</template>

<style lang="scss" scoped>

</style>