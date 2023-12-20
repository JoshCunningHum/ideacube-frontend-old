import { useAccount } from "~/composables/Account";
import { useDjango } from "~/composables/Django"
import serverAuth from "~/utils/serverAuth";

export default defineEventHandler(async (event) => {
  const url = useDjango('quiz/questions/choices');
  const body = await readBody(event);

  // Both and Admin can access this API

  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
})
