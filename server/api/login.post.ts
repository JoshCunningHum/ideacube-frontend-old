import { useDjango } from "~/composables/Django";
import { LoginResponse } from "~/stores/Auth";

export default defineEventHandler(async (event) => {
  const body = await readBody<{username: string, password: string}>(event);
  const url = useDjango('auth/login');

  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
})
