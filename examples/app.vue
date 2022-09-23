<template>
  <div class="pl-2">
    <h1 class="text-2xl mb-4">antdesign</h1>
    <div class="mt-4">
      <h2 class="text-lg">Message test</h2>
      <y-button @click="messageInfo">Info Message</y-button>
      <y-button @click="messageWarn">Warning Message</y-button>
      <y-button @click="messageDanger">Error Message</y-button>
      <y-button @click="messageSuccess">Success Message</y-button>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const ctx = getCurrentInstance();
console.log(ctx.appContext);
const messageInfo = () => {
  ctx.appContext.config.globalProperties.$message.info({
    message: "<strong>This is <i>HTML</i> string</strong>",
    showClose: true,
  });
};
const messageWarn = () => {
  ctx.appContext.config.globalProperties.$message({
    type: "warning",
    message: "一条警告信息",
  });
};
const messageDanger = () => {
  ctx.appContext.config.globalProperties.$message.danger({
    message: "一个危险操作",
  });
};
const messageSuccess = () => {
  ctx.appContext.config.globalProperties.$message({
    type: "success",
    message: `
    <div style="height:100px;width:100px;background:red;">
    <div>safafas</div>
    <div style="background:green">2222</div>
    </div>
    `,
    duration: 50000,
    showClose: true,
  });
};
</script>
