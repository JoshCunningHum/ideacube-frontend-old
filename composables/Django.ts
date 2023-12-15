export const useDjango = (link: string) => {
  return useAppConfig().djangourl + '/' + link;
}
