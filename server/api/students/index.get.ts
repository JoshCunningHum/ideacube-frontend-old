import { useDjango } from "~/composables/Django"
import serverAuth from "~/utils/serverAuth";

export default defineEventHandler(async (event) => {
  const url = useDjango('auth/students');
  const cookies = parseCookies(event);

  // Only Access when user is admin
  const auth = serverAuth(cookies);
  if (!auth.isAdmin()) {
    throw auth.error(405);
  }

  return await fetch(url, {
    method: 'GET'
  });
})
