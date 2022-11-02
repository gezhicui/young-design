<template>
  <y-shake :duration="500" v-model="trigger"> 这是一段要抖动的文字 </y-shake>
  <y-button @click="handletrigger"> 点击抖动文字 </y-button>
</template>

<script setup>
import { ref } from 'vue';

const trigger = ref(false);
const handletrigger = () => {
  trigger.value = true;
};
</script>
