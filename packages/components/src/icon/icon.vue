<template>
  <div class="y-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="y-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
<script lang="ts">
import './font/iconfont.js';
import './style/index.less';
import { defineComponent, computed } from 'vue';
import { iconProps } from './types';
export default defineComponent({
  props: iconProps,
  setup(props) {
    console.log('props', props);

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
    return {
      iconName,
      styleDot,
      badge,
    };
  },
});
</script>
