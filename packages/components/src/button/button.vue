<template>
  <button class="y-button" :class="styleClass">
    <slot />
  </button>
</template>

<script lang="ts">
import './style/index.less';
import { defineComponent, computed } from 'vue';
import { buttonProps } from './types';
export default defineComponent({
  name: 'y-button',
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`y-button--${props.type}`]: props.type,
        'is-plain': props.plain,
        'is-round': props.round,
        'is-disabled': props.disabled,
        [`y-button--${props.size}`]: props.size,
      };
    });

    return {
      styleClass,
    };
  },
});
</script>
