import { useAccount } from "~/composables/Account";
import { useDjango } from "~/composables/Django"
import { Quiz } from "~/types/Quiz";
import serverAuth from "~/utils/serverAuth";

export default defineEventHandler(async (event) => {
  const url = useDjango('quiz');
  const cookies = parseCookies(event);

  // Returns all quizzes if admin, then quizzes only on a specific class if student
  const auth = serverAuth(cookies);
  const response = await fetch(url, { method: 'GET' });
  const data : { quizzes: Quiz[] } = await response.json();
  data.quizzes = data.quizzes.filter(q => auth.isAdmin() || q.class_id === auth.classID);

  return data;
})
