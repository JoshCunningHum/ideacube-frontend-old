<script setup lang="ts">

definePageMeta({
    layout: 'anonymous'
})

const router = useRouter();

// Timeout to proceed to login
onMounted(() => {
    setTimeout(() => {
        router.push('/login');
    }, 1000);
})

</script>

<template>
    <div class="flex items-center justify-center h-full">
        <Logo :squared="true" :loading="true" />
    </div>
</template>

<style scoped lang="scss">

</style>``