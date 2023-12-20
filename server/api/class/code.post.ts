import { useDjango } from "~/composables/Django";

export default defineEventHandler(async (event) => {
  const body = await readBody<{code: string}>(event);
  const url = useDjango('class/code');

  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
})
