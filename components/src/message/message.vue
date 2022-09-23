<template>
  <transition
    @before-leave="onClose"
    @after-leave="onDestroy"
    name="message-fade"
  >
    <div v-show="visiable" :class="messageStyle" :style="{ top: `${top}px` }">
      <span>{{ message }}?</span>
      <Icon @click="close" class="closeIcon" name="close" />
    </div>
  </transition>
</template>

<script setup>
import types from "./types";
import "./style/index.less";
import Icon from "../Icon/icon.vue";
import { onMounted, ref, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "info",
    validator(value) {
      return Object.values(types).includes(value);
    },
  },
  top: {
    type: Number,
    default: 20,
  },
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  onDestroy: Function,
  onClose: Function,
});

const visiable = ref(false);

const messageStyle = computed(() => ["message", props.type]);

const close = () => {
  visiable.value = false;
};

onMounted(() => {
  visiable.value = true;
});

setTimeout(close, props.duration);
</script>
