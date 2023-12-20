import { useDjango } from "~/composables/Django";
import serverAuth from "~/utils/serverAuth";

export default defineEventHandler(async (event) => {
  const url = useDjango('auth/students/approve');
  const body = await readBody<{id: number}>(event);
  const cookies = parseCookies(event);

  // Only Proceed when user is admin
  const auth = serverAuth(cookies);
  if(!auth.isAdmin()){
    throw auth.error(405);
  }

  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
})
