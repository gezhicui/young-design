<template>
  <transition name="y-back-top-fade">
    <div
      v-show="isShow"
      class="y-back-top"
      :style="{ bottom, right }"
      @click="toTop"
    >
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
export default { name: 'y-back-top' };
</script>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { backTopProps } from './types';
import './style/index.less';

const prop = defineProps(backTopProps);

const isShow = ref<boolean>(false);
let runScrollFun = true;

// 节流函数
const throttle = (ScrollFun: Function) => {
  return () => {
    if (!runScrollFun) {
      return;
    }
    runScrollFun = false;
    setTimeout(() => {
      ScrollFun();
      runScrollFun = true;
    }, 200);
  };
};

const handleScroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollTop > prop.beyond ? (isShow.value = true) : (isShow.value = false);
};

const toTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: prop.behavior,
  });
};

onMounted((): void => addEventListener('scroll', throttle(handleScroll)));
</script>
