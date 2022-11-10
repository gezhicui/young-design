<template>
  <template v-if="options">
    <label
      v-for="item in options"
      :key="item.value"
      :class="[
        'y-radio',
        {
          [`y-radio-${size}`]: border,
          'y-radio-border': border,
        },
      ]"
      :style="labelStyle(item.value, item?.disabled)"
    >
      <span :class="isClass(item.value, item?.disabled)">
        <input
          :checked="isLabel(item.value)"
          type="radio"
          :name="name"
          :value="item.value"
          :disabled="item.disabled"
          @input="input"
        />
      </span>
      <span class="y-radio-text" :style="isStyle(item.value, item?.disabled)">
        {{ item.label }}
      </span>
    </label>
  </template>
  <template v-else>
    <label
      :class="[
        'y-radio',
        {
          [`y-radio-${size}`]: border,
          'y-radio-border': border,
        },
      ]"
      :style="labelStyle()"
    >
      <span :class="isClass()">
        <input
          :checked="isLabel()"
          type="radio"
          :name="name"
          :value="label"
          :disabled="disabled"
          @input="input"
        />
      </span>
      <span class="y-radio-text" :style="isStyle()">
        <slot />
      </span>
    </label>
  </template>
</template>

<script lang="ts">
export default { name: 'y-radio' };
</script>

<script lang="ts" setup>
import './style/index.less';
import { radioProps, optionsItemValue } from './types';
import type { CSSProperties } from 'vue';

const props = defineProps(radioProps);
const emit = defineEmits(['update:modelValue', 'change']);

const input = (e: Event): void => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
  emit('change', (e.target as HTMLInputElement).value);
};

const isLabel = (itemValue?: number | string): boolean => {
  return props.modelValue === (itemValue || props.label);
};

const isClass = (itemValue?: optionsItemValue, itemDisabled?: boolean): string[] => {
  return [
    'y-radio-o',
    isLabel(itemValue) ? (itemDisabled || props.disabled ? 'y-radio-disabled' : 'y-radio-hig') : '',
  ];
};

const isStyle = (itemValue?: optionsItemValue, itemDisabled?: boolean): CSSProperties => {
  return {
    color: isLabel(itemValue)
      ? itemDisabled || props.disabled
        ? '#b6b5b5'
        : '#3a6ff4'
      : itemDisabled || props.disabled
      ? '#b6b5b5'
      : '#333',
  } as const;
};

const labelStyle = (itemValue?: optionsItemValue, disabled?: boolean): CSSProperties => {
  return {
    cursor: disabled || props.disabled ? 'no-drop' : 'pointer',
    border: props.border
      ? ` 1px solid ${isLabel(itemValue) ? (props.disabled ? '#b6b5b5' : '#3a6ff4') : '#b6b5b5'}`
      : '',
  };
};
</script>
