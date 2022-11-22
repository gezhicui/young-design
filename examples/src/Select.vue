<template>
  <iframe
    class="myframe"
    src="http://localhost:8000/#/CSAccountsReceivableBoard"
    :style="{ height: '90vh', width: '100vw' }"
    frameborder="0"
  ></iframe>
  <div class="select">
    <y-select
      searchable
      v-model="selVal"
      placeholder="请选择"
      :options="selOptions"
      @change="selchange"
    ></y-select>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const selVal = ref();
const state = reactive({
  selOptions: [
    { label: '北京', value: '1' },
    { label: '天津', value: '2' },
    { label: '上海', value: '3', disabled: true },
    { label: '重庆', value: '4' },
    // { label: '深圳', value: '5' },
    // { label: '武汉', value: '7' },
    // { label: '长沙', value: '57' },
    // { label: '杭州', value: '8' },
  ],
});
const selchange = val => {
  console.log('selchange', val);
};
const { selOptions } = state;
</script>

<style>
.myframe {
  position: relative;
  margin-top: 20px;
}
.select {
  position: absolute !important;
  top: 102px;
  left: 216px;
}
</style>
