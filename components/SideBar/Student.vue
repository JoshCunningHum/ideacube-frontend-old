<script lang="ts" setup>
import { set, get } from '@vueuse/core';
import { SessionTypes, type SessionProps, type SessionQuizParams } from '~/types/Session';

const route = useRoute('user-quizzes'); // actually any route inside user is fine
const { user } = route.params;
const { user: userAcc } = useAccount();

// Helper predicates
const isquiz = (args: SessionProps | undefined): args is SessionQuizParams => !!args && 'quiz_id' in args && 'class_id' in args;

// Stores
const responsiveStore = useResponsiveStore();
const sessionStore = useSessionStore();
const classStore = useClassStore();

// Responsiveness
const { isSmall, mob_sidebar_open } = storeToRefs(responsiveStore);

// Data
const { classes } = storeToRefs(classStore);
const { _type, _args } = storeToRefs(sessionStore);

const _class = useArrayFind(classes, c => isquiz(_args.value) && c.id === _args.value.class_id);
const hasSession = computed(() => 
  _type.value !== SessionTypes.Null &&
  userAcc.value && _class.value && userAcc.value.class_id === _class.value.id);

const links = computed(() => [{
  label: 'Quizzes',
  to: `/${user}/quizzes`,
  click: () => set(mob_sidebar_open, false)
}, {
  label: 'Tasks',
  to: `/${user}/tasks`,
  click: () => set(mob_sidebar_open, false)
}, {
  label: 'Session',
  to: `/${user}/session`,
  badge: hasSession.value ? 1 : 0,
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

    <!-- Label (PC) | Label (Mobile) -->
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
  @apply text-base text-prim-500 group-hover:text-prim-100 h-8 flex items-center;

  .isInRoute {
    @apply text-prim-200;
  }
}

span {
  font-family: 'Helvetica Rounded';
}

.badge {
  @apply text-right justify-self-end flex-grow;
}
</style>