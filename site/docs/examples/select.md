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
  const changeSelect = item => {
    console.log(selectVal.value);
    console.log(item);
  };
</script>
```

:::

## 禁用

禁用可以分为输入框禁用和下拉选项禁用

### 输入框禁用

<br>
<y-select :options="options1" v-model="selectVal2" @change="changeSelect" disabled placeholder="请选择内容" />

### 下拉选项禁用

<br>
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
  const changeSelect = item => {
    console.log(item);
  };
</script>
```

:::

## 可过滤搜索

通过设置 `searchable` 属性来开启过滤搜索

<y-select searchable :options="options1" v-model="selectVal4" @change="changeSelect" />

::: details 显示代码

```html
<template>
  <y-select multiple :options="options1" v-model="selectVal4" @change="changeSelect" />
</template>

<script setup>
  import { reactive, ref } from 'vue';
  const state = reactive({
    options1: [
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
  const selectVal4 = ref([]);
  const changeSelect = item => {
    console.log(item);
  };
</script>
```

:::

## 多选

通过设置 `multiple` 属性来开启多选

<y-select multiple :options="options1" v-model="selectVal5" @change="changeSelect" />

::: details 显示代码

```html
<template>
  <y-select multiple :options="options1" v-model="selectVal5" @change="changeSelect" />
</template>

<script setup>
  import { reactive, ref } from 'vue';
  const state = reactive({
    options1: [
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
  const selectVal5 = ref([]);
  const changeSelect = item => {
    console.log(item);
  };
</script>
```

:::

## 自定义 label 和 value

可以通过传入 `fieldLabel`和`fieldValue`属性实现自定义 label 和 value

<y-select :options="options3" fieldLabel="name" fieldValue="id" v-model="selectVal6" @change="changeSelect" />

::: details 显示代码

```html
<template>
  <y-select
    :options="options3"
    fieldLabel="name"
    fieldValue="id"
    v-model="selectVal6"
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
  const selectVal6 = ref('');
  const changeSelect = item => {
    console.log(item);
  };
</script>
```

:::

## API

| 参数        | 说明                 | 类型    | 可选值 | 默认值   |
| ----------- | -------------------- | ------- | ------ | -------- |
| v-model     | 绑定的值             | string  | ——     | ——       |
| width       | 输入框长度           | string  | ——     | ——       |
| options     | 下拉选项             | Array   | ——     | ——       |
| disabled    | 是否禁用             | boolean | ——     | false    |
| fieldLabel  | 自定义标签           | string  | ——     | 'label'  |
| fieldValue  | 自定义值             | string  | ——     | 'value'  |
| placeholder | 占位文字             | string  | ——     | '请选择' |
| searchable  | 是否可搜索(支持单选) | boolean | ——     | false    |
| searchable  | 是否可多选           | boolean | ——     | false    |

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
const selectVal5 = ref([]);
const selectVal6 = ref("")
const changeSelect = (item) => {
  console.log(item);
}
</script>

<style scope>

 .y-options-item{
   margin-top:0 !important;
 }

input:disabled {
  background-color:rgba(239, 239, 239, 0.3)
}
  </style>
