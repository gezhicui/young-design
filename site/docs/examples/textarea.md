# Textarea 文本域

## 基本使用

文本域的基本用法

<y-textarea v-model="value1" placeholder="请输入内容..." />

::: details 显示代码

```html
<template>
  <y-textarea v-model="value1" placeholder="请输入内容..." />
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
</script>
```

:::

## 拉伸方式

`resize` 属性可以规定文本域的拉伸方式

<y-textarea v-model="value2" />
<y-textarea v-model="value3" resize="vertical" />
<y-textarea v-model="value4" resize="horizontal" />
<y-textarea v-model="value5" resize="none" />

::: details 显示代码

```html
<template>
  <y-textarea v-model="value2" />
  <y-textarea v-model="value3" resize="vertical" />
  <y-textarea v-model="value4" resize="horizontal" />
  <y-textarea v-model="value5" resize="none" />
</template>

<script setup>
  import { ref } from 'vue';
  const value2 = ref('随意拉伸');
  const value3 = ref('只能纵向拉伸');
  const value4 = ref('只能横向拉伸');
  const value5 = ref('禁止拉伸');
</script>
```

:::

## 不同尺寸

`rows` 属性可以配置文本域的行数

`cols` 属性可以配置文本域的宽度

<y-textarea v-model="value6" rows="5" />
<y-textarea v-model="value7" cols="10" />

::: details 显示代码

```html
<template>
  <y-textarea v-model="value6" rows="5" />
  <y-textarea v-model="value7" cols="10" />
</template>

<script setup>
  import { ref } from 'vue';
  const value6 = ref('');
  const value7 = ref('');
</script>
```

:::

## 禁用状态

`disabled` 属性可以配置文本域禁用状态

<y-textarea v-model="value8" disabled />

::: details 显示代码

```html
<template>
  <y-textarea v-model="value8" disabled />
</template>

<script setup>
  import { ref } from 'vue';
  const value8 = ref('禁用状态');
</script>
```

:::

## 最大上限

`max` 属性可以配置文本域输入的最大上限文本

<y-textarea v-model="value9" max="10" />

::: details 显示代码

```html
<template>
  <y-textarea v-model="value9" max="10" />
</template>

<script setup>
  import { ref } from 'vue';
  const value9 = ref('');
</script>
```

:::

## API

| 参数        | 说明             | 类型                | 可选值                                      | 默认值 |
| ----------- | ---------------- | ------------------- | ------------------------------------------- | ------ |
| v-model     | 绑定值           | 'string' / 'number' | ——                                          | ——     |
| placeholder | 输入框占位文本   | string              | ——                                          | ——     |
| max         | 最大输入上限     | string              | ——                                          | ——     |
| disabled    | 是否禁用         | boolean             | ——                                          | false  |
| autofocus   | 是否自动获取焦点 | boolean             | ——                                          | false  |
| name        | 原生 name 属性   | string              | ——                                          | ——     |
| resize      | 拉伸方式         | string              | ['vertical' , 'horizontal' , 'none','both'] | 'both' |
| rows        | 行数             | string              | ——                                          | 3      |
| cols        | 宽度             | string              | ——                                          | 70     |

## Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| onblur   | 失去焦点触发的回调 | ——       |
| onfocus  | 获取焦点触发的回调 | ——       |

<script setup>
  import { ref } from 'vue'
  const value1 = ref('')
  const value2 = ref('随意拉伸')
  const value3 = ref('只能纵向拉伸')
  const value4 = ref('只能横向拉伸')
  const value5 = ref('禁止拉伸')
  const value6 = ref('')
  const value7 = ref('')
  const value8 = ref('禁用状态')
  const value9 = ref('')
</script>

<style scope>
  textarea{
    resize:both;
  }
  </style>
