import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { u as useDjango } from './Django.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index_post = defineEventHandler(async (event) => {
  const url = useDjango("quiz/questions");
  const body = await readBody(event);
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
