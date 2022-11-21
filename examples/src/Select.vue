<template>
  <y-select
    multiple
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
    @change="selchange"
  ></y-select>
</template>

<script setup>
import { reactive, ref } from 'vue';
const selVal = ref(['1', '2']);
const state = reactive({
  selOptions: [
    { label: '北京', value: '1' },
    { label: '天津', value: '2' },
    { label: '上海', value: '3', disabled: true },
    { label: '重庆', value: '4' },
    { label: '深圳', value: '5' },
  ],
});
const selchange = val => {
  console.log('selchange', val);
};
const { selOptions } = state;
</script>
