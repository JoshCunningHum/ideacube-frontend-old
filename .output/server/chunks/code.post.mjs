import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { u as useDjango } from './Django.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const code_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = useDjango("class/code");
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      "Content-Type": "application/json;charset=utf-8"
    }
  });
});

export { code_post as default };
//# sourceMappingURL=code.post.mjs.map
