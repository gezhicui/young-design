<template>
  <div
    class="y-popover-box"
    @mouseenter="hoverTriggerEnterHandler"
    @mouseleave="hoverTriggerLeaveHandler"
  >
    <transition name="fade" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        v-show="!disabled && showPopover"
        :class="['y-popover-outbox', placement, popperClass]"
        :aria-hidden="disabled || !showPopover ? 'true' : 'false'"
      >
        <div class="y-popover-arrow"></div>
        <div :class="['y-popover-box-content']" :style="popoverStyles">
          <div v-if="title" v-text="title" class="y-popover-title"></div>
          <slot>{{ content }}</slot>
        </div>
      </div>
    </transition>
    <div
      class="y-reference-content"
      @click="clickTriggerHandler"
      @mousedown="focusTriggerHandler"
      @mouseup="blurTriggerHandler"
    >
      <slot name="reference"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'y-popover',
};
</script>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { popoverProps } from './types';
import './style/index.less';

const props = defineProps(popoverProps);
const emit = defineEmits(['afterEnter', 'afterLeave']);

const visible = ref(false);

const showPopover = computed(() => {
  if (props.trigger !== 'manual') {
    return visible.value;
  } else {
    //自定义触发
    return props.modelValue;
  }
});
const popoverStyles = computed(() => {
  let style = { width: '' };
  if (props.width) {
    style.width = props.width + 'px';
  }
  return style;
});

const timer = ref();
//点击触发
function clickTriggerHandler() {
  if (props.trigger.toLowerCase() == 'click') {
    if (!props.disabled) {
      visible.value = !visible.value;
    }
  }
}
//聚焦触发
function focusTriggerHandler() {
  if (props.trigger.toLowerCase() == 'focus') {
    if (!props.disabled) {
      visible.value = true;
    }
  }
}
//失焦消时
function blurTriggerHandler() {
  if (props.trigger.toLowerCase() == 'focus') {
    if (!props.disabled) {
      visible.value = false;
    }
  }
}
//hover——鼠标移入触发
function hoverTriggerEnterHandler() {
  if (props.trigger.toLowerCase() == 'hover') {
    if (!props.disabled) {
      clearTimeout(timer.value);
      visible.value = true;
    }
  }
}
//hover——鼠标移出,关闭popover 可延迟关闭
function hoverTriggerLeaveHandler() {
  if (props.trigger.toLowerCase() == 'hover') {
    if (!props.disabled) {
      timer.value = setTimeout(() => {
        visible.value = false;
      }, props.delay);
    }
  }
}
//弹窗显示时触发
function handleAfterEnter() {
  emit('afterEnter');
}
//弹窗消时时触发
function handleAfterLeave() {
  emit('afterLeave');
}
//获取组件实例
</script>
