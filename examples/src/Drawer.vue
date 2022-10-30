<template>
  <y-drawer
    :visible="normalViaible"
    @cancel="handleClose"
    @confirm="handleClose"
    title="这是标题"
    size="50%"
    :direction="direction"
  >
    <template v-slot:headerContent>
      <div>
        我是 header：啊实打实大所
        <y-button @click="handleClose">点我关闭</y-button>
      </div>
    </template>
    <template v-slot:footerContent>
      <div>我是 footer</div>
    </template>
    这是内容这是内容这是内容这是内容这是内容
  </y-drawer>

  <y-radio v-model="direction" label="right">从右面弹出</y-radio>
  <y-radio v-model="direction" label="left">从左面弹出</y-radio>
  <y-radio v-model="direction" label="bottom">从下面弹出</y-radio>
  <y-radio v-model="direction" label="top">从上面弹出</y-radio>
  <y-button @click="openDialog">点击</y-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const direction = ref('right');
const normalViaible = ref(false);
const openDialog = () => {
  normalViaible.value = true;
};

const handleClose = () => {
  normalViaible.value = false;
};
</script>
