<script lang="ts" setup>

definePageMeta({
    layout: 'student',
    middleware: 'auth'
})

// Routes
const route = useRoute('user');
const email = computed(() => route.params.user);

// Check first if saved session is indeed the correct email

// Stores
const authStore = useAuthStore();
const { logout } = authStore;

</script>

<template>
  <div>
    This is the student page
    <UButton label="Logout" @click="logout" />
  </div>
</template>

<style lang="scss" scoped>

</style>