<template>
  <button class="y-button" :class="styleClass">
    <Icon
      :size="sizeChange(iconSize)"
      :class="leftIconClass"
      v-if="iconFont.iconName && iconFont.position != 'right'"
      :name="iconFont.iconName"
    />
    <slot />
    <Icon
      :size="sizeChange(iconSize)"
      :class="rightIconClass"
      v-if="iconFont.position == 'right' && iconFont.iconName"
      :name="iconFont.iconName"
    />
  </button>
</template>

<script lang="ts">
export default { name: 'y-button' };
</script>

<script setup lang="ts">
import './style/index.less';
import { computed, useSlots } from 'vue';
import Icon from '../Icon/icon.vue';
import { buttonProps } from './types';
import { sizeChange } from '../utils';

const props = defineProps(buttonProps);
const slots = useSlots();

const styleClass = computed(() => {
  return {
    [`y-button--${props.type}`]: props.type,
    'is-plain': props.plain,
    'is-round': props.round,
    'is-disabled': props.disabled,
    [`y-button--${props.size}`]: props.size,
  };
});
const leftIconClass = computed(() => {
  return { 'y-button-icon-left': slots && slots.default };
});
const rightIconClass = computed(() => {
  return { 'y-button-icon-right': slots && slots.default };
});

const iconFont = computed(() => {
  const iconName = props.icon;
  const position = props.iconPosition;
  return {
    iconName,
    position,
  };
});
</script>
