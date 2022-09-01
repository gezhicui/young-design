<template>
  <div class="y-icon">
    <svg class="icon" :style="iconColor" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="y-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'y-icon',
};
</script>
<script setup lang="ts">
import './style/index.less';
import { computed, onMounted } from 'vue';
import { iconProps } from './types';

onMounted(() => {
  import('./font/iconfont.js' as any);
});

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
