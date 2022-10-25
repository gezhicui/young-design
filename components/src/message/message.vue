<template>
  <transition
    @before-leave="onClose"
    @after-leave="onDestroy"
    name="y-message-fade"
  >
    <div v-show="visiable" :class="messageStyle" :style="{ top: `${top}px` }">
      <Icon class="before-icon" v-if="iconType" :name="iconType" />
      <div class="y-message-content" v-html="message"></div>
      <Icon v-if="showClose" @click="close" class="close-icon" name="close" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { messageType, MessageProps } from './types';
import './style/index.less';
import Icon from '../Icon/icon.vue';
import { onMounted, ref, computed } from 'vue';

const props = defineProps(MessageProps);

const visiable = ref(false);

const messageStyle = computed(() => ['y-message', props.type]);

const iconType = computed(() => {
  switch (props.type) {
    case messageType.SUCCESS:
      return 'check-circle-fill';
    case messageType.WARNING:
      return 'warning-circle-fill';
    case messageType.DANGER:
      return 'close-circle-fill';
    case messageType.INFO:
      return 'info-circle-fill';
  }
});

const close = () => {
  visiable.value = false;
};

onMounted(() => {
  visiable.value = true;
});

if (props.duration) {
  setTimeout(close, props.duration);
}
</script>
