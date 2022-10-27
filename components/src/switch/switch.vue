<template>
  <span
    v-if="closeText"
    class="y-switch-closeText"
    :style="[`color:${switchValue ? '#333' : '#3a6ff4'}`]"
  >
    {{ closeText }}
  </span>
  <span
    :class="['y-switch', { 'y-switch-disabled': disabled }]"
    :style="switchStyle"
    @click="clickSwitch"
  >
    <span class="y-switch-roll" :style="switchRollStyle" />
  </span>
  <span
    v-if="openText"
    class="y-switch-openText"
    :style="[`color:${modelValue ? '#3a6ff4' : '#333'}`]"
  >
    {{ openText }}
  </span>
</template>

<script lang="ts">
export default { name: 'y-switch' };
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { switchProps } from './types';
import './style/index.less';
import type { CSSProperties } from 'vue';

const props = defineProps(switchProps);
const emit = defineEmits(['update:modelValue', 'change']);

const switchValue = ref<boolean>(props.modelValue);

const clickSwitch = (): void => {
  if (props.disabled) return;
  switchValue.value = !switchValue.value;
  emit('update:modelValue', switchValue.value);
  emit('change', switchValue.value);
};

const switchColor = computed((): string => {
  return props.modelValue ? props.openColor : props.closeColor;
});

const switchStyle = computed((): CSSProperties => {
  const width = ref<number>(props.width);
  if (width.value < 20) width.value = 20;
  return {
    width: `${width.value}px`,
    height: `${width.value / 2}px`,
    backgroundColor: switchColor.value,
    borderRadius: props.type === 'square' ? '' : `${width.value / 4}px`,
  };
});

const switchRollStyle = computed((): CSSProperties => {
  const width = ref<number>(props.width);
  if (width.value < 20) width.value = 20;
  return {
    width: `${width.value / 2}px`,
    height: `${width.value / 2}px`,
    left: props.modelValue ? `${width.value / 2}px` : '0px',
    border: `2px solid  ${switchColor.value}`,
    borderRadius: props.type === 'square' ? '' : '50%',
  };
});
</script>
