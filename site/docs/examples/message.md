# Message 消息提示

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
import { Message } from 'young-design';

const open = () => {
  Message('我是个message');
};

const openVn = () => {
  Message('<strong>This is <i>HTML</i> string</strong>');
};
</script>
```

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，**默认为 info**。 此时正文内容以 message 的值传入。

同时，库也为 Message 的各种 type 注册了属性方法,可以在不传入 type 字段的情况下通过属性方法直接调用。

### 方法调用

<br>
<y-button type='info' plain @click="messageInfo">Info Message</y-button>
<y-button type='warning' plain @click="messageWarn">Warning Message</y-button>
<y-button type='danger' plain @click="messageDanger">Error Message</y-button>
<y-button type='success' plain @click="messageSuccess">Success Message</y-button>

### 属性调用

<br>
<y-button type='info' plain @click="messageInfoAttr">Info Message</y-button>
<y-button type='warning' plain @click="messageWarnAttr">Warning Message</y-button>
<y-button type='danger' plain @click="messageDangerAttr">Error Message</y-button>
<y-button type='success' plain @click="messageSuccessAttr">Success Message</y-button>

::: details 显示代码

```vue
<template>
  <div>
    <y-button type="info" plain @click="messageInfoFun">
      Info Message
    </y-button>
    <y-button type="warning" plain @click="messageWarnFun">
      Warning Message
    </y-button>
    <y-button type="danger" plain @click="messageDangerFun">
      Error Message
    </y-button>
    <y-button type="success" plain @click="messageSuccessFun">
      Success Message
    </y-button>
  </div>
  <div>
    <y-button type="info" plain @click="messageInfoAttr">
      Info Message
    </y-button>
    <y-button type="warning" plain @click="messageWarnAttr">
      Warning Message
    </y-button>
    <y-button type="danger" plain @click="messageDangerAttr">
      Error Message
    </y-button>
    <y-button type="success" plain @click="messageSuccessAttr">
      Success Message
    </y-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'young-design';

const messageInfoFun = () => {
  //默认为info
  Message('this is a message.');
};
const messageWarnFun = () => {
  Message({
    type: 'warning',
    message: 'Warning, this is a warning message.',
  });
};
const messageDangerFun = () => {
  Message({
    type: 'danger',
    message: '一个危险操作',
  });
};
const messageSuccessFun = () => {
  Message({
    type: 'success',
    message: 'Congrats, this is a success message.',
  });
};

const messageInfoAttr = () => {
  Message.info('this is a message.');
};
const messageWarnAttr = () => {
  Message.warning('Warning, this is a warning message.');
};
const messageDangerAttr = () => {
  Message.danger('一个危险操作');
};
const messageSuccessAttr = () => {
  Message.success('Congrats, this is a success message.');
};
</script>
```

:::

## 消失时间与手动关闭

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
import { Message } from 'young-design';
//可以通过方法传入type
const closeInfo = () => {
  Message({
    showClose: true,
    message: 'This is a message.',
  });
};
const closeWarn = () => {
  Message({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  });
};

//可以通过type属性方法调用
const closeDanger = () => {
  Message.warning({
    showClose: true,
    message: 'Warning, this is a warning message.',
  });
};
const closesuccess = () => {
  Message.danger({
    showClose: true,
    message: 'Oops, this is a error message.',
    duration: 0,
  });
};
</script>
```

:::

## 自定义 Icon

可以在配置对象中传入`icon`来自定义图标

<y-button plain @click="custIcon">thunderbolt-fill</y-button>

::: details 显示代码

```vue
<template>
  <div>
    <y-button plain @click="custIcon">thunderbolt-fill</y-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'young-design';
//可以通过方法传入type
const custIcon = () => {
  Message({
    showClose: true,
    icon: 'thunderbolt-fill',
    message: 'Oops, this is a error message.',
    type: 'danger',
  });
};
</script>
```

:::

## 全局注册时的使用方法

`vue`为我们提供了`app.config.globalProperties`来挂载全局属性和方法,如果不需要按需导入，而是在入口文件中直接注册整个组件库的话，则`Message`将挂载到全局,名为`$message`，不需要每个组件中都`import`

<y-button plain @click="globalMessage">全局挂载</y-button>

::: details 显示代码

```js
//main.ts
import youngDesign from 'young-design';
const app = createApp(App);
app.use(youngDesign);
app.mount('#app');
```

```vue
<!-- 组件 -->
<template>
  <div>
    <y-button plain @click="globalMessage">Info Message</y-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const globalMessage = () => {
  proxy.$message({
    showClose: true,
    message: 'This is a message.',
  });
};
</script>
```

:::

## API

方法调用和属性方法调用参数一致

| 参数      | 说明                                          | 类型    | 可选值                                | 默认值 |
| --------- | --------------------------------------------- | ------- | ------------------------------------- | ------ |
| type      | message 类型                                  | string  | ['success','warning','danger','info'] | 'info' |
| message   | 消息提示内容                                  | string  | ——                                    | ——     |
| icon      | 自定义图标名                                  | string  | <a href='/examples/icon'>Icon</a>     | ——     |
| duration  | 自动关闭的延时，单位毫秒。设为 0 时不自动关闭 | number  | ——                                    | 3000   |
| showClose | 是否显示关闭按钮                              | boolean | ——                                    | false  |

<script setup lang="ts">

import { Message } from 'young-design'
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const open = ()=>{
  Message("我是个message");
}

const openVn = ()=>{
  Message('<strong>This is <i>HTML</i> string</strong>');
}

const messageInfo = () => {
  Message.info({
    message: "this is a message.",
  });
};
const messageWarn = () => {
  Message({
    type: "warning",
    message: "Warning, this is a warning message.",
  });
};
const messageDanger = () => {
  Message.danger({
    message: "一个危险操作",
  });
};
const messageSuccess = () => {
  Message({
    type: "success",
    message: 'Congrats, this is a success message.',
  });
};

const closeInfo = () => {
  Message({
    showClose: true,
    message: 'This is a message.',
  })
}
const closeWarn = () => {
  Message({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const closeDanger = () => {
  Message({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const closesuccess = () => {
  Message({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
    duration:0
  })
}

const custIcon= () => {
  Message({
    showClose: true,
    icon:'thunderbolt-fill',
    message: 'Oops, this is a error message.',
    type: 'danger',
  })
}

const globalMessage = () => {
  proxy.$message({
    showClose: true,
    message: 'This is a global message.',
  });
};
const messageInfoAttr = () => {
  Message.info('this is a message.');
};
const messageWarnAttr = () => {
  Message.warning('Warning, this is a warning message.');
};
const messageDangerAttr = () => {
  Message.danger('一个危险操作');
};
const messageSuccessAttr = () => {
  Message.success('Congrats, this is a success message.');
};
</script>

<style scope>
.y-button{
  margin-right:10px
}
</style>
