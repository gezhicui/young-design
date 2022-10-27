<template>
  <transition
    @before-leave="onClose"
    @after-leave="onDestroy"
    name="y-notification-fade"
  >
    <div v-show="visiable" class="y-notification" :style="{ top: `${top}px` }">
      <div class="before-icon" v-if="type">
        <Icon
          size="22"
          :color="color || iconType[type]?.color"
          :name="icon || iconType[type]?.name"
        />
      </div>

      <div class="y-notification-content">
        <div class="y-notification-content-title">{{ message }}{{ type }}</div>
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
import { onMounted, ref, computed } from 'vue';

const props = defineProps(notificationProps);
console.log('props', props);

const visiable = ref(false);

const iconType = {
  [notificationType.SUCCESS]: { name: 'yixuanze', color: '#529b2e' },
  [notificationType.WARNING]: { name: 'error', color: '#b88230' },
  [notificationType.DANGER]: { name: 'close-circle', color: '#c45656' },
  [notificationType.INFO]: { name: 'info-circle', color: '#73767a' },
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
