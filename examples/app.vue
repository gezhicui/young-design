<template>
  <div class="pl-2">
    <h1 class="text-2xl mb-4">antdesign</h1>
    <button @click="doLogin">登录</button>
    <div class="mt-4">
      <h2 class="text-lg">Message test</h2>
      <y-button @click="Message.info({ message: 'nihao' })"
        >Info Message</y-button
      >
      <y-button @click="Message({ type: 'warning', message: 'nihao' })"
        >Warning Message</y-button
      >
      <y-button @click="Message.danger({ message: 'nihao' })"
        >Error Message</y-button
      >
      <y-button
        @click="Message({ type: 'success', message: 'nihao', duration: 5000 })"
        >Success Message</y-button
      >
    </div>
  </div>
</template>

<script setup>
// import Message from "./src/Message";
import { getCurrentInstance } from "vue";
const ctx = getCurrentInstance();
const doLogin = () => {
  console.log(ctx);
  ctx.appContext.config.globalProperties.$message({
    type: "success",
    message: "nihao",
    duration: 5000,
  });
};
</script>

<style scoped>
button {
}
</style>