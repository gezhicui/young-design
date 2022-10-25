# Rate 评分

## 基本使用

`v-model` 绑定评分值

<y-rate v-model="value1" />

::: details 显示代码

```html
<template>
  <y-rate v-model="value1" />
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(2);
</script>
```

:::

## 配置颜色

`color` 属性可以配置选中的 `icon` 颜色

`voidColor` 属性可以配置未选中的 `icon` 颜色

<y-rate v-model="value2" />
<br>
<y-rate v-model="value2" effectColor="red" invalidColor="#eee" />

::: details 显示代码

```html
<template>
  <y-rate v-model="value2" />
  <y-rate v-model="value2" effectColor="red" invalidColor="#eee" />
</template>

<script setup>
  import { ref } from 'vue';
  const value2 = ref(2);
</script>
```

:::

## 辅助文字

`showText` 属性可以配置是否显示辅助文字

`SayText` 属性可以配置辅助文字数组

<y-rate v-model="value3" showText />
<br>
<y-rate v-model="value3" showText :textArr="['1星', '2星', '3星', '4星', '5星']"/>

::: details 显示代码

```html
<template>
  <y-rate v-model="value3" showText />
  <y-rate
    v-model="value3"
    showText
    :textArr="['1星', '2星', '3星', '4星', '5星']"
  />
</template>

<script setup>
  import { ref } from 'vue';
  const value3 = ref(2);
</script>
```

:::

## 自定义图标

使用`iconName`可自定义图标，参考 Icon 组件

<y-rate v-model="value4" iconName="heart-fill"  effectColor='red' />

::: details 显示代码

```html
<template>
  <y-rate v-model="value4" iconName="heart-fill" effectColor="red" />
</template>

<script setup>
  import { ref } from 'vue';
  const value4 = ref(2);
</script>
```

:::

## 设置图标大小

使用`iconSize`可自定义图标大小，默认为 20px

<y-rate v-model="value5" iconName="heart-fill"  effectColor='red' iconSize="40" />

::: details 显示代码

```html
<y-rate
  v-model="value5"
  iconName="heart-fill"
  effectColor="red"
  iconSize="40"
/>

<script setup>
  import { ref } from 'vue';
  const value5 = ref(2);
</script>
```

:::

## API

| 参数         | 说明               | 类型          | 可选值                            | 默认值                                   |
| ------------ | ------------------ | ------------- | --------------------------------- | ---------------------------------------- |
| v-model      | 绑定值             | number        | ——                                | 0                                        |
| iconName     | 自定义图标名       | string        | <a href='/examples/icon'>Icon</a> | 'star-fill '                             |
| iconSize     | 自定义图标大小     | string/number | ——                                | 20                                       |
| effectColor  | 选中的 icon 颜色   | string        | ——                                | '#fbcc30'                                |
| invalidColor | 未选中的 icon 颜色 | string        | ——                                | '#C6D1DE'                                |
| showText     | 是否显示辅助文字   | boolean       | ——                                | false                                    |
| textArr      | 自定义辅助文字数组 | boolean       | ——                                | ['极差', '失望', '一般', '惊喜', '满意'] |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| change   | 分值改变时的回调 | ——       |

<script setup>
  import { ref } from 'vue'
  const value1 = ref(2)
  const value2 = ref(2)
  const value3 = ref(2)
  const value4 = ref(2)
   const value5 = ref(2)
</script>
