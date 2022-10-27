<template>
  <y-button @click="handleClick">clickme</y-button>
  <y-button @click="handleClick2">clickme</y-button>
  <y-button @click="handleClick3">clickme</y-button>
  <y-button @click="handleClick4">clickme</y-button>
  <!-- <img src="./public/bg.png" /> -->
</template>

<script setup lang="ts">
import { Notification } from 'young-design';

const handleClick = () => {
  Notification({
    // type: 'danger',
    message:
      '全新的通知发发送方三房啥都骨干发送到发送到广泛涉的内容化发按asdsad身份',
    //showClose: true,
    description:
      'fasfaf非递归风蚀高地法国大使馆上大分水电费赶得上郭德纲的感受到森岛帆高但是公司as',
    // duration: 0,
  });
};
const handleClick2 = () => {
  Notification({
    type: 'danger',
    message: '全新的通知内容化发按身份',
    showClose: true,
    // duration: 0,
  });
};
const handleClick3 = () => {
  Notification({
    type: 'success',
    message:
      '全新的通知发发送方三房啥都骨干发送到发送到广泛涉的内容化发按asdsad身份',
    showClose: true,
    description:
      'fasfaf非递归风蚀高地法国大使馆上大分水电费赶得上郭德纲的感受到森岛帆高但是公司as',
    // duration: 0,
  });
};
const handleClick4 = () => {
  Notification({
    type: 'success',
    icon: 'fire',
    color: 'red',
    message:
      '全新的通知发发送方三房啥都骨干发送到发送到广泛涉的内容化发按asdsad身份',
    showClose: true,
    description:
      'fasfaf非递归风蚀高地法国大使馆上大分水电费赶得上郭德纲的感受到森岛帆高但是公司as',
    // duration: 0,
  });
};
</script>
