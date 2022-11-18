<template>
  <y-input placeholder="请输入内容">
    <template #prepend>http://</template>
  </y-input>
  <br />
  <br />
  <y-input placeholder="请输入内容">
    <template #append>.com</template>
  </y-input>
</template>

<script setup>
import { ref } from 'vue';

const tel = ref('');
</script>
