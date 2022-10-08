<template>
  <y-switch @change="change" v-model="value1" />
</template>

<script setup>
import { ref } from "vue";
const value1 = ref(true);
const change = (e) => {
  // console.log("cange", e);
};
</script>