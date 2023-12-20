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
  const url = useDjango("auth/students");
  const cookies = parseCookies(event);
  const auth = serverAuth(cookies);
  if (!auth.isAdmin()) {
    throw auth.error(405);
  }
  return await fetch(url, {
    method: "GET"
  });
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
