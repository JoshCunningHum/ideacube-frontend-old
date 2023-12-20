import { d as defineEventHandler, p as parseCookies } from './nitro/node-server.mjs';
import { u as useDjango } from './Django.mjs';
import { s as serverAuth } from './serverAuth.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index_get = defineEventHandler(async (event) => {
  const url = useDjango("quiz");
  const cookies = parseCookies(event);
  const auth = serverAuth(cookies);
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  data.quizzes = data.quizzes.filter((q) => auth.isAdmin() || q.class_id === auth.classID);
  return data;
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
