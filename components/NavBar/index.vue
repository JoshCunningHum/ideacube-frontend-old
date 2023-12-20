<script lang="ts" setup>
import { get, set } from '@vueuse/core'

// Account Details
const account = useAccount();
const user = computed(() => get(account.user));

// Stores
const responsiveStore = useResponsiveStore();
const { isSmall, mob_sidebar_open } = storeToRefs(responsiveStore);

// Responsiveness
const mob_toggleSideBar = () => {
  set(mob_sidebar_open, !get(mob_sidebar_open));
}

</script>

<template>
  <header class="w-full sticky flex justify-between px-4 py-2 border-b border-primary-700 items-center">

    <div class="flex items-center gap-2">
      <UIcon :name="`${mob_sidebar_open ? 'i-mdi-close' : 'i-mdi-menu'}`" class="text-xl" v-if="isSmall"
        @click="mob_toggleSideBar" />
      <Logo :animated="false" :squared="false" style="font-size: 1.2rem;" />
    </div>


    <UPopover>
      <div class="flex gap-2 items-center">
        <div class="helvetica round">{{ user?.first_name }} {{ user?.last_name }}</div>
        <UAvatar icon="i-mdi-account" size="md" alt="avatar" />
      </div>

      <template #panel>
        <NavBarDropDown />
      </template>
    </UPopover>

  </header>

  <!-- Mobile Side Nav -->
  <div v-if="mob_sidebar_open && isSmall" class="flex-grow">
    <SideBar />
  </div>
</template>

<style lang="scss" scoped></style>