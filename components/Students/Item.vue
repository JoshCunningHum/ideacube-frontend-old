<script lang="ts" setup>
import type { User } from '~/types/User';
import { get, set } from '@vueuse/core'

const props = defineProps({
  user: {
    type: Object as () => User,
    required: true
  }
})

// Store
const studentStore = useStudentStore();
const classStore = useClassStore();
const not_approved = computed(() => !props.user.is_approved);

// Data
const { studentToRemove } = storeToRefs(studentStore);
const { classes } = storeToRefs(classStore);
const _class = computed(() => get(classes).find(c => c.id === props.user.class_id));

// Approve
const is_approving = ref(false);
const approve = async () => {
  set(is_approving, true);

  await studentStore.approve(props.user.id);

  set(is_approving, false);
}

</script>

<template>
  <div class="py-2 px-4 bg-prim-800 hover:bg-prim-700 rounded-sm flex justify-between items-center">

    <div class="flex gap-2 items-center text-sm">
      <span class="text-prim-400 truncate max-w-[100px]">{{ _class?.name || '[No Class]' }}</span>
      <span class="py-1.5">{{ user.first_name }} {{ user.last_name }}</span>
    </div>

    <div class="flex gap-2 items-center">
      <UButton v-if="not_approved" label="Approve" @click="approve" size="xs" color="prim" :loading="is_approving" />
      <UButton variant="link" icon="i-mdi-trash" color="red" :padded="false" @click="studentToRemove = user.id" />
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>