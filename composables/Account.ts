import type { User } from "~/types/User";
import { useStorage } from '@vueuse/core';

export const useAccount = () => {
  // Returns all account details in the session
  // Also provide some reactive getters

  const user = useStorage<User>('ideacube-user', {
    id: -1, 
    first_name: null, 
    last_name: null, 
    is_approved: 0, 
    class_id: 0, 
    is_admin: false,
  }, localStorage);

  const isLoggedIn = () => user.value.id !== -1;

  return {
    user,
    isLoggedIn
  }
}
