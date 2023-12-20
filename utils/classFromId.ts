import { get, set } from '@vueuse/core'

export default (id: number) => {
    const classStore = useClassStore();
    const { classes } = storeToRefs(classStore);

    return get(classes).find(c => c.id === id);
}
  