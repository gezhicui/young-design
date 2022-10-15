<template>
  <y-rate v-model="value1" showText />
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref(2);
</script>
