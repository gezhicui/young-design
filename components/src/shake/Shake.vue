<template>
  <div
    :class="['y-shake', { 'y-shakeactive': props.modelValue }]"
    :style="{ 'animation-duration': duration / 1000 + 's' }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default { name: 'y-shake' };
</script>

<script lang="ts" setup>
import { watch } from 'vue';
import { shakeProps } from './types';

import './style/index.less';

const props = defineProps(shakeProps);
const emit = defineEmits(['update:modelValue']);

//监听modelValue，为true的话，1s后置为false
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        emit('update:modelValue', false);
      }, props.duration);
    }
  },
  { immediate: true }
);
</script>
