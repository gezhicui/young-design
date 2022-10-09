<template>
  <Select :options="options" disabled></Select>
</template>

<script lang="ts" setup>
import Select from "./src/Select.vue";
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "中国",
      value: "china",
    },
    {
      label: "日本",
      value: "japan",
    },
    {
      label: "美国",
      value: "usa",
    },
    {
      label: "俄罗斯",
      value: "russia",
    },
    {
      label: "韩国",
      value: "korea",
    },
  ],
});
const { options } = state;
</script>

<style scoped>
</style>
