import { d as defineEventHandler, r as readBody, p as parseCookies } from './nitro/node-server.mjs';
import { u as useDjango } from './Django.mjs';
import { s as serverAuth } from './serverAuth.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const approve_post = defineEventHandler(async (event) => {
  const url = useDjango("auth/students/approve");
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

export { approve_post as default };
//# sourceMappingURL=approve.post.mjs.map