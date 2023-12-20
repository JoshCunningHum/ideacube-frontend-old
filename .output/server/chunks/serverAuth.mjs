import { c as createError } from './nitro/node-server.mjs';

const serverAuth = (cookie) => {
  const user = JSON.parse(cookie["ideacube-user"]);
  const isAdmin = user["is_admin"] || false;
  const classID = isAdmin ? null : user.class_id;
  return {
    isAdmin: () => isAdmin,
    hasAccount: () => !!user && user.id !== null && user.id !== -1,
    error: (code) => {
      let msg = "";
      switch (code) {
        case 405:
          msg = "Accessing this is not allowed";
          break;
      }
      return createError({
        statusCode: code,
        statusMessage: msg
      });
    },
    classID
  };
};

export { serverAuth as s };
//# sourceMappingURL=serverAuth.mjs.map
