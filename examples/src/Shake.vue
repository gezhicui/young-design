<template>
  <k-shake v-model="trigger"> 抖动 </k-shake>
  <y-button @click="handletrigger"> 点击 </y-button>
</template>

<script setup>
import { ref } from 'vue';

const trigger = ref(false);
const handletrigger = () => {
  trigger.value = true;
};
</script>
