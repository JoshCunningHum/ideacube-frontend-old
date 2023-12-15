<script lang="ts" setup>

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', str: String) : void
}>();

const setCharAtIndex = (i: number, c: String) => {
  let value = props.modelValue;
  const diff = value.length - i;

  if(diff <= 0) value.padEnd(i + 1, ' ');
  emit('update:modelValue', stringReplaceAt(value, i, c).toUpperCase());
}

const onclick = (e: MouseEvent) => {
  const target = e.target;
  if(!(target instanceof HTMLInputElement)) return;
  target.select();
}

const oninput = (e: Event) => {
  const target = e.target;
  if(!(target instanceof HTMLInputElement)) return;

  const index = parseInt(target.dataset.index || '0');

  setCharAtIndex(index, target.value);

  // Proceed to another input
  const parent = target.parentElement;
  if(!parent) return;
  const nextParent = parent.nextElementSibling;
  if(!nextParent) return;
  const next = nextParent.children.item(0);
  if(!(next instanceof HTMLInputElement)) return;
  next.focus();
  next.select();
}


</script>

<template>
  <div class="flex gap-5 text-3xl sm:text-4xl md:text-6xl">
    <div v-for="i in length" :key="i" class="border-b pb-4">
      <input :maxlength="1" :disabled="disabled" :data-index="i-1" style="width: 1em;" @click="onclick" @input="oninput" :value="modelValue[i-1]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

input {
  @apply text-center bg-transparent focus:outline-none;
}

</style>