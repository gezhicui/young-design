# Notification 消息提示

## 基础用法

普通通知，4.5 秒后自动消失。`message`配置标题，`description`配置描述

<y-button :plain="true" @click="open">Show notification</y-button>
<y-button :plain="true" @click="openwithDesc">Show notification with description</y-button>

::: details 显示代码

```vue
<template>
  <div>
    <y-button :plain="true" @click="open">Show notification</y-button>
    <y-button :plain="true" @click="openwithDesc">
      Show notification with description
    </y-button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from 'young-design';

const open = () => {
  Notification('我是个Notification');
};

const openwithDesc = () => {
  Notification({
    message: '我是个Notification',
    description: '大家好，我在这里出现了，我是这个Notification的内容',
  });
};
</script>
```

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的通知。

当需要自定义更多属性时，Notification 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，**默认为 info**。 此时标题内容以 `message` 的值传入，描述内容以 `description` 的值传入。

同时，库也为 Notification 的各种 type 注册了属性方法,可以在不传入 type 字段的情况下通过属性方法直接调用。

### 方法调用

<br>
<y-button plain @click="notificationDefaultFun">Info Notification</y-button>
<y-button type='info' plain @click="notificationInfoFun">Info Notification</y-button>
<y-button type='warning' plain @click="notificationWarnFun">Warning Notification</y-button>
<y-button type='danger' plain @click="notificationDangerFun">Error Notification</y-button>
<y-button type='success' plain @click="notificationSuccessFun">Success Notification</y-button>

### 属性调用

<br>
<y-button type='info' plain @click="notificationInfoAttr">Info Notification</y-button>
<y-button type='warning' plain @click="notificationWarnAttr">Warning Notification</y-button>
<y-button type='danger' plain @click="notificationDangerAttr">Error Notification</y-button>
<y-button type='success' plain @click="notificationSuccessAttr">Success Notification</y-button>

::: details 显示代码 custThunderboltIcon

```vue
<template>
  <div>
    <y-button plain @click="notificationDefaultFun">
      Info Notification
    </y-button>
    <y-button type="info" plain @click="notificationInfoFun">
      Info Notification
    </y-button>
    <y-button type="warning" plain @click="notificationWarnFun">
      Warning Notification
    </y-button>
    <y-button type="danger" plain @click="notificationDangerFun">
      Error Notification
    </y-button>
    <y-button type="success" plain @click="notificationSuccessFun">
      Success Notification
    </y-button>

    <br />

    <y-button type="info" plain @click="notificationInfoAttr">
      Info Notification
    </y-button>
    <y-button type="warning" plain @click="notificationWarnAttr">
      Warning Notification
    </y-button>
    <y-button type="danger" plain @click="notificationDangerAttr">
      Error Notification
    </y-button>
    <y-button type="success" plain @click="notificationSuccessAttr">
      Success Notification
    </y-button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from 'young-design';

const notificationDefaultFun = () => {
  Notification('this is a notification.');
};
const notificationInfoFun = () => {
  Notification({
    type: 'info',
    message: 'this is a notification.',
  });
};
const notificationWarnFun = () => {
  Notification({
    type: 'warning',
    message: '警告',
  });
};
const notificationDangerFun = () => {
  Notification({
    type: 'danger',
    message: '一个危险提示',
    description: '你现在正在进行危险操作，请谨慎考虑',
  });
};
const notificationSuccessFun = () => {
  Notification({
    type: 'success',
    message: '成功',
    description: '成功了！太棒了！',
  });
};

const notificationInfoAttr = () => {
  Notification.info('this is a notification.');
};
const notificationWarnAttr = () => {
  Notification.warning('警告');
};
const notificationDangerAttr = () => {
  Notification.danger({
    message: '一个危险提示',
    description: '你现在正在进行危险操作，请谨慎考虑',
  });
};
const notificationSuccessAttr = () => {
  Notification.success({
    message: '成功',
    description: '成功了！太棒了！',
  });
};
</script>
```

:::

## 消失时间与手动关闭

可以添加关闭按钮。

默认的 Notification 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true 此外，Notification 拥有可控的 duration， 默认的关闭时间为 4500 毫秒，当把这个属性的值设置为 0 便表示该消息不会被自动关闭。

<y-button plain @click="closeInfo">Info Notification</y-button>
<y-button plain @click="closeWarn">Warning Notification</y-button>
<y-button plain @click="closeDanger">Error Notification</y-button>
<y-button plain @click="closesuccess">Success Notification</y-button>

::: details 显示代码

```vue
<template>
  <y-button plain @click="closeInfo">Info Notification</y-button>
  <y-button plain @click="closeWarn">Warning Notification</y-button>
  <y-button plain @click="closeDanger">Error Notification</y-button>
  <y-button plain @click="closesuccess">Success Notification</y-button>
</template>

<script setup lang="ts">
import { Notification } from 'young-design';
const closeInfo = () => {
  Notification({
    showClose: true,
    message: 'This is a message.',
  });
};
const closeWarn = () => {
  Notification({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  });
};
const closeDanger = () => {
  Notification({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  });
};
const closesuccess = () => {
  Notification({
    showClose: true,
    message: '这是个需要手动关闭的通知.',
    type: 'danger',
    duration: 0,
  });
};
</script>
```

:::

## 自定义 Icon

可以在配置对象中传入`icon`和`color`来自定义图标

<y-button plain @click="custThunderboltIcon">thunderbolt-fill</y-button>
<y-button plain @click="custLikeIcon">like-fill</y-button>

::: details 显示代码

```vue
<template>
  <div>
    <y-button plain @click="custThunderboltIcon">thunderbolt-fill</y-button>
    <y-button plain @click="custLikeIcon">like-fill</y-button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from 'young-design';
const custThunderboltIcon = () => {
  Notification({
    icon: 'thunderbolt-fill',
    color: 'orange',
    message: '看，这是一道闪电',
  });
};
const custLikeIcon = () => {
  Notification({
    icon: 'like-fill',
    color: 'red',
    message: '干得不错小老弟',
    description: '给你点个赞',
  });
};
</script>
```

:::

## 全局注册时的使用方法

`vue`为我们提供了`app.config.globalProperties`来挂载全局属性和方法,如果不需要按需导入，而是在入口文件中直接注册整个组件库的话，则`Notification`将挂载到全局,名为`$notification`，不需要每个组件中都`import`

<y-button plain @click="globalNotification">全局挂载</y-button>

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
    <y-button plain @click="globalNotification">Info Notification</y-button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const globalNotification = () => {
  proxy.$notification({
    message: 'This is a message.',
    showClose: true,
  });
};
</script>
```

:::

## API

方法调用和属性方法调用参数一致

| 参数        | 说明                                          | 类型    | 可选值                                | 默认值 |
| ----------- | --------------------------------------------- | ------- | ------------------------------------- | ------ |
| type        | message 类型                                  | string  | ['success','warning','danger','info'] | ——     |
| message     | 消息提示标题                                  | string  | ——                                    | ——     |
| description | 消息提示描述                                  | string  | ——                                    | ——     |
| icon        | 自定义图标名                                  | string  | <a href='/examples/icon'>Icon</a>     | ——     |
| color       | 图标的颜色                                    | string  | ——                                    | ——     |
| duration    | 自动关闭的延时，单位毫秒。设为 0 时不自动关闭 | number  | ——                                    | 4500   |
| showClose   | 是否显示关闭按钮                              | boolean | ——                                    | false  |

<script setup lang="ts">
import { Notification } from 'young-design';
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
const open = () => {
  Notification('我是个Notification');
};
const openwithDesc = () => {
  Notification({
    message: '我是个Notification',
    description: '大家好，我在这里出现了，我是这个Notification的内容',
  });
};
const notificationDefaultFun = () => {
  Notification('this is a notification.');
};
const notificationInfoFun = () => {
  Notification({
    type: 'info',
    message: 'this is a notification.',
  });
};
const notificationWarnFun = () => {
  Notification({
    type: 'warning',
    message: '警告',
  });
};
const notificationDangerFun = () => {
  Notification({
    type: 'danger',
    message: '一个危险提示',
    description: '你现在正在进行危险操作，请谨慎考虑',
  });
};
const notificationSuccessFun = () => {
  Notification({
    type: 'success',
    message: '成功',
    description: '成功了！太棒了！',
  });
};

const notificationInfoAttr = () => {
  Notification.info('this is a notification.');
};
const notificationWarnAttr = () => {
  Notification.warning('警告');
};
const notificationDangerAttr = () => {
  Notification.danger({
    message: '一个危险提示',
    description: '你现在正在进行危险操作，请谨慎考虑',
  });
};
const notificationSuccessAttr = () => {
  Notification.success({
    message: '成功',
    description: '成功了！太棒了！',
  });
};

const custThunderboltIcon = () => {
  Notification({
    icon: 'thunderbolt-fill',
    color:'orange',
    message: '看，这是一道闪电',
  });
};
const custLikeIcon = ()=>{
    Notification({
    icon: 'like-fill',
    color:'red',
    message: '干得不错小老弟',
    description:'给你点个赞',
  });
}
const closeInfo = () => {
  Notification({
    showClose: true,
    message: 'This is a message.',
  })
}
const closeWarn = () => {
  Notification({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const closeDanger = () => {
  Notification({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const closesuccess = () => {
  Notification({
    showClose: true,
    message: '这是个需要手动关闭的通知.',
    type: 'danger',
    duration:0
  })
}
const globalNotification = () => {
  proxy.$notification({
    icon: 'like-fill',
    color:'red',
    message: '干得不错小老弟',
    description:'给你点个赞',
    showClose:true,
  });
};
</script>
<style scope>
.y-button {
  margin: 5px;
}
</style>
