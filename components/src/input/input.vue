<template>
  <div class="y-input" :class="styleClass">
    <div class="y-input-prepend" v-if="slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      ref="ipt"
      class="y-input-inner"
      :class="inputStyle"
      :disabled="disabled"
      v-bind="attrs"
      :value="modelValue"
      @input="changeInputVal"
      @focus="isEnter = true"
      @blur="isEnter = false"
    />
    <div class="y-input-append" v-if="slots.append">
      <slot name="append"></slot>
    </div>
    <Transition name="fade">
      <div @click="clearValue" v-if="showClear" class="y-input-suffix">
        <Icon name="close-circle" />
      </div>
    </Transition>
    <div class="y-input-suffix" v-show="isShowEye">
      <Icon @click="changeType" :name="eyeIcon" />
    </div>
    <div class="y-input-prefix" v-if="prefixIcon">
      <Icon :name="prefixIcon" />
    </div>
    <div class="y-input-suffix no-cursor" v-if="isShowSuffixIcon">
      <Icon :name="suffixIcon" />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'y-input' };
</script>

<script setup lang="ts">
import './style/index.less';
import { useAttrs, computed, ref, useSlots } from 'vue';
import Icon from '../icon/icon.vue';
import { inputProps } from './types';

const props = defineProps(inputProps);
const inputEmits = defineEmits(['update:modelValue', 'change']);
const changeInputVal = (event: Event) => {
  inputEmits('change', (event.target as HTMLInputElement).value);
  inputEmits('update:modelValue', (event.target as HTMLInputElement).value);
};

//将y-input的属性全部赋予Input组件
const attrs = useAttrs();

//根据props更改类名
const styleClass = computed(() => {
  return {
    'is-disabled': props.disabled,
    [`y-input--${props.size}`]: props.size,
    ['y-input-group y-input-prepend']: slots.prepend,
    ['y-input-group y-input-append']: slots.append,
  };
});
const inputStyle = computed(() => {
  return {
    ['y-input--prefix']: props.prefixIcon,
  };
});

//清除按钮
const isEnter = ref(false);
const showClear = computed(() => props.clearable && props.modelValue && isEnter.value);
const clearValue = () => {
  inputEmits('update:modelValue', '');
};

//显示隐藏密码框 showPassword
const ipt = ref();
Promise.resolve().then(() => {
  if (props.showPassword) {
    ipt.value.type = 'password';
  }
});
const eyeIcon = ref('eye');
const isShowEye = computed(() => props.showPassword && props.modelValue && !props.clearable);
const changeType = () => {
  if (ipt.value.type === 'password') {
    eyeIcon.value = 'eye-close';
    ipt.value.type = attrs.type || 'text';
    return;
  }
  ipt.value.type = 'password';
  eyeIcon.value = 'eye';
};

//带Icon输入框
const isShowSuffixIcon = computed(
  () => props.suffixIcon && !props.clearable && !props.showPassword
);

//复合输入框
const slots = useSlots();
</script>
