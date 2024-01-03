<script lang="ts" setup>

// Session Properties
const properties = [{
  label: 'Connections',
  to: 'session/connections/',
  icon: 'i-mdi-account'
}]

</script>

<template>
  <UVerticalNavigation :links="properties" />
</template>

<style lang="scss" scoped>

</style>