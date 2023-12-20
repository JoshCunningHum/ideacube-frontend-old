import { u as useAppConfig } from './nitro/node-server.mjs';

const useDjango = (link) => {
  return useAppConfig().djangourl + "/" + link;
};

export { useDjango as u };
//# sourceMappingURL=Django.mjs.map
