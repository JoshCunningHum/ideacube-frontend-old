import { useAccount } from "~/composables/Account";
import { useDjango } from "~/composables/Django"
import serverAuth from "~/utils/serverAuth";

export default defineEventHandler(async (event) => {
  const url = useDjango('class/collect');
  const cookies = parseCookies(event);

  // Students can now get a list of all classes (for the sake of sessions)

  // // Only collect when user is admin
  // const auth = serverAuth(cookies);
  // if (!auth.isAdmin()) {
  //   throw auth.error(405);
  // }

  return await fetch(url, {
    method: 'GET'
  });
})
