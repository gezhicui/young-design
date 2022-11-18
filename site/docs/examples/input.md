# Input 输入框

## 基础用法

这是最最基础的用法

<y-input  placeholder="我是一个输入框" v-model="val" />

::: details 显示代码

```vue
<template>
  <y-input placeholder="我是一个输入框" v-model="val" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const val = ref('');
</script>
```

:::

## 禁用状态

我们只需要传入`disabled`来控制 input 的禁用

<y-input  disabled  modelValue='我被关小黑屋了'/>

::: details 显示代码

```vue
<template>
  <y-input disabled modelValue="我被关小黑屋了" />
</template>
```

:::

## 尺寸

传递`size`来控制输入框尺寸，尺寸包括` medium,small,mini,`不传则是默认尺寸。

<y-input modelValue='我默认的'/>
<br>
<br>
<y-input size='medium'  modelValue='我中的'/>
<br>
<br>
<y-input size='small'  modelValue='我小的'/>
<br>
<br>
<y-input size='mini'  modelValue='我迷你的'/>

::: details 显示代码

```vue
<template>
  <y-input modelValue="我默认的" />
  <y-input size="medium" modelValue="我中的" />
  <y-input size="small" modelValue="我小的" />
  <y-input size="mini" modelValue="我迷你的" />
</template>
```

:::

## 可清空

通过 `clearable` 属性、Input 的值是否为空以及是否鼠标是否移入来判断是否需要显示可清空图标。图标则使用组件库的 Icon 组件

<y-input  v-model='clearval' clearable/>

::: details 显示代码

```vue
<template>
  <y-input v-model="clearval" clearable />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const clearval = ref('');
</script>
```

:::

## 密码框

通过传入`password`属性可以得到一个可切换显示隐藏的密码框。这里要注意的是如果传了`clearable`则不会显示切换显示隐藏的图标

<y-input v-model='passwordVal'  password/>

::: details 显示代码

```vue
<template>
  <y-input v-model="passwordVal" password />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const passwordVal = ref('');
</script>
```

:::

## 带 Icon 的输入框

通过 `prefixIcon` 和 `suffixIcon` 属性可以为 `Input` 组件添加首尾图标。

<y-input  prefixIcon="user" />
<br>
<br>
<y-input  suffixIcon="setting" />

::: details 显示代码

```vue
<template>
  <y-input prefixIcon="user" />
  <y-input suffixIcon="setting" />
</template>
```

:::

## 复合型输入框

我们可以使用复合型输入框来前置或者后置我们的元素

<y-input placeholder="请输入内容">
<template #prepend>
    http://
</template>
</y-input>
<br>
<br>
<y-input placeholder="请输入内容">
<template #append>
    .com
</template>
</y-input>

::: details 显示代码

```vue
<template>
  <y-input placeholder="请输入内容">
    <template #prepend> http:// </template>
  </y-input>
  <y-input placeholder="请输入内容">
    <template #append> .com </template>
  </y-input>
</template>
```

:::

<script setup>
import {ref} from 'vue'

const val = ref('')
const clearval = ref('我是可清空的')
const passwordVal = ref('')
</script>
