<!-- selectedLabel  和selectvalue改造-->

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
                  activeIndex == index ||
                  selectedValue == item[fieldValue] ||
                  itemSelected(item[fieldValue]),
                'y-select-disabled': item.disabled,
              }"
            >
              {{ item[fieldLabel] }}
              <Icon
                v-if="multiple && itemSelected(item[fieldValue])"
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
import { ref, computed, watchEffect, watch } from 'vue';
import Icon from '../icon/icon.vue';
import './style/index.less';
import { sizeChange } from '../utils';
import { selectProps } from './types';

const emit = defineEmits(['update:modelValue', 'change']);
const props = defineProps(selectProps);

const activeIndex = ref(-1);
const isShow = ref(false);
const rotate = ref('rotate(0deg)');
const optionsData: any = ref(props.options || []);

const itemSelected = value => {
  if (Array.isArray(selectedValue.value)) {
    return selectedValue.value.indexOf(value) !== -1;
  } else {
    return selectedValue.value === value;
  }
};

const selectedLabel = ref();
const selectedValue = ref(props.modelValue);

// selece class
const selectClass = computed(() => {
  return ['y-select', { 'y-select-disabled': props.disabled }];
});
// select input class
const selectInputClass = computed(() => {
  return ['y-select-input', { 'y-select-input-disabled': props.disabled }];
});
const blur = () => {
  isShow.value = false;
  rotate.value = 'rotate(0deg)';
};

// 输入查找
const handleInput = e => {
  console.log('handleInput', e.target.value);
  selectedLabel.value = e.target.value;
  optionsData.value = [];
  optionsData.value = props.options.filter(item => {
    return item[props.fieldLabel].includes(e.target.value);
  });
};

// 点击外部关闭下拉框
const vClickOutside = {
  beforeMount(el) {
    console.log('el', el);

    let handler = e => {
      if (props.disabled) return;

      //点击的目标不在选项上
      const notInPopup = e.target.className?.indexOf('y-select-option-li') == -1;

      if (!props.multiple) {
        // 单选处理
        //点击input，且点击的不是下拉框的东西 且没打开下拉框
        if (el.contains(e.target) && notInPopup && !isShow.value) {
          isShow.value = !isShow.value;
          rotate.value = `rotate(${isShow.value ? 180 : 0}deg)`;
        } else if (isShow.value) {
          //没点击input或没点击下拉框的东西
          blur();
        }
      } else {
        //多选处理
        if (el.contains(e.target) && notInPopup) {
          isShow.value = !isShow.value;
          rotate.value = `rotate(${isShow.value ? 180 : 0}deg)`;
        } else if (isShow.value && notInPopup) {
          blur();
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
const selChange = (item, index) => {
  if (!props.multiple) {
    //单选
    if (!item.disabled) {
      activeIndex.value = index;
      selectedValue.value = item[props.fieldValue];
      blur();
    }
  } else {
    //多选
    if (!item.disabled) {
      if (itemSelected(item[props.fieldValue])) {
        selectedValue.value = selectedValue.value.filter(v => v !== item[props.fieldValue]);
      } else {
        selectedValue.value.push(item[props.fieldValue]);
      }
    }
  }
};

// watchEffect(() => {
//   console.log('watchEffect');
//   if (Array.isArray(selectedValue.value)) {
//     //多选时选中的label数组
//     selectedLabel.value = optionsData.value
//       .filter(item => selectedValue.value?.includes(item[props.fieldValue]))
//       .map(item => item[props.fieldLabel]);
//   } else {
//     //单选
//     selectedLabel.value = optionsData.value.find(
//       item => item[props.fieldValue] === selectedValue.value
//     )?.[props.fieldLabel];
//   }
// });

watch(
  () => selectedValue.value,
  (newvalue, oldvalue) => {
    // console.log('watch', newvalue, oldvalue);

    if (Array.isArray(selectedValue.value)) {
      //多选时选中的label数组
      selectedLabel.value = optionsData.value
        .filter(item => selectedValue.value?.includes(item[props.fieldValue]))
        .map(item => item[props.fieldLabel]);
    } else {
      //单选
      selectedLabel.value = optionsData.value.find(
        item => item[props.fieldValue] === selectedValue.value
      )?.[props.fieldLabel];
    }
    emit('update:modelValue', selectedValue.value);
    emit('change', {
      lable: selectedLabel.value,
      value: selectedValue.value,
    });
  },
  { deep: true, immediate: true }
);
</script>
