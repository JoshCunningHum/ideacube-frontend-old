<script lang="ts" setup>
import { get, set } from '@vueuse/core';

// Stores
const studentStore = useStudentStore();
const classStore = useClassStore();

// Data
const { studentToRemove, students } = storeToRefs(studentStore);
const targetStudent = computed(() => get(students).find(s => s.id === get(studentToRemove)));

const { classes } = storeToRefs(classStore);
const _class = computed(() => get(classes).find(c => c.id === get(targetStudent)?.class_id));

const show = computed({
  get: () => !!get(targetStudent),
  set: (v: boolean) => set(studentToRemove, -1)
});

// Request
const isFetching = ref(false);

const remove = async () => {
  set(isFetching, true);

  await studentStore.unenroll(get(studentToRemove));

  set(isFetching, false);
  set(show, false);
}


</script>

<template>
  <UModal v-model="show" :transition="false" :ui="{
    background: 'bg-white dark:bg-prim-950',
  }">

      <UCard :ui="{ background: 'bg-white dark:bg-prim-950' }" v-if="!!targetStudent">

        <template #header>
          <div class="text-2xl">Are you sure you want to remove?</div>
        </template>
        
        <div><span class="text-prim-400">{{ _class?.name }}</span> {{ targetStudent.first_name }} {{ targetStudent.last_name }}</div>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton color="white" @click="show = false">Cancel</UButton>
            <UButton color="red" :loading="isFetching" @click="remove" >Delete</UButton>
          </div>
        </template>

      </UCard>

  </UModal>
</template>

<style lang="scss" scoped>

</style>