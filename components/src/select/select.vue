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
    <Transition name="options-fade">
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
  name: 'y-select',
};
</script>

<script setup>
import { ref, watchEffect } from 'vue';
import './style/index.less';
import { selectProps } from './types';

const props = defineProps(selectProps);
const inputlabel = ref('');
const positionShow = ref(false);

const emit = defineEmits(['change', 'update:modelValue']);

const vClickOutSide = {
  beforeMount(el) {
    const handler = (e) => {
      if (!props.disabled) {
        if (
          el.contains(e.target) &&
          e.target.className.indexOf('y-options-item') === -1
        ) {
          positionShow.value = true;
        } else {
          if (e.target.className.indexOf('y-disabled') === -1) {
            positionShow.value = false;
          }
        }
      }
    };
    document.addEventListener('click', handler);
  },
};

watchEffect(() => {
  const selectItem = props.options.find(
    (item) => item[props.fieldValue] === props.modelValue
  );
  if (selectItem) {
    inputlabel.value = selectItem[props.fieldLabel];
  }
});

const change = (item, index) => {
  if (!item.disabled) {
    positionShow.value = false;
    emit('update:modelValue', item[props.fieldValue]);
    emit('change', item);
  }
};
</script>
