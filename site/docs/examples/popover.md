# Popover 弹出框

## 基本使用

<y-popover  placement="top" title="我是标题" content="我是个弹出框内容">
  <template #reference>
    <y-button type="primary" >hover激活</y-button>
  </template>
</y-popover>

::: details 显示代码

```vue
<template>
  <y-popover placement="top" content="我是个弹出框内容">
    <template #reference>
      <y-button type="primary">hover激活</y-button>
    </template>
  </y-popover>
</template>
```

:::

## 不同的激活方式

在这里提供几种不同方向的触发方式

<y-popover class="space" trigger="hover"  content="hover激活">
  <template #reference>
    <y-button type="primary" >hover激活</y-button>
  </template>
</y-popover>
<y-popover class="space" trigger="click"  content="click激活">
  <template #reference>
    <y-button type="primary"  >click激活</y-button>
  </template> 
</y-popover>
<y-popover class="space" trigger="focus" content="focus激活">
  <template #reference>
    <y-button type="primary" >focus激活</y-button>
  </template>
</y-popover>
<y-popover
  class="space"
  trigger="manual"
  v-model="visible"
  content="手动激活"
>
  <template #reference>
    <y-button type="primary"  @click="handler">手动激活</y-button>
  </template>
</y-popover>

::: details 显示代码

```vue
<template>
  <y-popover class="space" trigger="hover" content="hover激活">
    <template #reference>
      <y-button type="primary">hover激活</y-button>
    </template>
  </y-popover>
  <y-popover class="space" trigger="click" content="click激活">
    <template #reference>
      <y-button type="primary">click激活</y-button>
    </template>
  </y-popover>
  <y-popover class="space" trigger="focus" content="focus激活">
    <template #reference>
      <y-button type="primary">focus激活</y-button>
    </template>
  </y-popover>
  <y-popover class="space" trigger="manual" v-model="visible" content="手动激活">
    <template #reference>
      <y-button type="primary" @click="handler">手动激活</y-button>
    </template>
  </y-popover>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
function handler() {
  visible.value = !visible.value;
}
</script>

<style scoped>
.space {
  margin-left: 16px;
}
</style>
```

:::

## 不同位置

通过`placement`属性传入不同位置，在不同位置展示 popover,可用的位置有

- `top、top-start、top-end`
- `left、left-start、left-end`
- `right、right-start、right-end`
- `bottom、bottom-start、bottom-end`

<div class="popoverPosition">
<y-popover v-for="item in type" :class='item' :placement="item"  trigger="hover"  content="hover激活">
  <template #reference>
   <y-button type="primary" >{{item}}</y-button>
  </template>
</y-popover>
</div>

## 自定义内容

在基础示例中，我们可以通过`content`传入文本内容，也可以通过默认插槽来传入自定义节点内容,`width`可控制弹出框的宽度

<y-popover  placement="top" title="我是标题" width="400">
  <y-table :data="tableData" :columns="columns" />
  <template #reference>
    <y-button type="primary" >hover激活</y-button>
  </template>
</y-popover>

::: details 显示代码

```vue
<template>
  <y-popover placement="top" title="我是标题" width="400">
    <y-table :data="tableData" :columns="columns" />
    <template #reference>
      <y-button type="primary">hover激活</y-button>
    </template>
  </y-popover>
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date',
  },
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '地址',
    key: 'address',
  },
];
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号',
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号',
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号',
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号',
  },
];
</script>
```

:::

## API

| 参数        | 说明                                                    | 类型          | 可选值                              | 默认值  |
| ----------- | ------------------------------------------------------- | ------------- | ----------------------------------- | ------- |
| placement   | 弹出框展示出的位置                                      | string        | <a href="#不同位置">不同位置</a>    | 'top'   |
| width       | 弹出框内容宽度                                          | string/number | ——                                  | ——      |
| v-model     | 手动控制 弹出框展示时的显隐                             | boolean       | ——                                  | ——      |
| content     | 弹出框展示的文本内容                                    | string        | ——                                  | ——      |
| popperClass | 自定义类，给弹出框添加自定义样式                        | string        | ——                                  | ——      |
| title       | 弹出框内容标题                                          | string        | ——                                  | ——      |
| disabled    | 禁用 弹出框即不展示                                     | boolean       | ——                                  | false   |
| trigger     | 弹出框触发条件                                          | string        | ['click','hover','focus' ,'manual'] | 'hover' |
| delay       | 弹出框在触发关闭指令后多少毫秒关闭,默认为 0，即立即关闭 | number        | ——                                  | 0       |

## Slots

| 插槽名    | 描述                   |
| --------- | ---------------------- |
| default   | 默认插槽，弹出框的内容 |
| reference | 通过该节点触发弹出框   |

## Events

| 事件名称   | 说明                   | 回调参数 |
| ---------- | ---------------------- | -------- |
| afterEnter | 显示动画播放完毕后触发 | ——       |
| afterLeave | 隐藏动画播放完毕后触发 | ——       |

<script setup>
import { ref} from "vue";

const type = ['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end']
  const columns = [
    {
      title: '日期',
      key: 'date',
    },
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '地址',
      key: 'address',
    },
  ];
  const tableData = [
    {
      date: '2021-11-02',
      name: '张三',
      address: '浙江省杭州市上城区 231 号',
    },
    {
      date: '2021-12-04',
      name: '李四',
      address: '浙江省杭州市西湖区 12 号',
    },
    {
      date: '2021-10-01',
      name: '王英',
      address: '浙江省杭州市临平区 2 号',
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号',
    },
  ];
const visible = ref(false);
function handler() {
  visible.value = !visible.value;
}
</script>

<style   scoped>
.space {
  margin-left: 16px;
}
.popoverPosition{
  position:relative;
  width:100%;
  height:300px;
}
.popoverPosition .y-button{
  width:100px;
  display: flex;
  justify-content: center;
}
.top-start{
  position:absolute;
  top:20px;
  left:100px
}
.top{
  position:absolute;
  top:20px;
  left:220px
}

.top-end{
  position:absolute;
  top:20px;
  left:340px
}
.left-start{
  position:absolute;
  top:80px;
  left:50px
}
.left{
  position:absolute;
  top:140px;
  left:50px
}

.left-end{
  position:absolute;
  top:200px;
  left:50px
}
.right-start{
  position:absolute;
  top:80px;
  left:400px
}
.right{
  position:absolute;
  top:140px;
  left:400px
}
.right-end{
  position:absolute;
  top:200px;
  left:400px
}
.bottom-start{
  position:absolute;
  top:260px;
  left:100px
}
.bottom{
  position:absolute;
  top:260px;
  left:220px
}
.bottom-end{
  position:absolute;
  top:260px;
 left:340px
}
</style>
