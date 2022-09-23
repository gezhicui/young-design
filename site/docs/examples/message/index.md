# Message 消息提示

## 基础用法

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { appContext } = getCurrentInstance();
const message = () => {
  appContext.config.globalProperties.$message({
    type: "success",
    message: "nihao",
    duration: 5000,
  });
};
</script>

<y-button @click="message">登录</y-button>
