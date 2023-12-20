<script lang="ts" setup>

// Stores
const authStore = useAuthStore();
const { logout } = authStore;

const navs = [
  {
    label: 'Settings',
    icon: 'i-mdi-gear',
  },
  {
    label: 'Logout',
    icon: 'i-mdi-logout',
    color: 'text-red-500',
    click: logout
  }
];


</script>

<template>
  <UVerticalNavigation
    :links="navs"
    class="w-[150px] z-20">

    <!-- TODO: Not clickable thinggy -->
    <template #icon="{ link }">
      <UIcon :name="link.icon" :class="`${link.color ? link.color : ''}`" />
    </template>

  </UVerticalNavigation>
</template>

<style lang="scss" scoped>

</style>