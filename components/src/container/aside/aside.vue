<script lang="ts">
export default { name: "y-aside" };
</script>

<script lang="ts" setup>
import "../style/index.less";
defineProps({
  width: {
    type: String,
    default: () => "200px",
  },
} as const);
</script>

<template>
  <aside class="y-aside" :style="{ width }">
    <slot />
  </aside>
</template>
