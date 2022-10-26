<template>
  <transition
    @before-leave="onClose"
    @after-leave="onDestroy"
    name="y-message-fade"
  >
    <div v-show="visiable" :class="messageStyle" :style="{ top: `${top}px` }">
      <Icon class="before-icon" v-if="iconType" :name="icon || iconType[type]" />
      <div class="y-message-content" v-html="message"></div>
      <Icon v-if="showClose" @click="close" class="close-icon" name="close" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { messageType, messageProps } from './types';
import './style/index.less';
import Icon from '../Icon/icon.vue';
import { onMounted, ref, computed } from 'vue';

const props = defineProps(messageProps);

const visiable = ref(false);

const messageStyle = computed(() => ['y-message', props.type]);

const iconType = {
  [messageType.SUCCESS]: 'check-circle-fill',
  [messageType.WARNING]: 'error-fill',
  [messageType.DANGER]: 'close-circle-fill',
  [messageType.INFO]: 'info-circle-fill',
};

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
