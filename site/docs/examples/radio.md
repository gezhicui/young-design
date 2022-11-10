# Radio 单选框

## 基本使用

可以通过两种方式来使用 radio

### 传递一个 options 数组来描述 radio

传入一个`options`数组，`label` 为展示的文字,`value` 对应的值，`disabled` 为是否禁用

<y-radio v-model="radioOpts" :options="radioOptions" />

::: details 显示代码

```html
<template>
  <y-radio v-model="radioOpts" :options="radioOptions" />
</template>

<script setup>
  import { ref } from 'vue';
  const radioOptions = [
    { label: '绿色', value: 'green' },
    { label: '蓝色', value: 'blue', disabled: true },
    { label: '黄色', value: 'yellow' },
    { label: '红色', value: 'red' },
  ];

  const radioOpts = ref('green');
</script>
```

:::

### 通过标签来描述 radio

`label` 属性可配置 `radio` 的 `value`

<y-radio v-model="radio1" label="备选项1">备选项 1</y-radio>
<y-radio v-model="radio1" label="备选项2">备选项 2</y-radio>
<y-radio v-model="radio1" label="备选项3">备选项 3</y-radio>

::: details 显示代码

```html
<template>
  <y-radio v-model="radio1" label="备选项1">备选项1</y-radio>
  <y-radio v-model="radio1" label="备选项2">备选项2</y-radio>
  <y-radio v-model="radio1" label="备选项3">备选项3</y-radio>
</template>

<script setup>
  import { ref } from 'vue';
  const radio1 = ref('备选项1');
</script>
```

:::

## 禁用状态

`disabled` 属性可以配置禁用状态

<y-radio v-model="radio2" disabled label="备选项1">备选项 1</y-radio>
<y-radio v-model="radio2" label="备选项2">备选项 2</y-radio>
<y-radio v-model="radio2" label="备选项3">备选项 3</y-radio>

::: details 显示代码

```html
<template>
  <y-radio v-model="radio2" disabled label="备选项1">备选项1</y-radio>
  <y-radio v-model="radio2" label="备选项2">备选项2</y-radio>
  <y-radio v-model="radio2" label="备选项3">备选项3</y-radio>
</template>

<script setup>
  import { ref } from 'vue';
  const radio2 = ref('备选项2');
</script>
```

:::

## 带有边框

`border` 属性可以配置边框

<y-radio v-model="radio3" label="备选项1" border>备选项 1</y-radio>
<y-radio v-model="radio3" label="备选项2" border>备选项 2</y-radio>
<y-radio v-model="radio3" label="备选项3" border>备选项 3</y-radio>

::: details 显示代码

```html
<template>
  <y-radio v-model="radio3" label="备选项1" border>备选项1</y-radio>
  <y-radio v-model="radio3" label="备选项2" border>备选项2</y-radio>
  <y-radio v-model="radio3" label="备选项3" border>备选项3</y-radio>
</template>

<script setup>
  import { ref } from 'vue';
  const radio3 = ref('备选项3');
</script>
```

:::

## 配置大小

`size` 属性可以大小，但是必须是带有 `border` 属性的前提才可以正常工作

<y-radio v-model="radio4" label="备选项1" border size="large">备选项 1</y-radio>
<y-radio v-model="radio4" label="备选项2" border size="large"> 备选项 2</y-radio>
<y-radio v-model="radio4" label="备选项3" border size="large"> 备选项 3</y-radio>
<br />
<br />
<y-radio v-model="radio4" border size="medium" :options="radioSizeOptions" />
<br />
<br />
<y-radio v-model="radio4" border size="small" :options="radioSizeOptions" />
<br />
<br />
<y-radio v-model="radio4" border size="mini" :options="radioSizeOptions" />

::: details 显示代码

```html
<template>
  <!-- 可以通过标签定义radio -->
  <y-radio v-model="radio4" label="备选项1" border size="large">备选项 1</y-radio>
  <y-radio v-model="radio4" label="备选项2" border size="large"> 备选项 2</y-radio>
  <y-radio v-model="radio4" label="备选项3" border size="large"> 备选项 3</y-radio>
  <br />
  <!-- 可以通过options定义radio -->
  <y-radio v-model="radio4" border size="medium" :options="radioSizeOptions" />
  <br />
  <y-radio v-model="radio4" border size="small" :options="radioSizeOptions" />
  <br />
  <y-radio v-model="radio4" border size="mini" :options="radioSizeOptions" />
</template>

<script setup>
  import { ref } from 'vue';
  const radio4 = ref('备选项1');
  const radioSizeOptions = [
    { label: '备选项1', value: '备选项1' },
    { label: '备选项2', value: '备选项2' },
    { label: '备选项3', value: '备选项3' },
  ];
</script>
```

:::

## API

| 参数     | 说明           | 类型         | 可选值                                  | 默认值  |
| -------- | -------------- | ------------ | --------------------------------------- | ------- |
| v-mod    | 绑定的值       | string       | ——                                      | ——      |
| label    | Radio 的 value | string       | ——                                      | ——      |
| name     | 原生 name 属性 | string       | ——                                      | ——      |
| disabled | 是否禁用       | boolean      | ——                                      | false   |
| Boole    | 是否显示边框   | boolean      | ——                                      | false   |
| size     | 大小尺寸       | string       | ['large' , 'medium' , 'small' , 'mini'] | 'large' |
| options  | 按钮描述       | OptionsArray | ——                                      | ——      |

```ts
type optionsItemValue = string | number;

interface OptionsArray {
  [index: number]: {
    label: string;
    value: optionsItemValue;
    disabled?: boolean;
  };
}
```

## Events

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| change   | 改变 Radio 时触发 | 选中的值 |

<script setup>
  import { ref } from 'vue'

  const radioOptions = [
    { label: '绿色', value: 'green' },
    { label: '蓝色', value: 'blue', disabled: true },
    { label: '黄色', value: 'yellow' },
    { label: '红色', value: 'red' },
  ];

  const radioSizeOptions = [
    { label: '备选项1', value: '备选项1' },
    { label: '备选项2', value: '备选项2' },
    { label: '备选项3', value: '备选项3' },
  ];

  const radioOpts = ref('green')
  const radio1 = ref('备选项1')
  const radio2 = ref('备选项2')
  const radio3 = ref('备选项3')
  const radio4 = ref('备选项1')
</script>
