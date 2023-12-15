<script lang="ts" setup>
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { set, get } from '@vueuse/core';

definePageMeta({
    layout: 'anonymous',
    middleware: 'logged-in'
})

// Routes
const router = useRouter();

// Store
const authStore = useAuthStore();
const { login } = authStore;

// Form
const form = ref();
const state = reactive({
  email: '',
  password: ''
})

// Validator
const nonExistingEmails = ref<String[]>([]);
const wasWrongPassword = ref(false);

watch(state, () => set(wasWrongPassword, false));

const schema = object({
  email: string().required('Email Required').test('NonExistingEmail', 'Email not found', () => {
    return new Promise(resolve => resolve(!nonExistingEmails.value.includes(state.email)))
  }),
  password: string().min(4, 'Must be at least 4 characters').required('Password Required').test('WrongPassword', 'Wrong Password', () => {
    return new Promise(resolve => resolve(!get(wasWrongPassword)))
  })
})
type Schema = InferType<typeof schema>
const isFetching = ref(false);


// Submit
const onsubmit = async(e: FormSubmitEvent<Schema>) => {
  set(isFetching, true);
  // Do things here
  const data = await login(e.data.email, e.data.password);
  set(isFetching, false);

  // TODO: a data with null value means an error in fetching
  if(!data) return;
  
  const { type } = data;

  // Do things accordingly
  if(type === LoginResponseType.AdminAccount){
    router.push('/admin');
  }else if(type === LoginResponseType.StudentAccount){
    router.push(`/${e.data.email}`);
  }
  // Errors
  else if(type === LoginResponseType.NonExistingEmail){
    get(nonExistingEmails).push(state.email);
  }else if(type === LoginResponseType.WrongPassword){
    set(wasWrongPassword, true);
  }

  form.value.validate();
}


</script>

<template>
  <div class="flex h-full justify-center items-center">
    <div class="flex flex-col items-center gap-10">
      <Logo :squared="false"/>

      <UForm 
        ref="form"
        :schema="schema"
        :state="state" 
        @submit="onsubmit"
        class="flex items-center flex-col gap-2 w-[80%]">

        <UFormGroup class="w-full" help="Email is your firstname.lastname" name="email">
          <UInput placeholder="email" v-model="state.email" />
        </UFormGroup>

        <!-- The invisible character is needed to prevent the error to adjust the height of the form-->
        <div class="w-full">
          <UFormGroup class="w-full" help="‏" name="password">
            <UInput placeholder="password" v-model="state.password" type="password"  />
          </UFormGroup>
          <div class="flex justify-end w-full">
            <UButton variant="link" :padded="false" color="white" to="enroll">or register with a teacher</UButton>
          </div>
        </div>


        <UButton type="submit" color="white" block class="max-w-[150px] mt-10" :loading="isFetching">
          {{ isFetching ? 'logging in' : 'log in' }}
        </UButton>
      </UForm>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>