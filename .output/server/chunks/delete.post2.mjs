import { d as defineEventHandler, r as readBody, p as parseCookies } from './nitro/node-server.mjs';
import { u as useDjango } from './Django.mjs';
import { s as serverAuth } from './serverAuth.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const delete_post = defineEventHandler(async (event) => {
  const url = useDjango("quiz/questions/delete");
  const body = await readBody(event);
  const cookies = parseCookies(event);
  const auth = serverAuth(cookies);
  if (!auth.isAdmin()) {
    throw auth.error(405);
  }
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
});

export { delete_post as default };
//# sourceMappingURL=delete.post2.mjs.map
