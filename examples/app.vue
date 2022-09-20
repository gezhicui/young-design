<template>
  <div class="pl-2">
    <h1 class="text-2xl mb-4">ElementPlus Message & MessageBox Component</h1>

    <div class="mt-4">
      <h2 class="text-lg">Message test</h2>
      <button @click="Message.info({ message: 'nihao' })">Info Message</button>
      <button @click="Message({ type: 'warning', message: 'nihao' })">Warning Message</button>
      <button @click="Message.danger({ message: 'nihao' })">Error Message</button>
      <button @click="Message({ type: 'success', message: 'nihao', duration: 5000 })">Success Message</button>
    </div>
  </div>
</template>

<script setup>
import Message from './src/Message';
</script>

<style scoped>
button {
}
</style>
