<script lang="ts">
export default { name: "y-radio" };
</script>

<script lang="ts" setup>
import { computed } from "vue";
import "./style/index.less";
import { Props } from "./props";
import type { CSSProperties } from "vue";

const prop = defineProps(Props);
const emit = defineEmits(["update:modelValue", "change"]);


const input = (e: Event): void => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
  emit("change", (e.target as HTMLInputElement).value);
};

const isLabel = computed((): boolean => prop.modelValue === prop.label);

const isClass = computed((): string[] => {
  return [
    "y-radio-o",
    isLabel.value
      ? prop.disabled
        ? "y-radio-disabled"
        : "y-radio-hig"
      : "",
  ];
});

const isStyle = computed((): CSSProperties => {
  return {
    color: isLabel.value
      ? prop.disabled
        ? "#b6b5b5"
        : "#3a6ff4"
      : prop.disabled
      ? "#b6b5b5"
      : "#333",
  } as const;
});

const labelStyle = computed((): CSSProperties => {
  console.log(prop.disabled, prop.border);

  return {
    cursor: prop.disabled ? "no-drop" : "pointer",
    border: prop.border
      ? ` 1px solid ${
          isLabel.value ? (prop.disabled ? "#b6b5b5" : "#3a6ff4") : "#b6b5b5"
        }`
      : "",
  };
});
</script>

<template>
  <label
    :class="[
      'y-radio',
      {
        [`y-radio-${size}`]: border,
        'y-radio-border': border,
      },
    ]"
    :style="labelStyle"
  >
    <span :class="isClass">
      <input
        v-model="modelValue"
        type="radio"
        :name="name"
        :value="label"
        :disabled="disabled"
        @input="input"
      />
    </span>
    <span class="y-radio-text" :style="isStyle">
      <slot />
    </span>
  </label>
</template>
