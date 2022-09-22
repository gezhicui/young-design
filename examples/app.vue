<template>
  <div class="pl-2">
    <h1 class="text-2xl mb-4">ElementPlus Message & MessageBox Component</h1>
    <button @click="doLogin">登录</button>
    <div class="mt-4">
      <h2 class="text-lg">Message test</h2>
      <Button @click="Message.info({ message: 'nihao' })">Info Message</Button>
      <Button @click="Message({ type: 'warning', message: 'nihao' })"
        >Warning Message</Button
      >
      <Button @click="Message.danger({ message: 'nihao' })"
        >Error Message</Button
      >
      <Button
        @click="Message({ type: 'success', message: 'nihao', duration: 5000 })"
        >Success Message</Button
      >
    </div>
  </div>
</template>

<script setup>
// import Message from "./src/Message";
import { getCurrentInstance } from "vue";
const { appContext } = getCurrentInstance();
import { Button } from "young-design";
const doLogin = () => {
  console.log(appContext);
  appContext.config.globalProperties.$message({
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