<script lang="ts" setup>
import { set, get } from '@vueuse/core';

// Route
const route = useRoute();

// Stores
const responsiveStore = useResponsiveStore();

// Responsiveness
const { isSmall, mob_sidebar_open } = storeToRefs(responsiveStore);


// Data
const links = [{
  label: 'Quizzes',
  badge: 1,
  click: () => set(mob_sidebar_open, false)
}, {
  label: 'Tasks',
  click: () => set(mob_sidebar_open, false)
}];

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
      
      <div class="text-right justify-self-end flex-grow px-3 py-1.5" v-if="!isSmall">
        <UBadge v-if="link.badge" :label="link.badge" color="red" size="xs" />
      </div>
      <div v-else class="text-lg text-prim-500 group-hover:text-prim-100">
        {{ link.label }}
      </div>

    </template>

    <!-- Label (PC) | Label (Mobile) -->
    <template #badge="{ link }">

      <div class="text-lg text-prim-500 group-hover:text-prim-100" v-if="!isSmall">
        {{ link.label }}
      </div>
      <div class="text-right justify-self-end flex-grow px-3 py-1.5" v-else>
        <UBadge v-if="link.badge" :label="link.badge" color="red" size="xs" />
      </div>

    </template>

  </UVerticalNavigation>
</template>

<style lang="scss" scoped>

</style>