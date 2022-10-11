<template>
  <y-textarea v-model="value1" />
  <!-- <y-textarea v-model="value1" resize="vertical" />
  <y-textarea v-model="value1" resize="horizontal" />
  <y-textarea v-model="value1" resize="none" /> -->
</template>

<script setup>
import { ref } from "vue";
const value1 = ref("");
</script>