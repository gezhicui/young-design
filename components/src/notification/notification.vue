<template>
  <transition @before-leave="onClose" @after-leave="onDestroy" name="y-notification-fade">
    <div v-show="visiable" class="y-notification" :style="{ top: `${top}px` }">
      <div class="before-icon" v-if="type || icon">
        <Icon
          size="22"
          :color="color || iconType[type as string]?.color"
          :name="icon || iconType[type as string]?.name"
        />
      </div>

      <div class="y-notification-content">
        <div class="y-notification-content-title">{{ message }}</div>
        <div class="y-notification-content-description" v-if="description">
          {{ description }}
        </div>
      </div>
      <Icon v-if="showClose" @click="close" class="close-icon" name="close" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { notificationType, notificationProps } from './types';
import './style/index.less';
import Icon from '../Icon/icon.vue';
import { onMounted, ref } from 'vue';

const props = defineProps(notificationProps);

const visiable = ref(false);

const iconType = {
  [notificationType.SUCCESS]: { name: 'yixuanze', color: '#67c23a' },
  [notificationType.WARNING]: { name: 'error', color: '#ebb563' },
  [notificationType.DANGER]: { name: 'close-circle', color: '#f56c6c' },
  [notificationType.INFO]: { name: 'info-circle', color: '#909399' },
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
