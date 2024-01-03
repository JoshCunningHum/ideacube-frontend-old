import { defineStore } from 'pinia'
import { get, set } from '@vueuse/core';
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
  const ws = useSocket();
  const router = useRouter();

  const _email = ref('');
  const _password = ref('');

  const login = async (email: string, password: string) : Promise<LoginResponse | null> => {

    const { data, error } = await useFetch<LoginResponse>('/api/login', {
      body: { username: email, password },
      method: 'POST'
    });

    // Save data to local session
    account.user.value = data.value?.user || null;

    set(_email, email);
    set(_password, password);

    // Initialize WebSocket client instance when successful
    if(!!data.value && 
      (data.value.status === LoginResponseStatus.AdminAccount ||
        data.value.status === LoginResponseStatus.StudentAccount)) ws.initialize()

    return get(data);
  }

  const logout = async () => {

    // Uninitialize websocket client
    ws.close();
    account.user.value = null;

    await asyncSleep(100);

    // Redirect to index
    router.push('/');
  }

  return {
    login,
    logout,

    _email,
    _password
  }
})
