# Message 消息提示

常用于主动操作后的反馈提示,使用前先用`app.use`挂载为全局函数

```js
import { Message } from 'young-design';
app.use(Message);
```

接着就可以这么使用:

```vue
<script setup lang="ts">
import { getCurrentInstance, h } from 'vue';
const { appContext } = getCurrentInstance();
const message = appContext.config.globalProperties.$message;
const open = () => {
  message('我是个message');
};
</script>
```

## 基础用法

从顶部出现，3 秒后自动消失。

<y-button :plain="true" @click="open">Show message</y-button>
<y-button :plain="true" @click="openVn">自定义 html</y-button>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <y-button :plain="true" @click="open">Show message</y-button>
    <y-button :plain="true" @click="openVn">VNode</y-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { appContext } = getCurrentInstance();
const message = appContext.config.globalProperties.$message;

const open = () => {
  message('我是个message');
};

const openVn = () => {
  message('<strong>This is <i>HTML</i> string</strong>');
};
</script>
```

</details>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，**默认为 info**。 此时正文内容以 message 的值传入。 同时，库也为 Message 的各种 type 注册了方法,可以在不传入 type 字段的情况下像 messageSuccess 那样直接调用。

<y-button type='info' plain @click="messageInfo">Info Message</y-button>
<y-button type='warning' plain @click="messageWarn">Warning Message</y-button>
<y-button type='danger' plain @click="messageDanger">Error Message</y-button>
<y-button type='success' plain @click="messageSuccess">Success Message</y-button>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <y-button type="info" plain @click="messageInfo">Info Message</y-button>
    <y-button type="warning" plain @click="messageWarn">Warning Message</y-button>
    <y-button type="danger" plain @click="messageDanger">Error Message</y-button>
    <y-button type="success" plain @click="messageSuccess">Success Message</y-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { appContext } = getCurrentInstance();
const message = appContext.config.globalProperties.$message;

const messageInfo = () => {
  message('this is a message.');
};
const messageWarn = () => {
  message({
    type: 'warning',
    message: 'Warning, this is a warning message.',
  });
};
const messageDanger = () => {
  message({
    type: 'danger',
    message: '一个危险操作',
  });
};
const messageSuccess = () => {
  message.success('Congrats, this is a success message.');
};
</script>
```

</details>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { appContext } = getCurrentInstance();
const message = appContext.config.globalProperties.$message

const open = ()=>{
  message("我是个message");
}

const openVn = ()=>{
  message('<strong>This is <i>HTML</i> string</strong>');
}

const messageInfo = () => {
  message.info({
    message: "this is a message.",
  });
};
const messageWarn = () => {
  message({
    type: "warning",
    message: "Warning, this is a warning message.",
  });
};
const messageDanger = () => {
  message.danger({
    message: "一个危险操作",
  });
};
const messageSuccess = () => {
  message({
    type: "success",
    message: 'Congrats, this is a success message.',
  });
};
</script>

<style scope>
.y-button{
  margin-right:10px
}
</style>
