# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

需要设置 visible 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为三个部分：header、body 和 footer，header 和 footer 分别需要具名为`headerContent`和 `footerContent` 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。

<y-dialog :visible="normalViaible" @cancel="handleClose" @confirm="handleClose" title="我就是个传进来的标题" width="500px">
这是内容这是内容这是内容这是内容这是内容
</y-dialog>

<y-button @click="openDefaultDialog">点击显示 dialog</y-button>

::: details 显示代码

```vue
<template>
  <y-dialog
    :visible="normalViaible"
    @cancel="handleClose"
    @confirm="handleClose"
    title="我就是个传进来的标题"
    width="500px"
  >
    这是内容这是内容这是内容这是内容这是内容
  </y-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const normalViaible = ref(false);
const openDefaultDialog = () => {
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

<y-dialog :visible="contentVisible" @cancel="handleClose" @confirm="handleClose" title="文件上传" width="500px">
<y-upload  drag>
<y-button type="primary" size="small">文件上传</y-button>
</y-upload>
</y-dialog>

<y-button @click="openContentDialog">自定义内容的 dialog</y-button>

::: details 显示代码

```vue
<template>
  <y-dialog
    :visible="contentVisible"
    @cancel="handleClose"
    @confirm="handleClose"
    title="文件上传"
    width="500px"
  >
  <y-button @click="openContentDialog">自定义内容的 dialog</y-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const contentVisible = ref(false)
const openContentDialog = () => {
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

<y-dialog :visible="customVisible" :showClose="false" @cancel="handleClose" @confirm="handleClose" title="我就是个传进来的标题" width="500px">
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
</y-dialog>

<y-button @click="openCustomDialog">显示自定义头尾 dialog</y-button>

::: details 显示代码

```vue
<template>
  <y-dialog
    :visible="customVisible"
    :showClose="false"
    @cancel="handleClose"
    @confirm="handleClose"
    title="我就是个传进来的标题"
    width="500px"
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
  </y-dialog>

  <y-button @click="openCustomDialog">显示自定义头尾 dialog</y-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const customVisible = ref(false);
const openCustomDialog = () => {
  customVisible.value = true;
};
const handleClose = () => {
  customVisible.value = false;
};
</script>
```

:::

## API

| 参数              | 说明                  | 类型    | 可选值 | 默认值 |
| ----------------- | --------------------- | ------- | ------ | ------ |
| title             | 标题                  | string  |        |        |
| visible           | dialog 是否出现       | boolean |        | false  |
| cancelText        | cancel 按钮的文字     | string  |        | 取消   |
| confirmText       | confirm 按钮的文字    | string  |        | 确认   |
| showHeader        | 是否需要头部          | boolean |        | true   |
| showFooter        | 是否需要尾部          | boolean |        | true   |
| showClose         | 是否需要 close        | boolean |        | true   |
| showCancelButton  | 是否需要 cancel 按钮  | boolean |        | true   |
| showConfirmButton | 是否需要 confirm 按钮 | boolean |        | true   |
| width             | 自定义宽度            | string  |        | auto   |

## slot

| 插槽名        | 描述                    |
| ------------- | ----------------------- |
| default       | 默认插槽，dialog 的内容 |
| headerContent | 头部插槽                |
| footerContent | 尾部插槽                |

<script setup lang="ts">
  import { ref } from "vue";

  const normalViaible = ref(false);
  const contentVisible = ref(false)
  const customVisible = ref(false)

  const openDefaultDialog = () => {
    normalViaible.value = true;
  };
  const openContentDialog=()=>{
    contentVisible.value = true
  }
  const openCustomDialog=()=>{
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
</style>
