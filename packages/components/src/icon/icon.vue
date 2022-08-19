<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts">
import './font/iconfont.js';
import './style/index.less';
import { defineComponent, computed } from 'vue';
import { iconProps } from './types';
export default defineComponent({
  props: iconProps,
  setup(props) {
    const iconName = computed(() => {
      return `#young-${props.name}`;
    });
    return {
      iconName,
    };
  },
});
</script>
