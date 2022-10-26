<template>
  <y-button @click="handleClick">clickme</y-button>
  <!-- <iframe
    height="900px"
    width="1800px"
    src="https://10.124.225.94/#/doubleLineBoard"
  ></iframe> -->
</template>

<script setup lang="ts">
import { Message } from 'young-design';
console.log(Message.prototype);

const handleClick = () => {
  Message({ message: 'hahaha' });
};
</script>
