import type { User } from "~/types/User";
import { set, get } from '@vueuse/core';

export const useAccount = () => {
  // Returns all account details in the session
  // Also provide some reactive getters
  const user = useCookie<User | null>('ideacube-user');
  set(user, get(user) || <User>{
    id: -1, 
    first_name: undefined, 
    last_name: undefined, 
    is_approved: 0, 
    class_id: 0, 
    is_admin: false,
  });

  const isLoggedIn = () => {
    const res = !!user.value && (user.value.is_admin || user.value.id !== -1 && user.value.id !== null);

    return res;
  }

  return {
    user,
    isLoggedIn,
  }
}
