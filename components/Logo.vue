<script lang="ts" setup>

const props = defineProps({
  squared: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const refer = ref<InstanceType<typeof HTMLDivElement>>();
const { width } = useElementBounding(refer)

</script>

<template>
  <section  :class="`text-7xl root ${squared ? 'squared' : ''}`" :="$attrs" 
    :style="`${squared ? `padding: ${width / 2}px` : ''}`">
    <template v-if="squared">
      <div :class="`box ${animated ? 'animate' : ''} box-red`"></div>
      <div :class="`box ${animated ? 'animate' : ''} box-yellow`"></div>
      <div :class="`box ${animated ? 'animate' : ''} box-purple`"></div>
      <div :class="`box ${animated ? 'animate' : ''} box-green`"></div>
      <div :class="`box ${animated ? 'animate' : ''} box-black`"></div>
    </template>

    <div class="w-max z-10 relative">
      <span>idea</span>
      <span class="font-bold" ref="refer">cube</span>
      <div v-if="loading"
        :class="`${squared ? 'flex' : 'inline'} absolute w-full justify-center items-center`" >
        <UIcon class="animate-spin" name="i-mdi-autorenew" />
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.root {
  @apply p-3 helvetica relative;
}

.squared {
  @apply w-max flex flex-col justify-center items-center overflow-hidden;
  aspect-ratio: 1 / 1;
}

.box {
  @apply absolute transition-all;
  animation-timing-function: cubic-bezier(.31,-0.1,.34,1.02);
  animation-duration: 1s;
  animation-iteration-count: 1;
}

// Individual Boxes
.box-red {
  @apply bg-sred;
  width: 85%;
  height: 85%;
  top: 7.5%;
  left: 7.5%;
}

.box-yellow {
  width: 41.8%;
  height: 95.7%;
  top: -46.5%;
  left: -6.3%;
  transform: rotate(64.53deg);
  background: rgba(255, 178, 27, 0.78);

  &.animate{
    animation-name: bxy;
  }
}

@keyframes bxy {
  from {
    top: -100%;
    transform: rotate(90deg);
  }

  to {
    top: -46.5%;
    transform: rotate(64.53deg);
  }
}

.box-purple {
  width: 147.22%;
  height: 95.7%;
  top: -15.6%;
  left: 60.7%;
  transform: rotate(35.326deg);
  background: rgba(131, 111, 255, 0.57);

&.animate{
  animation-name: bxp;
}
}

@keyframes bxp {
  from {
    left: 100%;
    transform: rotate(90deg);
  }

  to {
    left: 60.7%;
    transform: rotate(35.326deg);
  }
}

.box-green {
  width: 147.22%;
  height: 95.7%;
  top: 70%;
  left: -27.3%;
  transform: rotate(42.247deg);
  background: rgba(111, 255, 160, 0.57);

&.animate{
  animation-name: bxg;
}
}

@keyframes bxg {
  from {
    top: 100%;
    transform: rotate(0deg);
  }

  to {
    top: 70%;
    transform: rotate(42.247deg);
  }
}


.box-black {
  width: 41.8%;
  height: 95.7%;
  top: 31.5%;
  left: 87.7%;
  transform: rotate(64.53deg);
  background: rgba(62, 56, 63, 0.57);

&.animate{
  animation-name: bxb;
}
}

@keyframes bxb {
  from {
    left: 100%;
    transform: rotate(0deg);
  }

  to {
  left: 87.7%;
  transform: rotate(64.53deg);
  }
}
</style>