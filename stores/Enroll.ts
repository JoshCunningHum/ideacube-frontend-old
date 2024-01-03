import { defineStore } from 'pinia'
import { get } from '@vueuse/core';
import type { Class } from '~/types/Class'

export enum ClassCodeResponseStatus{
  NotValid,
  Valid
}

export interface ClassCodeResponse{
  status: ClassCodeResponseStatus,
  class: Class | null
}

export interface EnrollParams{
  firstname: string;
  lastname: string;
  password: string;
  classID: string;
}

export enum EnrollResponseStatus{
  Existing,
  Successful
}

export interface EnrollResponse{
  status: EnrollResponseStatus
}

export const useEnrollStore = defineStore('Enroll', () => {

  const classFromCode = async (code: string) => { 

    await asyncSleep(100);

    const { data, error } = await useFetch<ClassCodeResponse>('/api/class/code', {
      body: { code },
      method: 'POST'
    })

    console.log(code, get(data));

    return get(data);
  }

  const enroll = async({ firstname, lastname, password, classID } : EnrollParams) => {

    const { data, error } = await useFetch<EnrollResponse>('/api/enroll', {
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
