import type { User } from "~/types/User";
import { useStorage, set, get } from '@vueuse/core';

export const useAccount = () => {
  // Returns all account details in the session
  // Also provide some reactive getters
  const user = useCookie<User | null>('ideacube-user');
  set(user, get(user) || <User>{
    id: -1, 
    first_name: null, 
    last_name: null, 
    is_approved: 0, 
    class_id: 0, 
    is_admin: false,
  });

  const isLoggedIn = () => !!user.value && (user.value.is_admin || user.value.id !== -1 && user.value.id !== null);

  return {
    user,
    isLoggedIn
  }
}
