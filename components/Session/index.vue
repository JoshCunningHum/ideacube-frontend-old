<script lang="ts" setup>
import { set, get } from '@vueuse/core';
import { SessionTypes, type SessionProps, type SessionQuizParams, type SessionVideoParams } from '~/types/Session';
import type { SocketUser } from '~/types/User';

const route = useRoute();
const router = useRouter();

const quizStore = useQuizStore();
const classStore = useClassStore();
const socketStore = useSocketStore();
const studentStore = useStudentStore();
const sessionStore = useSessionStore();

// Data
const { quizzes } = storeToRefs(quizStore);
const { peers } = storeToRefs(socketStore);
const { classes } = storeToRefs(classStore);
const { students } = storeToRefs(studentStore);
const { type, args, members } = storeToRefs(sessionStore);

// Helper Type Predicates
const isQuiz = (args: SessionProps | undefined) : args is SessionQuizParams => !!args && 'quiz_id' in args && 'class_id' in args;
const isVideo = (args: SessionProps | undefined) : args is SessionVideoParams => !!args && 'offer' in args;

const quiz = useArrayFind(quizzes, q => isQuiz(args.value) && q.id === args.value.quiz_id);
const clas = useArrayFind(classes, c => !!quiz.value && c.id === quiz.value.class_id);

// Attendee Filters
const search = ref(route.query.search?.toString() || '');
const onlinefilter = ref(parseInt(route.query.online?.toString() || '0'));
const joinfilter = ref(parseInt(route.query.join?.toString() || '0'));

const mapped_peers = useArrayMap(students, s => get(peers).find(p => p.id === s.id) || <SocketUser>{ socketID: '', ...s });

const filtered_peers = useArrayFilter(mapped_peers, p => 
  // Basic Filter
  p.id !== -1 && !p.is_admin && (!clas.value || p.class_id === clas.value.id ) &&
  // Search Filter
  (!search.value || userFullName(p).toLowerCase().includes(search.value)) && 
  // Online Status Filter
  (!onlinefilter.value || (!p.socketID === (onlinefilter.value === 2) ) ) && 
  // Joined Status Filter
  (!joinfilter.value || get(members).some(m => m.id === p.id) === (joinfilter.value === 1)));

const sorted_peers = computed(() => [...filtered_peers.value].sort((a, b) => {
  const fna = userFullName(a).toLowerCase(), fnb = userFullName(b).toLowerCase();
  return fna < fnb ? -1 : fna > fnb ? 1 : 0;
}));


watch([onlinefilter, joinfilter, search], () => {

  // some logic sets
  if(get(joinfilter) === 1 && get(onlinefilter) === 2) set(onlinefilter, 0);

  router.replace({ query: 
    { online: get(onlinefilter), 
      join: get(joinfilter), 
      search: get(search)
    }});
})

const toggleOnline = () => set(onlinefilter, (get(onlinefilter) + 1) % 3);
const toggleJoin = () => set(joinfilter, (get(joinfilter) + 1) % 3);

// Operations
const end = () => {
  sessionStore.stop();
}

</script>

<template>
  <div class="h-full flex flex-col">
    <SessionModalEnd />

    <!-- Session Title and Settings-->
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">{{ SessionTypes[type] }} Session Ongoing</h1>

      <div class="flex items-center gap-2">
        <UButton label="End Session" color="red" @click="end"/>

        <UPopover :popper="{ placement: 'bottom-end' }">
          <UButton variant="link" icon="i-mdi-dots-vertical" size="xl" color="gray" />
          <template #panel> <SessionProperties /> </template>
        </UPopover>
      </div>
    </div>
    
    <p class="text-prim-400 text-sm" v-if="!!quiz">{{ quiz.name }} - {{ clas?.name }}</p>

    <UDivider class="my-2" />

    <!-- Session Invitee Filter -->
    <UButtonGroup class="flex" :ui="{ rounded: 'rounded-sm' }">
      <UInput icon="i-mdi-search" placeholder="Search..." class="flex-grow" v-model="search" :ui="{ icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UButton icon="i-mdi-close" @click="search=''" v-show="search !== ''" :padded="false" variant="link" />
        </template>
      </UInput>

      <UButton 
      :color="onlinefilter === 0 ? 'gray' : onlinefilter === 1 ? 'accent' : 'red'" 
      :icon="onlinefilter === 2 ? 'i-mdi-wifi-off' : 'i-mdi-wifi'" 
      @click="toggleOnline" />

      <UButton 
      :color="joinfilter === 0 ? 'gray' : joinfilter === 1 ? 'accent' : 'red'" 
      @click="toggleJoin"><span v-if="joinfilter === 2">Not</span> Joined</UButton>
    </UButtonGroup>

    <!-- Session Invitee List -->
    <div class="flex-grow min-h-0 overflow-y-auto flex flex-col gap-2 py-2">
        <SessionDeviceItem v-for="p in sorted_peers" :key="p.id" :socket-user="p" />
    </div>

  </div>
</template>

<style lang="scss" scoped></style>