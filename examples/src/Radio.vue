<template>
  <y-radio v-model="radio1" @change="changeradio" label="aaa">备选项 1</y-radio>
  <y-radio v-model="radio1" @change="changeradio" label="bbb">备选项 2</y-radio>
  <y-radio v-model="radio1" @change="changeradio" label="ccc">备选项 3</y-radio>
  <div></div>
  <y-radio v-model="radionew" @change="changeradio2" :options="radioOptions" />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const changeradio = (e) => {
  console.log(e);
};
const changeradio2 = (e) => {
  console.log('i am changeradio2', e);
};
const radio1 = ref('aaa');
const radio2 = ref('备选项2');
const radio3 = ref('备选项3');
const radio4 = ref('备选项1');

const radionew = ref('zhongguo');

const radioOptions = [
  { label: '中国', value: 'zhongguo' },
  { label: '英国', value: 'yingguo', disabled: true },
  { label: '德国', value: 'deguo' },
  { label: '法国', value: 'faguo' },
];
</script>
