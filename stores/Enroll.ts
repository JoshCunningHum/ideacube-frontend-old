import { defineStore } from 'pinia'
import { get } from '@vueuse/core';
import type { Class } from '~/types/Class'

export enum ClassCodeResponseType{
  NotValid,
  Valid
}

export interface ClassCodeResponse{
  type: ClassCodeResponseType,
  class: Class | null
}

export interface EnrollParams{
  firstname: string;
  lastname: string;
  password: string;
  classID: string;
}

export enum EnrollResponseTypes{
  Existing,
  Successful
}

export interface EnrollResponse{
  type: EnrollResponseTypes
}

export const useEnrollStore = defineStore('Enroll', () => {

  const classFromCode = async (code: string) => {
    const url = useDjango('class/code');

    const { data, error } = await useFetch<ClassCodeResponse>(url, {
      body: { code },
      method: 'POST'
    })

    return get(data);
  }

  const enroll = async({ firstname, lastname, password, classID } : EnrollParams) => {
    const url = useDjango('auth/enroll');

    const { data, error } = await useFetch<EnrollResponse>(url, {
      body: { firstname, lastname, password, classID},
      method: 'POST'
    })

    return get(data);
  }

  return {
    classFromCode,
    enroll
  }

})
