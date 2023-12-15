<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { set, get } from '@vueuse/core';
import * as Yup from 'yup';

definePageMeta({
    layout: 'anonymous'
})

// Routing
const route = useRoute('enroll-code');
const router = useRouter();
const code = computed(() => route.params.code);

// Store
const enrollStore = useEnrollStore();
const { classFromCode, enroll } = enrollStore;


// Form
const form = ref();
const state = reactive({
  firstname: '',
  lastname: '',
  password: '',
  confirmpassword: '',
  classID: ''
});

// Data
const ccresponse = ref<ClassCodeResponse | null>();
const _class = computed(() => get(ccresponse)?.class);
const hasMounted = ref(false);

onMounted(async () => {
  set(ccresponse, await classFromCode(get(code)));
  set(hasMounted, true);
  state.classID = `${get(_class)?.id}`;
})

// Validator
const existings = ref<[string, string][]>([]);
const isExisting = computed(() => {
  const { firstname: af, lastname: al } = state;
  return get(existings).some(([f, l]) => f === af && l === al);
})

// Should these validators be put on composables?
const schema = Yup.object({
  firstname: Yup.string().required('Firstname Required').max(32, 'Max character limit').test('checkDupName', 'User already exists', () => {
    return new Promise((resolve, reject) => resolve(!get(isExisting)))
  }),
  lastname: Yup.string().required('Lastname Required').max(32, 'Max character limit').test('checkDupName', 'User already exists', () => {
    return new Promise((resolve, reject) => resolve(!get(isExisting)))
  }),
  password: Yup.string().min(4, 'Must be at least 4 characters').required('Password Required').max(32, 'Max character limit'),
  confirmpassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('This field is required')
})
type Schema = Yup.InferType<typeof schema>
const isFetching = ref(false);

// Submit
const onsubmit = async (e: FormSubmitEvent<Schema>) => {
  set(isFetching, true);

  const { data: {firstname, lastname} } = e;

  const data = await enroll(state);
  set(isFetching, false);

  // TODO: a data with null value means an error in fetching
  if(!data) return;

  const { type } = data;

  if(type === EnrollResponseTypes.Successful){
    // Redirect to login
    router.push('/login');
  }else{
    // Existing user already
    get(existings).push([firstname, lastname]);
    if(!form.value) return;
    form.value.validate();
  }

}

</script>

<template>
  <div class="flex h-full justify-center items-center">
    <div class="flex flex-col items-center gap-10">

      <template v-if="!!ccresponse &&
        ccresponse.type === ClassCodeResponseType.Valid">
        <BigText class="text-center">Enroll to {{ _class?.name }}</BigText>

        <UForm :schema="schema" :state="state" @submit="onsubmit" class="flex flex-col items-center gap-1 w-[90%]" ref="form">

          <div class="flex w-full gap-4">
            <UFormGroup class="w-full" name="firstname" help="‏">
              <UInput placeholder="Firstname" v-model="state.firstname" />
            </UFormGroup>
            <UFormGroup class="w-full" name="lastname">
              <UInput placeholder="Lastname" v-model="state.lastname" />
            </UFormGroup>
          </div>


          <UFormGroup class="w-full" name="password" help="‏">
            <UInput placeholder="Password" type="password" v-model="state.password" />
          </UFormGroup>
          <UFormGroup class="w-full" name="confirmpassword" help="‏">
            <UInput placeholder="Confirm Password" type="password" v-model="state.confirmpassword" />
          </UFormGroup>
          <div class="flex justify-end w-full">
            <UButton variant="link" :padded="false" color="white" :to="{ path: '/login' }">or login with an existing account</UButton>
          </div>

          <UButton 
            type="submit" 
            color="white" block class="max-w-[150px] mt-10" 
            :loading="isFetching">
            {{ isFetching ? 'enrolling' : 'enroll' }}
          </UButton>

        </UForm>

      </template>

      <!-- If code is not valid (Happens when pasting link) -->
      <template v-else-if="hasMounted">
        <BigText>Invalid Code</BigText>
        <div class="text-center">
          The code <span class="text-warning-400">{{ code }}</span> you are given is not a valid code <br>
          Did you paste the correct link?
        </div>
        <div class="w-full flex justify-between">
          <UButton variant="link" color="amber" to="/enroll">Re-enter code</UButton>
          <UButton variant="link" color="green" to="/login">or Login</UButton>
        </div>
      </template>

    </div>
  </div>
</template>

<style lang="scss" scoped></style>