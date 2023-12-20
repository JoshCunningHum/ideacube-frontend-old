import { defineStore } from 'pinia'
import { get, set } from '@vueuse/core'
import type { User } from '~/types/User';
import { type CUDResponse, CUDResponseStatus } from '~/types/Generics';

export const useStudentStore = defineStore('Student', () => {

  const students = ref<User[]>([]);
  const studentToRemove = ref(-1);

  const unregisteredcount = computed(() => students.value.filter(s => !s.is_approved).length);

  const sync = async () => {
    const { data, error } = await useFetch<{students: User[]}>('/api/students', {
      method: 'GET'
    })

    if(!get(error)) get(students).splice(0);
    if(data.value && data.value.students) get(students).push(...data.value.students);
  }

  const approve = async (id: number) => {
    const { data, error } = await useFetch<CUDResponse>('/api/students/approve', {
      method: 'POST',
      body: { id }
    })
    // 0 Error, 1 Success
    if(get(data)?.status === CUDResponseStatus.SUCCESS){
      // Just find and update the status of that student
      const s = get(students).find(s => s.id === id);
      if(s) s.is_approved = 1;
    }
    return get(data);
  }

  const unenroll = async (id: number) => {
    const { data, error } = await useFetch<CUDResponse>('/api/students/unenroll', {
      method: 'POST',
      body: { id }
    })
    // 0 Error, 1 Success
    if(get(data)?.status === CUDResponseStatus.SUCCESS) sync();
    return get(data);
  }

  return {
    sync,
    approve,
    unenroll,

    students,
    unregisteredcount,
    studentToRemove
  }
})
