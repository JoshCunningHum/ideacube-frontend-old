<script lang="ts" setup>
import { get, set } from '@vueuse/core'
import type { Class } from '~/types/Class';
import type { User } from '~/types/User';

// Store
const studentStore = useStudentStore();
const classStore = useClassStore();
const { sync: syncClasses } = classStore;
const { sync: syncStudents, approve, unenroll } = studentStore;
const { unregisteredcount } = storeToRefs(studentStore);

// Data
const tabs = computed(() => [{
  label: 'Registered',
  
}, {
  label: 'Unregistered',
  badge: get(unregisteredcount)
}]);

const { students } = storeToRefs(studentStore);
const showUnregister = ref(0);

syncStudents();
syncClasses();


// Class Filter
const { classes } = storeToRefs(classStore);
const class_filter = ref<Class[]>([]);

// Search
const search = ref('');
const isIncluded = (u: User) => {
  const fullname = `${u.first_name} ${u.last_name}`.toLowerCase();
  const class_filter_ids = get(class_filter).map(c => c.id);
  const is_class_included = !class_filter_ids.length || class_filter_ids.includes(u.class_id);
  return (!get(search) || fullname.includes(get(search).toLowerCase())) && is_class_included && !get(showUnregister) === !!u.is_approved;
}

</script>

<template>
  <div class="flex flex-col p-3 h-full">
    <StudentsModalDelete />

    <!-- Ignore this big chunk of code -->
    <UTabs :items="tabs"
      @change="syncStudents()"
      :ui="{ list: { background: 'bg-transparent dark:bg-transparent', width: 'w-full max-w-[405px]', marker: { rounded: 'rounded-sm', background: 'bg-prim-500 dark:bg-prim-400', }, tab: { active: 'text-prim-900 dark:text-prim-900' } } }"
      v-model="showUnregister"> <template #default="{ item, index }">
        <div class="truncate helvetica round flex items-center gap-2"> <span>{{ item.label }}</span>
          <UBadge v-if="item.badge" color="red" size="xs">{{ item.badge }}</UBadge>
        </div>
      </template> </UTabs>

    <div class="flex">
      <UButtonGroup class="px-1 pb-2 flex-grow" :ui="{ rounded: 'rounded-sm'}">
        <UInput block placeholder="Search..." icon="i-mdi-search" class="flex-grow" v-model="search"></UInput>
        <USelectMenu v-model="class_filter" :options="classes" multiple>

          <template #label>
            <span class="min-w-[150px]">{{ class_filter.length || 'Nothing' }} Selected</span>
          </template>

          <template #option="{ option: cl }">
            <span>{{ cl.name }}</span>
          </template>

        </USelectMenu>
      </UButtonGroup>
    </div>

    <div class="flex-grow mx-1 min-h-0 overflow-y-auto flex flex-col gap-2 pr-2">
      <template v-for="u in students">
        <StudentsItem :user="u" v-if="isIncluded(u)" />
      </template>

    </div>

  </div>
</template>

<style lang="scss" scoped></style>