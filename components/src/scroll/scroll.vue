<template>
  <div
    class="y-scroll"
    :style="{ height: `${viewHeight}px` }"
    @mouseenter="mouseover"
    @mouseleave="mouseout"
  >
    <div class="y-scroll-content" :style="{ paddingRight: `${size}px` }" @scroll="viewScroll">
      <slot></slot>
    </div>
    <transition name="fade">
      <div
        class="y-scroll-bar"
        v-show="!alwaysVisible || isShow"
        :style="{ width: `${size}px` }"
        @mousedown="thumbDrag($event)"
      >
        <div
          class="y-scroll-thumb"
          ref="thumb"
          :style="{
            height: `${BarHeight}px`,
            top: `${BarTop}px`,
            borderRadius: `${size}px`,
          }"
        ></div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
export default { name: 'y-scroll' };
</script>

<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref, toRefs, watch, watchEffect } from 'vue';
import { scrollProps } from './types';
import './style/index.less';
const props = defineProps(scrollProps);
const emit = defineEmits(['onScroll', 'update:to']);

const instance = getCurrentInstance();
const BarHeight = ref(30);
const BarTop = ref(0);
const thumb = ref();
const { to, height } = toRefs(props);
const viewHeight = ref(0);
const isShow = ref(false);

const viewScroll = () => {
  const el = instance?.vnode.el;
  if (!el) return;
  const view = el.children[0];
  //计算视图现在所在位置 范围0-1
  let catchTop = view.scrollTop / (view.scrollHeight - view.offsetHeight);
  /* TODO:解决精度折损 */
  //计算滚动条所在位置
  BarTop.value = catchTop * (view.offsetHeight - thumb.value.offsetHeight);
  emit('onScroll', catchTop);
  emit('update:to', view.scrollTop);
};

if (to) {
  watch(to, (val) => {
    const el = instance?.vnode.el;
    if (!el) return;
    const view = el.children[0];
    view.scrollTop = val;
  });
}

if (height) {
  watchEffect(() => {
    viewHeight.value = height.value;
  });
}

let observer: MutationObserver;
onMounted(() => {
  const el = instance?.vnode.el;
  if (!el) return;
  if (to) {
    const view = el.children[0];
    view.scrollTop = to.value;
  }

  if (!height) {
    viewHeight.value = el.parentNode.offsetHeight;
    window.addEventListener('resize', () => {
      viewHeight.value = el.parentNode.offsetHeight;
    });
  }

  observer = new MutationObserver(() => {
    BarHeight.value = (el.offsetHeight * el.offsetHeight) / el.children[0].scrollHeight;
    if (BarHeight.value <= 30) {
      BarHeight.value = 30;
    }

    if (el.children[0].scrollHeight <= el.offsetHeight) {
      BarHeight.value = 0;
    }
  });

  observer.observe(el as Node, {
    childList: true, // 子节点的变动（新增、删除或者更改）
    attributes: true, // 属性的变动
    characterData: true, // 节点内容或节点文本的变动
    subtree: true, // 是否将观察器应用于该节点的所有后代节点
  });
});

onUnmounted(() => {
  observer.disconnect();
});

let isDrag = false;
let isArea = false;

const mouseover = () => {
  isArea = true;
  isShow.value = true;
};
const mouseout = () => {
  isArea = false;
  if (!isDrag) {
    isShow.value = false;
  }
};

const thumbDrag = (e: MouseEvent) => {
  e.preventDefault();
  const el = instance?.vnode.el;
  if (!el) return;
  const view = el.children[0];
  //计算滚动条初始状态距离浏览器顶部距离
  const touchY = e.clientY - BarTop.value;
  const element = e.target as HTMLElement;
  console.log(element);

  if (element && element.className === 'y-scroll-bar') {
    //点击在空白处
    const top = e.clientY - element.getBoundingClientRect().top;
    view.scrollTop = view.scrollHeight * (top / element.offsetHeight) - element.offsetHeight / 2;
  } else {
    //点击在滚动条上
    const move = (ev: MouseEvent) => {
      isDrag = true;
      const bt = (ev.clientY - touchY) / (view.offsetHeight - thumb.value.offsetHeight);
      const top = (view.scrollHeight - view.offsetHeight) * bt;
      view.scrollTop = top;
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', () => {
      isDrag = false;
      if (!isArea) {
        isShow.value = false;
      }
      document.removeEventListener('mousemove', move);
    });
  }
};
</script>
