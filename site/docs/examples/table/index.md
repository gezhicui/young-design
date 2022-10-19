# Table 表格

## 基本使用

`data` 属性可以配置表格的数据，接收一个数组

`columns` 属性可以配置表格的标题和键值，它接收一个数组，里面是对象，对象的 `title` 配置标题，`key` 配置键值，名字是必须的，否则将不能正常工作！详情参考文档

<div class="tableContent">
<y-table :data="tableData" :columns="columns" />
</div>

::: details 显示代码

```html
<template>
  <y-table :data="tableData" :columns="columns" />
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

## 配置行高

`trHeight` 属性可以表格行高

<div class="tableContent">
<y-table :data="tableData" :columns="columns" trHeight="100px" />
</div>

::: details 显示代码

```html
<template>
  <y-table :data="tableData" :columns="columns" trHeight="100px" />
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

## 文字放置方向

`align` 属性可以表格文字居中还是居两侧

<div class="tableContent">
<y-table :data="tableData" :columns="columns" align="center" />
</div>

::: details 显示代码

```html
<template>
  <y-table :data="tableData" :columns="columns" align="center" />
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

## 斑马纹和边框

`zebra` 属性可以配置斑马纹

`border` 属性可以配置边框

<div class="tableContent">
<y-table :data="tableData" :columns="columns" align="center" border zebra />
</div>

::: details 显示代码

```html
<template>
  <y-table :data="tableData" :columns="columns" align="center" border zebra />
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

## 自定义宽高

`width` 属性可以配置表格宽度

`height` 属性可以配置表格高度

<div class="tableContent">
<y-table :data="tableData" :columns="columns" align="center" width="500px" height="200px"/>
</div>

::: details 显示代码

```html
<template>
  <y-table
    :data="tableData"
    :columns="columns"
    align="center"
    width="500px"
    height="200px"
  />
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

## 带有序号

`num` 属性可以配置带有序号的表格

<div class="tableContent">
<y-table :data="tableData" :columns="columns" align="center" num />
</div>

::: details 显示代码

```html
<template>
  <y-table :data="tableData" :columns="columns" align="center" num />
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

## 重点行标注

`important` 属性可以配置重点行着重标注，它接收一个数组，里面包含重点行的行号

<div class="tableContent">
<y-table :data="tableData" :columns="columns" align="center"  num :important="[2, 4]"/>
</div>

::: details 显示代码

```html
<template>
  <y-table
    :data="tableData"
    :columns="columns"
    align="center"
    num
    :important="[2, 4]"
  />
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

## 单独配置列宽度

每一列的宽度也是可以单独配置的，可以在 `columns` 数组对象中添加 `width` 键值，来配置单独的列宽，比如下面将第一列 s 设置为`100px`,第二列设置宽度为 `200px`

<div class="tableContent">
<y-table :data="tableData" :columns="columns2" align="center" />
</div>

::: details 显示代码

```html
<template>
  <y-table :data="tableData" :columns="columns2" align="center" />
</template>

<script setup>
  const columns2 = [
    {
      title: '日期',
      key: 'date',
      width: '100px',
    },
    {
      title: '姓名',
      key: 'name',
      width: '100px',
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

| 参数           | 说明             | 类型    | 可选值                | 默认值  |
| -------------- | ---------------- | ------- | --------------------- | ------- |
| data           | 表单的内容数据   | array   | ——                    | []      |
| columns        | 表头和键值       | array   | ——                    | []      |
| trHeight       | 行高             | string  | ——                    | 40px    |
| align          | 内容排向         | string  | left / right / center | left    |
| zebra          | 是否显示斑马纹   | boolean | ——                    | false   |
| border         | 是否显示边框     | boolean | ——                    | false   |
| width          | 表格宽度         | string  | ——                    | 100%    |
| height         | 表格高度         | string  | ——                    | auto    |
| num            | 是否显示序号     | boolean | ——                    | false   |
| important      | 重点行标注       | array   | ——                    | []      |
| importantColor | 重点行标注背景色 | string  | ——                    | #fdf5e6 |

<script setup>
  const columns = [
    {
      title: '日期',
      key: 'date'
    },
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '地址',
      key: 'address'
    }
  ]
  const columns2 = [
    {
      title: '日期',
      key: 'date',
      width: '100px'
    },
    {
      title: '姓名',
      key: 'name',
      width: '200px'
    },
    {
      title: '地址',
      key: 'address'
    }
  ]
  const tableData = [
    {
      date: '2021-11-02',
      name: '张三',
      address: '浙江省杭州市上城区 231 号'
    },
    {
      date: '2021-12-04',
      name: '李四',
      address: '浙江省杭州市西湖区 12 号'
    },
    {
      date: '2021-10-01',
      name: '王英',
      address: '浙江省杭州市临平区 2 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    }
  ]
</script>

<style  scope>
/* 还原vitepress默认样式 */
.vp-doc .tableContent table {
  display: table;
  border-collapse: collapse;
  margin: unset;
  overflow-x: unset;
}

.vp-doc .tableContent tr {
  border-top: unset;
  transition: unset;
}

.vp-doc .tableContent tr:nth-child(2n) {
  background-color: unset;
}

.vp-doc .tableContent th,
.vp-doc .tableContent td {
  border: unset;
  padding:unset;
}

.vp-doc .tableContent th {
  font-size: unset;
  font-weight: unset;
  background-color: unset;
}

.dark .vp-doc .tableContent th {
  background-color: unset;
}



</style>
