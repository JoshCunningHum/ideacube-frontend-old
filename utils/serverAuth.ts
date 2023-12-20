import type { User } from "~/types/User";

export default (cookie: Record<string, any>) => {

  const user : User = JSON.parse(cookie['ideacube-user']);
  const isAdmin = user['is_admin'] || false;
  const classID = isAdmin ? null : user.class_id;

  return {
    isAdmin: () => isAdmin,
    hasAccount: () => !!user && user.id !== null && user.id !== -1,
    error: (code: number) => {
      let msg = '';

      // Add more codes here
      switch(code){
        case 405:
          msg = 'Accessing this is not allowed';
          break;
      }

      return createError({
        statusCode: code,
        statusMessage: msg
      })
    },
    classID
  }
}
