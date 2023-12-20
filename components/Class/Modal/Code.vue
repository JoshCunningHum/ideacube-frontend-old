<script lang="ts" setup>
import { get, set } from '@vueuse/core';
import QRCode from 'qrcode';
// Stores
const classStore = useClassStore();

// Data
const domain = window.location.host;
const { codeToShow } = storeToRefs(classStore);

const show = computed({
  get: () => get(codeToShow) !== '',
  set: (v: boolean) => set(codeToShow, '')
})

const link = computed(() => `${domain}/enroll/${codeToShow.value}`);
const canvasCont = ref<InstanceType<typeof HTMLDivElement>>();
const c = ref<InstanceType<typeof HTMLCanvasElement>>();

watchImmediate(c, v => {
  if(!(v instanceof HTMLCanvasElement)) return;

  
  QRCode.toCanvas(v, link.value, {
    errorCorrectionLevel: 'high',
    margin: 1,
    scale: 6,
    width: 250,
  }, err => {
    if(err) console.error(`Failed to generate QR CODE`);
  })
})

</script>

<template>
  <UModal v-model="show"
    :transition="false"
    :ui="{
      background: 'bg-white dark:bg-prim-950',
    }">
    <div class="py-12 flex flex-col gap-2 justify-center items-center" ref="canvasCont">
      <DigitedInput v-model="codeToShow" :length="6" :disabled="true" />
      <span class="text-sm">Enter this 6 digit code</span>
      <UDivider>or</UDivider>
      <span class="text-sm">Scan this QR Code</span>
      <canvas ref="c" width="250" height="250" ></canvas>
    </div>
  </UModal>
</template>

<style lang="scss" scoped>

</style>