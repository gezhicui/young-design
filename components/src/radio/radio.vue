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
        :checked="isLabel"
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


<script lang="ts">
export default { name: "y-radio" };
</script>

<script lang="ts" setup>
import { computed } from "vue";
import "./style/index.less";
import { radioProps } from "./types";
import type { CSSProperties } from "vue";

const props = defineProps(radioProps);
const emit = defineEmits(["update:modelValue", "change"]);


const input = (e: Event): void => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
  emit("change", (e.target as HTMLInputElement).value);
};

const isLabel = computed((): boolean => props.modelValue === props.label);

const isClass = computed((): string[] => {
  return [
    "y-radio-o",
    isLabel.value
      ? props.disabled
        ? "y-radio-disabled"
        : "y-radio-hig"
      : "",
  ];
});

const isStyle = computed((): CSSProperties => {
  return {
    color: isLabel.value
      ? props.disabled
        ? "#b6b5b5"
        : "#3a6ff4"
      : props.disabled
      ? "#b6b5b5"
      : "#333",
  } as const;
});

const labelStyle = computed((): CSSProperties => {
  return {
    cursor: props.disabled ? "no-drop" : "pointer",
    border: props.border
      ? ` 1px solid ${
          isLabel.value ? (props.disabled ? "#b6b5b5" : "#3a6ff4") : "#b6b5b5"
        }`
      : "",
  };
});
</script>

