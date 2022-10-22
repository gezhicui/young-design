<template>
  <y-button @click="handlechick">点我change</y-button>
  <y-table
    align="center"
    :data="tableData"
    :columns="columns"
    :zebra="zebra"
    height="400px"
    v-model:selectItems="selectItems"
  >
    <!-- <template #address="record">
      {{ record.rowData.name + '住在' + record.rowData.address }}
      <y-button
        @click="handleClickButtonItem(record)"
        size="mini"
        type="primary"
        >点我log</y-button
      >
    </template> -->
  </y-table>
  <div class="inpit">
    <input :value="inputValue" />
  </div>

  <!-- <MyTable
    :columns="columns2"
    :data="data"
    border
    zebra
    hover
    v-model:selectItems="selectItems"
    @change="itemsChange"
  ></MyTable> -->
</template>

<script lang="ts" setup>
import MyTable from './TableComponent.vue';
import { ref } from 'vue';
const inputValue = '123123sadasdas';
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
    name: '王五',
    address: '浙江省杭州市临平区 2 号',
  },
  {
    id: '4',
    date: '2021-11-03',
    name: '赵六',
    address: '浙江省杭州市拱墅区 199 号',
  },
  {
    id: '5',
    date: '2021-11-03',
    name: '田七',
    address: '浙江省杭州市拱墅区 199 号',
  },
  {
    id: '6',
    date: '2021-11-03',
    name: '德萨吧',
    address: '浙江省杭州市拱墅区 199 号',
  },
  {
    id: '7',
    date: '2021-11-03',
    name: '魏九',
    address: '浙江省杭州市拱墅区 199 号',
  },
  {
    id: '8',
    date: '2021-11-03',
    name: '高十',
    address: '浙江省杭州市拱墅区 199 号',
  },
  {
    id: '9',
    date: '2021-11-03',
    name: '钱十一',
    address: '浙江省杭州市拱墅区 199 号',
  },
];
const selectItems = ref([]);
const zebra = ref(false);
const handlechick = () => {
  zebra.value = !zebra.value;
  console.log(selectItems.value);
};
</script>
