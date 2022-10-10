<template>
  <div class="y-select" v-clickOutSide>
    <input
      type="text"
      readonly
      :class="{ 'y-disabled': disabled }"
      :value="inputlabel"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <Transition name="slide-fade">
      <div class="y-options-box" v-if="positionShow">
        <li
          v-for="(item, index) in options"
          :key="item[fieldValue]"
          @click="change(item, index)"
          :class="[
            {
              'y-disabled': item.disabled,
              'y-options-item-active': item[fieldValue] === modelValue,
            },
            'y-options-item',
          ]"
        >
          {{ item[fieldLabel] }}
        </li>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "tSelect",
};
</script>

<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  disabled: Boolean,
  fieldLabel: {
    type: String,
    default: "label",
  },
  fieldValue: {
    type: String,
    default: "value",
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  modelValue: String,
});

const emit = defineEmits(["change", "update:modelValue"]);

const inputlabel = ref("");
const positionShow = ref(false);

const vClickOutSide = {
  beforeMount(el) {
    const handler = (e) => {
      if (!props.disabled) {
        if (
          el.contains(e.target) &&
          e.target.className.indexOf("y-options-item") === -1
        ) {
          positionShow.value = true;
        } else {
          if (e.target.className.indexOf("y-disabled") === -1) {
            positionShow.value = false;
          }
        }
      }
    };
    document.addEventListener("click", handler);
  },
};

watchEffect(() => {
  const selectItem = props.options.find(
    (item) => item[props.fieldValue] === props.modelValue
  );
  console.log(selectItem);
  if (selectItem) {
    inputlabel.value = selectItem[props.fieldLabel];
  }
});

const change = (item, index) => {
  if (!item.disabled) {
    positionShow.value = false;
    emit("update:modelValue", item[props.fieldValue]);
    emit("change", item);
  }
};
</script>

<style lang="less" scoped>
@border: #d4d3d3;
.y-select {
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
  .y-options-box {
    z-index: 99;
    background: #fff;
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
  .y-disabled {
    cursor: no-drop !important;
    color: #808080;
    background: #f0f0f0;
  }
  .y-options-item-active {
    color: #409eff;
  }
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
