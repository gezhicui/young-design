<template>
  <button class="y-button" :class="styleClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
import './style/index.less';
import { computed } from 'vue';
import { buttonProps } from './types';

const name = 'y-button';
const props = defineProps(buttonProps);

const styleClass = computed(() => {
  return {
    [`y-button--${props.type}`]: props.type,
    'is-plain': props.plain,
    'is-round': props.round,
    'is-disabled': props.disabled,
    [`y-button--${props.size}`]: props.size,
  };
});
</script>
