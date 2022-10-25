# Select 选择器

## 基本使用

选择器的基本用法

可以传入一个`options`数组来实现下拉项的渲染

<y-select :options="options1" v-model="selectVal1" @change="changeSelect" />

::: details 显示代码

```html
<template>
  <y-select :options="options" v-model="selectVal" @change="changeSelect" />
</template>

<script setup>
  import { reactive, ref } from 'vue';
  const state = reactive({
    options: [
      {
        label: '中国',
        value: 'china',
      },
      {
        label: '日本',
        value: 'japan',
      },
      {
        label: '美国',
        value: 'usa',
      },
      {
        label: '俄罗斯',
        value: 'russia',
      },
      {
        label: '韩国',
        value: 'korea',
      },
    ],
  });
  const { options } = state;
  const selectVal = ref('china');
  const changeSelect = (item) => {
    console.log(selectVal.value);
    console.log(item);
  };
</script>
```

:::

## 禁用

禁用可以分为输入框禁用和下拉项禁用

<y-select :options="options1" v-model="selectVal2" @change="changeSelect" disabled placeholder="请选择内容" />
&emsp;
<y-select :options="options2" v-model="selectVal3" @change="changeSelect" />

::: details 显示代码

```html
<template>
  <y-select
    :options="options1"
    v-model="selectVal2"
    @change="changeSelect"
    disabled
    placeholder="请选择内容"
  />
  <y-select :options="options2" v-model="selectVal3" @change="changeSelect" />
</template>

<script setup>
  import { reactive, ref } from 'vue';
  const state = reactive({
    options1: [
      {
        label: '中国',
        value: 'china',
      },
    ],
    options2: [
      {
        label: '中国',
        value: 'china',
      },
      {
        label: '日本',
        value: 'japan',
        disabled: true,
      },
      {
        label: '美国',
        value: 'usa',
      },
      {
        label: '俄罗斯',
        value: 'russia',
        disabled: true,
      },
      {
        label: '韩国',
        value: 'korea',
      },
    ],
  });
  const { options } = state;
  const selectVal2 = ref('');
  const selectVal3 = ref('');
  const changeSelect = (item) => {
    console.log(item);
  };
</script>
```

:::

## 自定义 label 和 value

可以通过传入 `fieldLabel`和`fieldValue`属性实现自定义 label 和 value

<y-select :options="options3" fieldLabel="name" fieldValue="id" v-model="selectVal4" @change="changeSelect" />

::: details 显示代码

```html
<template>
  <y-select
    :options="options3"
    fieldLabel="name"
    fieldValue="id"
    v-model="selectVal4"
    @change="changeSelect"
  />
</template>

<script setup>
  import { reactive, ref } from 'vue';
  const state = reactive({
    options3: [
      {
        name: '中国',
        id: 'china',
      },
      {
        name: '日本',
        id: 'japan',
      },
      {
        name: '美国',
        id: 'usa',
      },
      {
        name: '俄罗斯',
        id: 'russia',
      },
      {
        name: '韩国',
        id: 'korea',
      },
    ],
  });
  const { options } = state;
  const selectVal4 = ref('');
  const changeSelect = (item) => {
    console.log(item);
  };
</script>
```

:::

## API

| 参数        | 说明       | 类型    | 可选值 | 默认值   |
| ----------- | ---------- | ------- | ------ | -------- |
| v-model     | 绑定的值   | string  | ——     | ——       |
| options     | 下拉选项   | Array   | ——     | ——       |
| disabled    | 是否禁用   | boolean | ——     | false    |
| fieldLabel  | 自定义标签 | string  | ——     | 'label'  |
| fieldValue  | 自定义值   | string  | ——     | 'value'  |
| placeholder | 占位文字   | string  | ——     | '请选择' |

## Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | select 状态发生变化时的回调函数 | 新选项的值 |

<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  options1: [
    {
      label: "中国",
      value: "china",
    },
    {
      label: "日本",
      value: "japan",
    },
    {
      label: "美国",
      value: "usa",
    },
    {
      label: "俄罗斯",
      value: "russia",
    },
    {
      label: "韩国",
      value: "korea",
    },
  ],
  options2: [
    {
      label: "中国",
      value: "china",
    },
    {
      label: "日本",
      value: "japan",
      disabled:true
    },
    {
      label: "美国",
      value: "usa",
    },
    {
      label: "俄罗斯",
      value: "russia",
        disabled:true
    },
    {
      label: "韩国",
      value: "korea",
    },
  ],
  options3: [
    {
      name: "中国",
      id: "china",
    },
    {
      name: "日本",
      id: "japan",
    },
    {
      name: "美国",
      id: "usa",
    },
    {
      name: "俄罗斯",
      id: "russia",
    },
    {
      name: "韩国",
      id: "korea",
    },
  ],
});
const { options1,options2,options3 } = state;
const selectVal1 = ref("china");
const selectVal2 = ref("");
const selectVal3 = ref("");
const selectVal4 = ref("");
const changeSelect = (item) => {
  console.log(item);
}
</script>

<style scope>

 .y-options-item{
   margin-top:0 !important;
 }
  </style>
