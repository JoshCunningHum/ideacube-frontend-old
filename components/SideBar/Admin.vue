<script lang="ts" setup>
import { set, get } from '@vueuse/core';

// Route
const route = useRoute();

// Stores
const responsiveStore = useResponsiveStore();
const studentStore = useStudentStore();

// Responsiveness
const { isSmall, mob_sidebar_open } = storeToRefs(responsiveStore);

// Data
const { unregisteredcount } = storeToRefs(studentStore);

const links = computed(() => [{
  label: 'Students',
  badge: get(unregisteredcount),
  to: '/admin/students',
  click: () => set(mob_sidebar_open, false)
}, {
  label: 'Classes',
  to: '/admin/classes',
  click: () => set(mob_sidebar_open, false)
}, {
  label: 'Quizzes',
  to: '/admin/quizzes',
  click: () => set(mob_sidebar_open, false)
}]);

// Add 'isInRoute' class when current route starts with the path in the link.to
const isInRoute = (link: string) => {
  return route.path.startsWith(link) ? 'isInRoute' : '';
}

</script>

<template>
  <UVerticalNavigation
    :links="links"
    :ui="{
      padding: 'px-4 py-1',
      rounded: 'rounded-none',
      inactive: '',
      active: '',
      badge: {
        active:'',
        inactive: ''
      }
    }">

    <!-- Badge (PC) | Label (Mobile) -->
    <template #default="{ link }">
      
      <div class="badge" v-if="!isSmall">
        <UBadge v-if="link.badge" :label="link.badge" color="red" size="xs" />
      </div>
      <div v-else class="label">
        <span :class="`${isInRoute(link.to)}`">{{ link.label }}</span>
      </div>

    </template>

    <!-- Label (PC) | Badge (Mobile) -->
    <template #badge="{ link }">

      <div class="label" v-if="!isSmall">
        <span :class="`${isInRoute(link.to)}`">{{ link.label }}</span>
      </div>
      <div class="badge" v-else>
        <UBadge v-if="link.badge" :label="link.badge" color="red" size="xs" />
      </div>

    </template>

  </UVerticalNavigation>
</template>

<style lang="scss" scoped>

.label {
  @apply text-lg text-prim-500 group-hover:text-prim-100 h-8 flex items-center;

  .isInRoute{
    @apply text-prim-200;
  }
}

.badge {
  @apply text-right justify-self-end flex-grow;
}

</style>