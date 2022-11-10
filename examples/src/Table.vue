<template>
  <y-table
    :data="tableData"
    :columns="columns"
    :rowSelect="true"
    v-model:selectItems="selectItems"
  />
  <y-button @click="handleShowRowSelect">查看选中结果</y-button>
</template>
<script setup>
import { ref } from 'vue';
const selectItems = ref([]);
const handleShowRowSelect = () => {
  console.log(selectItems.value);
};
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
    id: '1',
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号',
  },
  {
    id: '2',
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号',
  },
  {
    id: '3',
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号',
  },
  {
    id: '4',
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号',
  },
];
</script>
