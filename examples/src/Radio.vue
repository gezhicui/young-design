<template>
  <y-radio v-model="radio1" label="备选项1">备选项 1</y-radio>
  <y-radio v-model="radio1" label="备选项2">备选项 2</y-radio>
  <y-radio v-model="radio1" label="备选项3">备选项 3</y-radio>
<div></div>
  <y-radio v-model="radio3" label="备选项1" border>备选项 1</y-radio>
  <y-radio v-model="radio3" label="备选项2" border>备选项 2</y-radio>
  <y-radio v-model="radio3" label="备选项3" border>备选项 3</y-radio>
<div></div>
  <y-radio v-model="radio4" label="备选项1" border size="large">
    备选项1
  </y-radio>
  <y-radio v-model="radio4" label="备选项2" border size="large">
    备选项2
  </y-radio>
  <y-radio v-model="radio4" label="备选项3" border size="large">
    备选项3
  </y-radio>
<div></div>
  <y-radio v-model="radio4" label="备选项1" border size="medium">
    备选项1
  </y-radio>
  <y-radio v-model="radio4" label="备选项2" border size="medium">
    备选项2
  </y-radio>
  <y-radio v-model="radio4" label="备选项3" border size="medium">
    备选项3
  </y-radio>
<div></div>
  <y-radio v-model="radio4" label="备选项1" border size="small">
    备选项1
  </y-radio>
  <y-radio v-model="radio4" label="备选项2" border size="small">
    备选项2
  </y-radio>
  <y-radio v-model="radio4" label="备选项3" border size="small">
    备选项3
  </y-radio>
<div></div>
  <y-radio v-model="radio4" label="备选项1" border size="mini">
    备选项1
  </y-radio>
  <y-radio v-model="radio4" label="备选项2" border size="mini">
    备选项2
  </y-radio>
  <y-radio v-model="radio4" label="备选项3" border size="mini">
    备选项3
  </y-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio1 = ref("备选项1");
const radio2 = ref("备选项2");
const radio3 = ref("备选项3");
const radio4 = ref("备选项1");
</script>
