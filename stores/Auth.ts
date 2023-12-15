import { defineStore } from 'pinia'
import { get } from '@vueuse/core';
import type { User } from '~/types/User';

export enum LoginResponseType{
  AdminAccount = -1,
  StudentAccount,
  WrongPassword,
  NonExistingEmail,
}

export interface LoginResponse{
  user: User | null,
  type: LoginResponseType
}

export const useAuthStore = defineStore('Auth', () => {
  // This is where we can login/register/logout
  const account = useAccount();
  const router = useRouter();

  const login = async (email: string, password: string) : Promise<LoginResponse | null> => {
    const url = useDjango('auth/login');

    const { data, error } = await useFetch<LoginResponse>(url, {
      body: { username: email, password },
      method: 'POST'
    });

    // Save data to local session
    account.user.value = data.value?.user || undefined;

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
