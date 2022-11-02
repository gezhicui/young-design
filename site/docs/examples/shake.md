# Shake 抖动

给元素添加抖动效果，起到提醒的作用

## 基本使用

通过插槽传入需要抖动的元素，使用 v-model 控制元素抖动，绑定的值会在 1s 后变成 false(即抖动停止)

<y-shake v-model="trigger"> 这是一段要抖动的文字 </y-shake><br>
<y-button type='primary' @click="handletrigger"> 点击抖动文字 </y-button>

::: details 显示代码

```html
<template>
  <y-shake v-model="trigger"> 这是一段要抖动的文字 </y-shake>
  <y-button type='primary' @click="handletrigger"> 点击抖动文字 </y-button>
</template>

<script setup>
import { ref } from 'vue';
const trigger = ref(false);
const handletrigger = () => {
  trigger.value = true;
};
```

:::

## 抖动持续时间

通过传入`duration`可以控制抖动的持续时长(毫秒),默认 1000(即 1s)

可以在插槽中传入任何东西，做到万物皆可抖

<y-shake :duration='2000' v-model="trigger2"> 
<y-avatar
  :size="10"
  src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/blogImg/avatar.png"
/>
 </y-shake><br>
<y-button  type='primary' @click="handletrigger2"> 点击抖动 </y-button>

::: details 显示代码

```html
<template>
  <y-shake :duration='2000' v-model="trigger">
   <y-avatar
    :size="10"
    src="https://yangblogimg.oss-cn-hangzhou.aliyuncs.com/blogImg/avatar.png"
    />
  </y-shake>
  </y-shake>
  <y-button type='primary' @click="handletrigger"> 点击抖动 </y-button>
</template>

<script setup>
import { ref } from 'vue';
const trigger = ref(false);
const handletrigger = () => {
  trigger.value = true;
};
```

:::

## API

| 参数     | 说明                                          | 类型    | 可选值 | 默认值 |
| -------- | --------------------------------------------- | ------- | ------ | ------ |
| v-model  | 绑定的抖动状态,设为 true 后 1s 自动改为 false | boolean | ——     | false  |
| duration | 抖动持续时间(ms)                              | number  | ——     | 1000   |

## Slots

| 插槽名  | 描述           |
| ------- | -------------- |
| default | 需要抖动的内容 |

<script setup>
import { ref } from 'vue';
const trigger = ref(false);
const trigger2 = ref(false);
const handletrigger = () => {
  trigger.value = true;
};
const handletrigger2 = ()=>{
  trigger2.value = true;
}
</script>
