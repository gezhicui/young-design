<script lang="ts">
export default { name: 'y-rate' };
</script>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import './style/index.less';
import { rateProps } from './types';
import Icon from '../Icon/icon.vue';

const prop = defineProps(rateProps);
const emit = defineEmits(['update:modelValue', 'change']);

const width = ref<number>(prop.modelValue);
watch(
  () => prop.modelValue,
  (v) => (width.value = v)
);
const upDataValue = (): void => {
  emit('update:modelValue', width.value);
  if (width.value !== prop.modelValue) emit('change');
};
const textContent = computed((): string => {
  if (prop.textArr[width.value - 1]) {
    return prop.textArr[width.value - 1];
  }
  return '';
});
</script>

<template>
  <div class="y-rate">
    <div class="y-rate-list" @mouseout="width = modelValue">
      <Icon
        v-for="(num, index) in 5"
        :key="num"
        :name="iconName"
        :color="width > index ? effectColor : invalidColor"
        class="y-rete-icon"
        @click="upDataValue"
        @mouseover="width = num"
      />
    </div>
    <span v-if="showText" class="show-text">{{ textContent }}</span>
  </div>
</template>
