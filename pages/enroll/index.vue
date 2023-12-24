<script lang="ts" setup>
import { set, get } from '@vueuse/core';
import { ClassCodeResponseStatus } from '~/stores/Enroll';

definePageMeta({
    layout: 'anonymous',
    middleware: 'logged-in'
})

// Store
const enrollStore = useEnrollStore();
const { classFromCode } = enrollStore;

// Routing
const router = useRouter();

// Data
const code = ref('');
const isloading = ref(false);
const message = ref('enter six-digit class code');
const codeIsValid = ref(true);

const askCode = async (str: string) => {
  set(isloading, true);
  set(message, 'processing please wait...')

  const data = await classFromCode(str);
  set(isloading, false);

  // TODO: Add case for server
  if(!data) return;

  if(data.status === ClassCodeResponseStatus.Valid){
    router.push(`/enroll/${get(code)}`);
  }else{
    // Set message to code is not valid
    set(codeIsValid, false);
    set(message, 'Code is not valid.')
  }
}

watch(code, v => {
  // Watch value until we reach six
  if(v.length < 6) return; 
  askCode(v);
})

const reset = () => {
  set(code, '');
  set(message, 'enter six-digit class code');
  set(codeIsValid, true);
  set(isloading, false);
}

</script>

<template>
  <div class="flex h-full justify-center items-center">
    <div class="flex flex-col items-center gap-10">
      <BigText>enroll</BigText>
      <div class="flex justify-center flex-col items-center gap-3">
        <DigitedInput v-model="code" :length="6" :disabled="isloading || !codeIsValid"/>
        <span>
          {{ message }}
          <UButton
            v-if="!codeIsValid"
            @click="reset"
            variant="link"
            :padded="false"
            class="pr-1.5"
            color="amber"
            >Retry</UButton>
          <UButton 
            v-if="!isloading"
            to="/login" 
            variant='link' 
            :padded="false">or login</UButton>
        </span>
      </div>
      <div class="h-16 max-h-16">
        <BigText v-if="isloading"><LoadingIcon /></BigText>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>