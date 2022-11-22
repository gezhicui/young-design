<template>
  <div :class="selectClass" :style="{ width: sizeChange(width) }" v-click-outside>
    <div :class="selectInputClass">
      <input
        type="text"
        :readonly="!searchable || multiple"
        :placeholder="stashPlaceholder"
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
          <div class="y-arrow" />
          <ul>
            <li
              class="y-select-option-li"
              v-for="item in optionsData"
              :key="item[fieldValue]"
              @click="selChange(item)"
              :class="{
                'y-select-active': itemSelected(item[fieldValue]),
                'y-select-disabled': item.disabled,
              }"
            >
              {{ item[fieldLabel] }}
              <Icon
                v-if="multiple && itemSelected(item[fieldValue])"
                name="check"
                :icon-style="{ width: '13px', height: '13px', float: 'right' }"
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
import { ref, computed, watch } from 'vue';
import { sizeChange } from '../utils';
import { selectProps, HTMLElementPlus } from './types';
import Icon from '../icon/icon.vue';
import './style/index.less';

const emit = defineEmits(['update:modelValue', 'change']);
const props = defineProps(selectProps);

// 计算绑定样式
const selectClass = computed(() => {
  return ['y-select', { 'y-select-disabled': props.disabled }];
});
const selectInputClass = computed(() => {
  return ['y-select-input', { 'y-select-input-disabled': props.disabled }];
});

// 数据初始化
const isShow = ref(false);
const rotate = ref('rotate(0deg)');
const optionsData = ref(props.options || []);
const selectedLabel = ref();
const selectedValue = ref(props.modelValue);
const stashPlaceholder = ref(props.placeholder);
watch(
  () => selectedValue.value,
  () => {
    if (props.multiple) {
      //多选时选中的label数组
      if (!selectedValue.value) {
        selectedValue.value = [];
      }
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
const itemSelected = (value: string | number) => {
  const curVal = selectedValue.value || stashSelectedValue.value;
  if (Array.isArray(curVal)) {
    return curVal.indexOf(value) !== -1;
  } else {
    return curVal === value;
  }
};

// 输入查找
const handleInput = (e: Event) => {
  selectedLabel.value = (e.target as HTMLInputElement).value;
  selectedValue.value = undefined;
  optionsData.value = [];
  optionsData.value = props.options.filter((item: any) => {
    return item[props.fieldLabel].includes((e.target as HTMLInputElement).value);
  });
};

// 点击外部关闭下拉框
const vClickOutside = {
  beforeMount(el: HTMLElementPlus) {
    let handler = (e: Event) => {
      if (props.disabled) return;
      //点击的目标不在选项上
      const notInPopup = (e.target as HTMLElement).className?.indexOf('y-select-option-li') == -1;
      if (!props.multiple) {
        // 单选处理
        //点击input，且点击的不是下拉框的东西
        if (el.contains(e.target as HTMLElement) && notInPopup) {
          if (!isShow.value) {
            //打开下拉框的时候把当前的状态存起来
            handleStash();
          } else {
            //关闭下拉框的时候重置状态
            handleRestore();
          }
          isShow.value = !isShow.value;
          rotate.value = `rotate(${isShow.value ? 180 : 0}deg)`;
        } else {
          //没点击input或没点击下拉框的东西
          blur();
        }
      } else {
        //多选处理
        if (el.contains(e.target as HTMLElement) && notInPopup) {
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
  unmounted(el: HTMLElementPlus) {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', el.handler);
    }
  },
};
const blur = () => {
  isShow.value = false;
  rotate.value = 'rotate(0deg)';
  if (typeof selectedValue.value === 'undefined') {
    handleRestore();
  }
};
// 监听选择框打开，重新计算下拉内容
watch(
  () => isShow.value,
  () => {
    if (isShow.value) {
      if (optionsData.value.length !== props.options.length) {
        optionsData.value = props.options;
      }
    }
  },
  { deep: true }
);

// 输入查找时的暂存操作
const stashSelectedValue = ref();
const stashSelectedLabel = ref();

const handleStash = () => {
  // 不是搜索输入框不需要处理
  if (!props.searchable) return;
  stashSelectedValue.value = selectedValue.value;
  stashSelectedLabel.value = selectedLabel.value;
  stashPlaceholder.value = selectedLabel.value || props.placeholder;
  selectedValue.value = undefined;
  selectedLabel.value = undefined;
};
const handleRestore = () => {
  // 不是搜索输入框不需要处理
  if (!props.searchable) return;
  optionsData.value = props.options;
  selectedValue.value = stashSelectedValue.value;
  selectedLabel.value = stashSelectedLabel.value;
  stashSelectedValue.value = undefined;
  stashSelectedLabel.value = undefined;
  stashPlaceholder.value = props.placeholder;
};

// 选择事件
const selChange = (item: any) => {
  if (!props.multiple) {
    //单选
    if (!item.disabled) {
      selectedValue.value = item[props.fieldValue];
      blur();
    }
  } else {
    //多选
    if (!item.disabled && Array.isArray(selectedValue.value)) {
      if (itemSelected(item[props.fieldValue])) {
        selectedValue.value = selectedValue.value.filter(v => v !== item[props.fieldValue]);
      } else {
        selectedValue.value.push(item[props.fieldValue]);
      }
    }
  }
};
</script>
