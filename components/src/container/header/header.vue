<script lang="ts">
export default { name: "y-header" };
</script>

<script lang="ts" setup>
import "../styles/index.less";
defineProps({
  height: {
    type: String,
    default: () => "60px",
  },
} as const);
</script>

<template>
  <header class="y-header" :style="{ height }">
    <slot />
  </header>
</template>
