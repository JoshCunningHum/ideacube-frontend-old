import { defineStore } from 'pinia'
import { get } from '@vueuse/core';
import type { User } from '~/types/User';

export enum LoginResponseStatus{
  AdminAccount = -1,
  StudentAccount,
  WrongPassword,
  NonExistingEmail,
}

export interface LoginResponse{
  user: User | null,
  status: LoginResponseStatus
}

export const useAuthStore = defineStore('Auth', () => {
  // This is where we can login/register/logout
  const account = useAccount();
  const router = useRouter();

  const login = async (email: string, password: string) : Promise<LoginResponse | null> => {

    const { data, error } = await useFetch<LoginResponse>('/api/login', {
      body: { username: email, password },
      method: 'POST'
    });

    // Save data to local session
    account.user.value = data.value?.user || null;

    return get(data);
  }

  const logout = () => {
    account.user.value = null;
    // Redirect to index
    router.push('/');
  }

  return {
    login,
    logout
  }
})
