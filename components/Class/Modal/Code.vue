<script lang="ts" setup>
import { get, set } from '@vueuse/core';
import QrcodeVue from 'qrcode.vue'
// Stores
const classStore = useClassStore();

// Route
const route = useRoute();

// Data
const domain = `${process.env.host}:${process.env.port}`;
const { codeToShow } = storeToRefs(classStore);

const show = computed({
  get: () => get(codeToShow) !== '',
  set: (v: boolean) => set(codeToShow, '')
})

const link = computed(() => `${domain}/enroll/${codeToShow.value}`);

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
      <QrcodeVue :value="link" :size="250" level="H" :margin="1" />
    </div>
  </UModal>
</template>

<style lang="scss" scoped>

</style>