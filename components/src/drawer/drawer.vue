<template>
  <transition :name="transitionName">
    <div
      v-show="visible"
      @click.self="handleMaskClose"
      class="y-drawer-warpper"
    >
      <div
        :class="['y-drawer', 'transition-inner', `y-drawer-${direction}`]"
        :style="isDirection ? `width: ${size}` : `height: ${size}`"
      >
        <div>
          <div class="y-drawer-header">
            <span class="y-drawer-title" v-if="showHeader">
              {{ title }}
            </span>
            <slot v-else name="headerContent" />
            <Icon
              v-if="closable"
              @click="onClickCancelButton"
              class="y-drawer-close"
              name="close"
            />
          </div>
        </div>

        <div class="y-drawer-body">
          <slot />
        </div>

        <div>
          <slot name="footerContent" />
          <div class="y-drawer-footer" v-if="showFooter">
            <Button v-if="showCancelButton" @click="onClickCancelButton">
              {{ cancelText }}
            </Button>
            <Button
              type="primary"
              v-if="showConfirmButton"
              @click="onClickConfirmButton"
            >
              {{ confirmText }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default { name: 'y-drawer' };
</script>

<script setup lang="ts">
import './style/index.less';
import { ref, useSlots, computed } from 'vue';
import Button from '../button/button.vue';
import Icon from '../Icon/icon.vue';
import { drawerProps } from './types';

const props = defineProps(drawerProps);
const emit = defineEmits(['cancel', 'confirm']);
const slots = useSlots();

const transitionName = computed((): string => {
  return `y-drawer-fade-${props.direction}`;
});

const isDirection = computed((): boolean => {
  const p: string = props.direction;
  return p === 'left' || p === 'right' || p === '';
});

const handleMaskClose = (e: Event) => {
  if (props.maskClosable) {
    emit('cancel', e);
  }
};

const onClickCancelButton = (e: Event) => {
  emit('cancel', e);
};

const onClickConfirmButton = (e: Event) => {
  emit('confirm', e);
};

// 自定义尾部
const showFooter = ref(true);
const footerContent = slots?.footerContent;

if (footerContent) {
  showFooter.value = false;
}

// 自定义头部
const showHeader = ref(true);
const headerContent = slots?.headerContent;
if (headerContent) {
  showHeader.value = false;
}
</script>
