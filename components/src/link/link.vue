<template>
  <a v-bind="attrs" class="y-link" :class="styleClass">
    <slot />
  </a>
</template>

<script lang="ts">
export default {
  name: 'y-button',
};
</script>
<script setup lang="ts">
import './style/index.less';
import { useAttrs, computed } from 'vue';
import { linkProps } from './types';

const props = defineProps(linkProps);
const attrs = useAttrs();
const styleClass = computed(() => {
  return {
    [`y-link--${props.type}`]: props.type,
    'is-disabled': props.disabled,
    'is-underline': props.underline,
  };
});
</script>
