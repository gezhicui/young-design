# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 基础用法

需要设置 `visible` 属性，它接收 Boolean，当为 true 时显示 Drawer。 Drawer 分为三个部分：header、body 和 footer，header 和 footer 分别需要具名为`headerContent`和 `footerContent` 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。

`direction`属性可以控制抽屉弹出方向

<y-drawer :visible="normalViaible" @cancel="handleClose" @confirm="handleClose" title="我就是个传进来的标题" :direction="direction">
这是内容这是内容这是内容这是内容这是内容
</y-drawer>

<y-button type="primary" @click="openDefaultDrawer">点击显示 drawer</y-button>

<y-radio v-model="direction" label="right">从右面弹出</y-radio>
<y-radio v-model="direction" label="left">从左面弹出</y-radio>
<y-radio v-model="direction" label="bottom">从下面弹出</y-radio>
<y-radio v-model="direction" label="top">从上面弹出</y-radio>

::: details 显示代码

```vue
<template>
  <y-drawer
    :visible="normalViaible"
    @cancel="handleClose"
    @confirm="handleClose"
    title="我就是个传进来的标题"
    size="500px"
  >
    这是内容这是内容这是内容这是内容这是内容
  </y-drawer>

  <y-button @click="openDefaultDrawer">点击显示 drawer</y-button>

  <y-radio v-model="direction" label="right">从右面弹出</y-radio>
  <y-radio v-model="direction" label="left">从左面弹出</y-radio>
  <y-radio v-model="direction" label="bottom">从下面弹出</y-radio>
  <y-radio v-model="direction" label="top">从上面弹出</y-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const normalViaible = ref(false);
const direction = ref('right');

const openDefaultDrawer = () => {
  normalViaible.value = true;
};

const handleClose = () => {
  normalViaible.value = false;
};
</script>
```

:::

## 自定义内容

对话框的内容可以是任何东西

<y-drawer :visible="contentVisible" @cancel="handleClose" @confirm="handleClose" title="文件上传" >
<y-upload  drag>
<y-button type="primary" size="small">文件上传</y-button>
</y-upload>
</y-drawer>

<y-button @click="openContentDrawer">自定义内容的 drawer</y-button>

::: details 显示代码

```vue
<template>
  <y-drawer
    :visible="contentVisible"
    @cancel="handleClose"
    @confirm="handleClose"
    title="文件上传"
    size="500px"
  >
  <y-button @click="openContentDrawer">自定义内容的 drawer</y-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const contentVisible = ref(false)
const openContentDrawer = () => {
  contentVisible.value = true;
};

const handleClose = () => {
  contentVisible.value = false;
};
</script>
```

:::

## 自定义头部和尾部

对话框的头部和尾部可以通过 slot 自定义

<y-drawer :visible="customVisible" :closable="false" @cancel="handleClose" @confirm="handleClose" title="我就是个传进来的标题">
<template v-slot:headerContent>

<div class="my-header">
<span> This is a custom header!</span>
   <y-button type="danger" @click="handleClose">close</y-button>
</div>
</template>
<template v-slot:footerContent>
<div class="my-footer">
~~我是一条小尾巴~~
</div>
</template>
这是内容这是内容这是内容这是内容这是内容
</y-drawer>

<y-button @click="openCustomDrawer">显示自定义头尾 drawer</y-button>

::: details 显示代码

```vue
<template>
  <y-drawer
    :visible="customVisible"
    :closable="false"
    @cancel="handleClose"
    @confirm="handleClose"
    title="我就是个传进来的标题"
    size="500px"
  >
    <template v-slot:headerContent>
      <div class="my-header">
        <span> This is a custom header!</span>
        <y-button type="danger" @click="handleClose">close</y-button>
      </div>
    </template>
    <template v-slot:footerContent>
      <div class="my-footer">~~我是一条小尾巴~~</div>
    </template>
    这是内容这是内容这是内容这是内容这是内容
  </y-drawer>

  <y-button @click="openCustomDrawer">显示自定义头尾 drawer</y-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const customVisible = ref(false);
const openCustomDrawer = () => {
  customVisible.value = true;
};
const handleClose = () => {
  customVisible.value = false;
};
</script>
```

:::

## API

| 参数              | 说明                                 | 类型    | 可选值                             | 默认值  |
| ----------------- | ------------------------------------ | ------- | ---------------------------------- | ------- |
| direction         | 自定义弹出方向                       | string  | ['top', 'left', 'bottom', 'right'] | 'right' |
| title             | 标题                                 | string  | ——                                 | ——      |
| visible           | drawer 是否出现                      | boolean | ——                                 | false   |
| cancelText        | cancel 按钮的文字                    | string  | ——                                 | '取消'  |
| confirmText       | confirm 按钮的文字                   | string  | ——                                 | '确认'  |
| showHeader        | 是否需要头部                         | boolean | ——                                 | true    |
| showFooter        | 是否需要尾部                         | boolean | ——                                 | true    |
| closable          | 是否需要 close                       | boolean | ——                                 | true    |
| maskClosable      | 点击蒙层是否可以关闭                 | boolean | ——                                 | true    |
| showCancelButton  | 是否需要 cancel 按钮                 | boolean | ——                                 | true    |
| showConfirmButton | 是否需要 confirm 按钮                | boolean | ——                                 | true    |
| size              | 自定义大小，可以是具体像素值或百分比 | string  | ——                                 | 'auto'  |

## Slots

| 插槽名        | 描述          |
| ------------- | ------------- |
| default       | Drawer 的内容 |
| headerContent | 头部插槽      |
| footerContent | 尾部插槽      |

<script setup lang="ts">
  import { ref } from "vue";
  const direction = ref('right');
  const normalViaible = ref(false);
  const contentVisible = ref(false)
  const customVisible = ref(false)

  const openDefaultDrawer = () => {
    normalViaible.value = true;
  };
  const openContentDrawer=()=>{
    contentVisible.value = true
  }
  const openCustomDrawer=()=>{
    customVisible.value = true
  }
  const handleClose = () => {
    normalViaible.value = false
    contentVisible.value = false
    customVisible.value = false
  };
</script>
<style scope>
  .my-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:20px;
    font-weight:'bold';
  }
  .my-footer{
    padding:20px;
    text-align:center;
  }
  .y-button{
    margin-right:10px;
  }
</style>
