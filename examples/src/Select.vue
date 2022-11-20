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
const selVal = ref([]);
const state = reactive({
  selOptions: [
    { label: '北京', value: '131' },
    { label: '天津', value: '332' },
    { label: '上海', value: '289', disabled: true },
    { label: '重庆', value: '132' },
    { label: '深圳', value: '340' },
  ],
});
const selchange = val => {
  console.log(val);
};
const { selOptions } = state;
</script>
