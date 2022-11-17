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

我们只需要传入`disabled`来赋予禁用类名即可

<y-input  disabled   modelValue='我被关小黑屋了'/>

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

## 可清空

通过 `clearable` 属性、Input 的值是否为空以及是否鼠标是否移入来判断是否需要显示可清空图标。图标则使用组件库的 Icon 组件

<y-input  v-model='clearval' clearable/>

<script setup>
import {ref} from 'vue'

const val = ref('')
const clearval = ref('我是可清空的')
</script>
