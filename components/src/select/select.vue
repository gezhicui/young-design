<template>
  <div :class="selectClass" :style="{ width: sizeChange(width) }" v-click-outside>
    <div :class="selectInputClass">
      <input
        type="text"
        :readonly="!searchable"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
        :value="selectedLabel"
      />
      <div class="select-icon">
        <Icon
          name="caret-down"
          class="rorateIcon"
          :style="{ transform: rotate }"
          :icon-style="{ width: '13px', height: '13px' }"
        />
      </div>
    </div>
    <transition name="slide-fade">
      <div class="y-select-option" v-if="isShow">
        <div class="y-select-option-find">
          <ul>
            <li
              class="y-select-option-li"
              v-for="(item, index) in optionsData"
              :key="index"
              @click="selChange(item, index)"
              :class="{
                'y-select-active':
                  activeIndex == index || selectedLabel == item[fieldLabel] || item.selected,
                'y-select-disabled': item.disabled,
              }"
            >
              {{ item[fieldLabel] }}
              <Icon
                v-if="multiple && item.selected"
                name="check"
                :icon-style="{ width: '13px', height: '13px' }"
              />
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'y-select',
};
</script>
<script lang="ts" setup>
import { ref, computed, reactive } from 'vue';
import Icon from '../icon/icon.vue';
import './style/index.less';
import { sizeChange } from '../utils';
import { selectProps } from './types';

const emit = defineEmits(['update:modelValue', 'change']);

const props = defineProps(selectProps);

//初始化处理
props.options.forEach((item, index) => {
  if (!props.multiple) {
    item.selected = false;
  } else {
    props.modelValue.forEach((item1, index1) => {
      if (item[props.fieldValue] == item1) {
        item.selected = true;
      }
    });
  }
});

const activeIndex = ref(-1);
const isShow = ref(false);
const rotate = ref('rotate(0deg)');
const optionsData: any = ref(props.options || []);
const selectedLabel = ref(
  props.multiple
    ? props.modelValue
    : props.modelValue != ''
    ? props.options.find(item => item[props.fieldValue] == props.modelValue)[props.fieldLabel]
    : ''
);

// selece class
const selectClass = computed(() => {
  return ['y-select', { 'y-select-disabled': props.disabled }];
});
// select input class
const selectInputClass = computed(() => {
  return ['y-select-input', { 'y-select-input-disabled': props.disabled }];
});
const blur = e => {
  isShow.value = false;
  rotate.value = 'rotate(0deg)';
};

//输入查找
const handleInput = e => {
  console.log('handleInput', e.target.value);
  selectedLabel.value = e.target.value;
  optionsData.value = [];
  let filterList = props.options.filter(item => {
    return item[props.fieldLabel].indexOf(e.target.value) != -1;
  });
  filterList.forEach((item, index) => {
    optionsData.value.push(item);
  });
};
const vClickOutside = {
  beforeMount(el) {
    let handler = e => {
      if (!props.disabled) {
        if (!props.multiple) {
          if (el.contains(e.target) && e.target.className.indexOf('y-select-option-li') == -1) {
            if (!isShow.value) {
              isShow.value = !isShow.value;
              if (isShow.value) {
                rotate.value = 'rotate(180deg)';
              } else {
                rotate.value = 'rotate(0deg)';
              }
            }
          } else {
            if (isShow.value) {
              blur();
            }
          }
        } else {
          if (el.contains(e.target)) {
            if (!isShow.value) {
              isShow.value = !isShow.value;
              if (isShow.value) {
                rotate.value = 'rotate(180deg)';
              } else {
                rotate.value = 'rotate(0deg)';
              }
            }
          } else {
            if (isShow.value) {
              blur();
            }
          }
        }
      }
    };
    el.handler = handler;
    if (typeof document !== 'undefined') {
      document.addEventListener('click', handler);
    }
  },
  unmounted(el) {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', el.handler);
    }
  },
};
// 选择事件
let labels = [];
let indexs = [];
const selChange = (item, index) => {
  if (!props.multiple) {
    //单选
    if (!item.disabled) {
      activeIndex.value = index;
      selectedLabel.value = item[props.fieldLabel];
      emit('update:modelValue', item[props.fieldValue]);
      emit('change', { lable: item.label, value: item.value, index: index });
      blur();
    }
  } else {
    //多选
    if (!item.disabled) {
      item.selected = !item.selected;
      if (item.selected) {
        selectedLabel.value.push(item[props.fieldValue]);
        labels.push(item.label);
        indexs.push(index);
      } else {
        selectedLabel.value = selectedLabel.value.filter(v => v !== item[props.fieldValue]);
        labels = labels.filter(v => v !== item[props.fieldLabel]);
        indexs = indexs.filter(v => v !== index);
      }
      emit('update:modelValue', selectedLabel.value);
      emit('change', { lable: labels, value: selectedLabel.value, index: indexs });
    }
  }
};
</script>
