<template>
  <div class="t-select" v-clickOutSide>
    <input
      type="text"
      readonly
      :class="{ 't-disabled': disabled }"
      :value="selectVal"
      placeholder="请选择"
      :disabled="disabled"
    />
    <div class="t-position-box" v-if="positionShow">
      <li
        v-for="item in options"
        :key="item.value"
        @click="change(item)"
        :class="{ 't-disabled': item.disabled }"
      >
        {{ item.label }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "tSelect",
};
</script>

<script setup>
import { ref } from "vue";
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  disabled: Boolean,
});
const selectVal = ref("");
const positionShow = ref(false);
const vClickOutSide = {
  beforeMount(el) {
    const handler = (e) => {
      if (!props.disabled) {
        if (el.contains(e.target)) {
          positionShow.value = true;
        } else {
          positionShow.value = false;
        }
      }
    };
    document.addEventListener("click", handler);
  },
};

const change = (item) => {
  if (!item.disabled) {
    selectVal.value = item.label;
    positionShow.value = false;
  }
};
</script>

<style lang="less" scoped>
@border: #d4d3d3;
.t-select {
  min-width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid @border;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .t-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid @border;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background: #f0f0f0;
      }
    }
  }
  .t-disabled {
    cursor: no-drop !important;
    color: #808080;
    background: #f0f0f0;
  }
}
</style>
