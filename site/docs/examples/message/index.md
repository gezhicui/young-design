# Message 消息提示

## 基础用法

<style>
.y-button{
  margin-right:10px
}
</style>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { appContext } = getCurrentInstance();
const messageInfo = () => {
  appContext.config.globalProperties.$message.info({
    message: "<strong>This is <i>HTML</i> string</strong>",
    showClose: true,
  });
};
const messageWarn = () => {
  appContext.config.globalProperties.$message({
    type: "warning",
    message: "一条警告信息",
  });
};
const messageDanger = () => {
  appContext.config.globalProperties.$message.danger({
    message: "一个危险操作",
  });
};
const messageSuccess = () => {
  appContext.config.globalProperties.$message({
    type: "success",
    message: `
    <div style="height:100px;width:100px;background:red;">
    <div>safafas</div>
    <div style="background:green">2222</div>
    </div>
    `,
    duration: 5000,
    showClose: true,
  });
};
</script>

<y-button type='info' plain @click="messageInfo">Info Message</y-button>
<y-button type='warning' plain @click="messageWarn">Warning Message</y-button>
<y-button type='danger' plain @click="messageDanger">Error Message</y-button>
<y-button type='success' plain @click="messageSuccess">Success Message</y-button>
