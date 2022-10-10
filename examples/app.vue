<template>
  <Select
    :options="options"
    fieldLabel="name"
    fieldValue="id"
    v-model="SleVal"
    @change="changeSelect"
  ></Select>
</template>

<script lang="ts" setup>
import Select from "./src/Select.vue";
import { reactive, ref } from "vue";
const state = reactive({
  options: [
    {
      name: "中国",
      id: "china",
    },
    {
      name: "日本",
      id: "japan",
    },
    {
      name: "美国",
      id: "usa",
    },
    {
      name: "俄罗斯",
      id: "russia",
      disabled: true,
    },
    {
      name: "韩国",
      id: "korea",
    },
  ],
});
const { options } = state;
const SleVal = ref("");
const changeSelect = (item) => {
  console.log(SleVal.value);

  console.log(item);
};
</script>

<style scoped>
</style>
