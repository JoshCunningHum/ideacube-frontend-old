import { defineStore } from 'pinia'
import type { Class } from '~/types/Class'
import { get, set } from '@vueuse/core';
import { CUDResponseStatus, type CUDResponse } from '~/types/Generics';

// Handles all class related requests and all
export const useClassStore = defineStore('Class', () => {

  // We store it in a reactive variable first then just do sync to sync with server if needed
  const classes = ref<Class[]>([]);
  const codeToShow = ref('');
  
  const classToDelete = ref(-1);
  const classToRename = ref(-1);

  const sync = async () => {
    // Acquire classes from server
    const { data, error } = await useFetch<{classes: Class[]}>('/api/class', { method: 'get'});

    // Clear classes if no error
    if(!get(error)) get(classes).splice(0);
    if(data.value && data.value.classes) get(classes).push(...data.value.classes);
  }

  const create = async (name: string) => {
    const { data, error } = await useFetch<CUDResponse>('/api/class/create', 
    { 
      method: 'POST',
      body: { name }
    });
    // 0 Error, 1 Success
    if(get(data)?.status === CUDResponseStatus.SUCCESS) sync();
    return get(data);
  }

  const remove = async(id: number) => {
    const { data, error } = await useFetch<CUDResponse>('/api/class/remove', 
    { 
      method: 'POST',
      body: { id }
     });
    // 0 Error, 1 Success
    if(get(data)?.status === CUDResponseStatus.SUCCESS) sync();
    return get(data);
  }

  const rename = async(id: number, name: string) => {
    const { data, error } = await useFetch<CUDResponse>('/api/class/rename', 
    { 
      method: 'POST',
      body: { id, name }
     });

    // 0 Error, 1 Success
    if(get(data)?.status === CUDResponseStatus.SUCCESS){
      const target = get(classes).find(c => c.id === id);
      if(target) target.name = name;
    }
    return get(data);
  }

  return {
    sync,
    create,
    remove,
    rename,

    classes,

    codeToShow,
    classToDelete,
    classToRename
  }

})
