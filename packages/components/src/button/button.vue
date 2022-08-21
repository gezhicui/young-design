<template>
  <button class="y-button" :class="styleClass">
    <Icon
      class="icon"
      v-if="iconFont.iconName && iconFont.position != 'right'"
      :name="iconFont.iconName"
    />
    <slot />
    <Icon
      class="icon"
      v-if="iconFont.position == 'right' && iconFont.iconName"
      :name="iconFont.iconName"
    />
  </button>
</template>

<script setup lang="ts">
import './style/index.less';
import { computed } from 'vue';
import Icon from '../Icon/icon.vue';
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

const iconFont = computed(() => {
  const iconName = props.icon;
  const position = props.iconPosition;
  return {
    iconName,
    position,
  };
});
</script>
