import { defineStore } from 'pinia'
import { get, set } from '@vueuse/core';
import type { Question } from '~/types/Question';
import type { CUDResponse } from '~/types/Generics';

export enum GetQuestionsResponseStatus{
  NONEXISTING_QUIZ,
  SUCCESS
};

export interface GetQuestionsResponse{
  status: GetQuestionsResponseStatus;
  questions: Question[];
}

export const useQuestionsStore = defineStore('Questions', () => {

  // Mostly contains functions
  
  const questions = async (quizID: number) => {
    const { data, error } = await useFetch<GetQuestionsResponse>('/api/quiz/questions',
    {
      method: 'POST',
      body: { quizID }
    });

    return get(data);
  }

  const choices = async ( quizID: number ) => {
    // Choices
    const { data } = await useFetch<GetChoicesResponse>('/api/quiz/questions/choices', {
      method: 'POST',
      body: { quizID }
    })

    return data;
  }

  const create = async (args: { text: string, quizID: number, type: number, autograded: boolean, points: number}) => {
    const { data, error } = await useFetch<CUDResponse>('/api/quiz/questions/create',
    {
      method: 'POST',
      body: args
    });

    return get(data);
  }

  const remove = async (id: number) => {
    const { data, error } = await useFetch<CUDResponse>('/api/quiz/questions/delete',
    {
      method: 'POST',
      body: { id }
    });

    return get(data);
  }

  const update = async (question: Question, props: { text?: string, type?: number, autograded?: boolean, points?: number }) => {
    
    // Re-write props
    props.text ??= question.text;
    props.type ??= question.type;
    props.autograded ??= question.autograded;
    props.points ??= question.points;

    const { data, error } = await useFetch<CUDResponse>('/api/quiz/questions/update',
    {
      method: 'POST',
      body: { ...props, id: question.id }
    });

    return get(data);
  }

  return {
    questions,
    choices,
    create,
    remove,
    update
  }
})
