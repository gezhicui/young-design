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

::: details 显示代码

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

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，**默认为 info**。 此时正文内容以 message 的值传入。 同时，库也为 Message 的各种 type 注册了方法,可以在不传入 type 字段的情况下像 messageSuccess 那样直接调用。

<y-button type='info' plain @click="messageInfo">Info Message</y-button>
<y-button type='warning' plain @click="messageWarn">Warning Message</y-button>
<y-button type='danger' plain @click="messageDanger">Error Message</y-button>
<y-button type='success' plain @click="messageSuccess">Success Message</y-button>

::: details 显示代码

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

:::

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true 此外，Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为 0 便表示该消息不会被自动关闭。

<y-button plain @click="closeInfo">Info Message</y-button>
<y-button plain @click="closeWarn">Warning Message</y-button>
<y-button plain @click="closeDanger">Error Message</y-button>
<y-button plain @click="closesuccess">Success Message</y-button>

::: details 显示代码

```vue
<template>
  <div>
    <y-button plain @click="closeInfo">Info Message</y-button>
    <y-button plain @click="closeWarn">Warning Message</y-button>
    <y-button plain @click="closeDanger">Error Message</y-button>
    <y-button plain @click="closesuccess">Success Message</y-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { appContext } = getCurrentInstance();
const message = appContext.config.globalProperties.$message;

const closeInfo = () => {
  message({
    showClose: true,
    message: 'This is a message.',
  });
};
const closeWarn = () => {
  message({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  });
};
const closeDanger = () => {
  message({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  });
};
const closesuccess = () => {
  message({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
    duration: 0,
  });
};
</script>
```

:::

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

const closeInfo = () => {
  message({
    showClose: true,
    message: 'This is a message.',
  })
}
const closeWarn = () => {
  message({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const closeDanger = () => {
  message({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const closesuccess = () => {
  message({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
    duration:0
  })
}
</script>

<style scope>
.y-button{
  margin-right:10px
}
</style>
