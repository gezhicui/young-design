<template>
  <div :class="['y-card', `y-card-shadow-${shadow}`]">
    <div v-if="$slots.title || $slots.subtitle" class="y-card-header">
      <span v-if="$slots.title" class="y-card-title">
        <slot name="title" />
      </span>
      <span v-if="$slots.subtitle" class="y-card-subtitle">
        <slot name="subtitle" />
      </span>
    </div>
    <div class="y-card-body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>


<script lang="ts">
export default { name: "y-card" };
</script>


<script lang="ts" setup>
import "./style/index.less";
import { cardProps } from "./types";
defineProps(cardProps);
</script>

