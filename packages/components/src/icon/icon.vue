<template>
  <div class="y-icon">
    <svg class="icon" :style="iconColor" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="y-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>

<script setup lang="ts" name="y-icon">
import './font/iconfont.js';
import './style/index.less';
import { computed } from 'vue';
import { iconProps } from './types';

const props = defineProps(iconProps);
const iconName = computed(() => {
  return `#young-${props.name}`;
});
const styleDot = computed(() => {
  return {
    [`y-dot`]: props.dot && !props.badge,
  };
});
const badge = computed(() => {
  return props.badge;
});
const iconColor = computed(() => {
  return {
    color: props.color,
  };
});
</script>
