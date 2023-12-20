import { defineStore } from 'pinia'
import type { Quiz } from '~/types/Quiz';
import { get, set } from '@vueuse/core';
import { CUDResponseStatus, type CUDResponse } from '~/types/Generics';

export const useQuizStore = defineStore('Quiz', () => {

  const quizzes = ref<Quiz[]>([]);
  const quizToDelete = ref(-1);

  const sync = async () => {
    const { data, error } = await useFetch<{quizzes: Quiz[]}>('/api/quiz', { method: 'GET' });

    // Clear classes if no error
    if(!get(error)) get(quizzes).splice(0);
    if(data.value && data.value.quizzes) get(quizzes).push(...data.value.quizzes);
  }

  const create = async (name: string, classID: number) => {
    const { data, error } = await useFetch<CUDResponse>('/api/quiz/create', 
    { 
      method: 'POST' ,
      body: { name, classID }
    });

    if(get(data)?.status === CUDResponseStatus.SUCCESS) sync();
    return get(data);
  } 

  const remove = async (id: number) => {
    const { data, error } = await useFetch<CUDResponse>('/api/quiz/delete', 
    { 
      method: 'POST' ,
      body: { id }
    });

    if(get(data)?.status === CUDResponseStatus.SUCCESS) sync();
    return get(data);
  }

  const rename = async (id: number, name: string) => {
    const { data, error } = await useFetch<CUDResponse>('/api/quiz/rename', 
    { 
      method: 'POST' ,
      body: { id, name }
    });

    if(get(data)?.status === CUDResponseStatus.SUCCESS) sync();
    return get(data);
  }

  return {
    sync,
    create,
    remove,
    rename,

    quizzes,
    quizToDelete
  }

})
