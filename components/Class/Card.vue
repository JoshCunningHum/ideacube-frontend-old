<script lang="ts" setup>

const props = defineProps({
  name: {
    type: String,
    default: '[No Name]'
  },
  code: {
    type: String,
    default: ''
  },
  studentCount: {
    type: Number,
    default: 0
  },
  id: {
    type: Number,
    default: -1
  }
})

const classStore = useClassStore();
const { codeToShow, classToDelete, classToRename } = storeToRefs(classStore);

</script>

<template>
  <div class="w-full rounded-sm overflow-hidden h-24">

    <div class="h-2/3 text-2xl bg-prim-800 p-2">
      <div class="flex items-center justify-between">
        <span class="truncate">{{ name }}</span>

        <UPopover>

          <UButton icon="i-mdi-dots-vertical" variant="ghost" color="white" :ui="{rounded: 'rounded-full'}" />

          <template #panel>
            <div class="flex flex-col">
              <UButton color="white" icon="i-mdi-code-tags" label="Show Code"
                @click="codeToShow = code" />
              <UButton color="white" icon="i-mdi-edit" label="Rename"
                @click="classToRename = id"/>
              <UButton color="rose" icon="i-mdi-trash" label="Delete"
                @click="classToDelete = id"/>
            </div>
          </template>
        </UPopover>


      </div>
    </div>
    <div class="flex items-center h-1/3 justify-between bg-prim-800/50 px-2">
      <span class="text-xs">{{ studentCount }} student<span v-if="studentCount !== 1">s</span> </span>
      <!-- TODO: Put badge for unregistered students -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>