<template>
  <y-table align="center" :data="tableData" :columns="columns">
    <template #address="record">
      {{ record.rowData.name + '住在' + record.rowData.address }}
      <y-button
        @click="handleClickButtonItem(record)"
        size="mini"
        type="primary"
        >点我log</y-button
      >
    </template>
  </y-table>
</template>

<script lang="ts" setup>
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
    slots: 'address',
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
const handleClickButtonItem = (item: any) => {
  console.log(item);
};
</script>
