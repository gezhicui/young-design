<template>
  <div
    class="y-upload-dragger"
    :class="{ ['y-upload-draggerenter']: isEnter }"
    ref="fileArea"
    @click="emits('fileUpload')"
  >
    <div class="y-upload-content">
      <Icon class="y-upload-icon" :name="isEnter ? 'folder-open' : 'folder'" />
      <div class="y-upload-dragger-text">将文件拖到此处或<em>点击上传</em></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style/drag.less';
import { ref, onMounted } from 'vue';
import Icon from '../Icon/icon.vue';
const emits = defineEmits(['getFilesList', 'fileUpload']);
const fileArea = ref();
const isEnter = ref(false);
const filesList = ref<File[]>([]);
onMounted(() => {
  fileArea.value.addEventListener(
    'drop',
    (e: any) => {
      e.preventDefault();
      filesList.value.push(...Array.from(e.dataTransfer.files as FileList));
      emits('getFilesList', filesList.value);
    },
    true
  );
  fileArea.value.addEventListener(
    'dragover',
    (e: Event) => {
      e.preventDefault();
    },
    true
  );
  fileArea.value.addEventListener(
    'dragenter',
    (e: Event) => {
      console.log('fileArea enter');
      isEnter.value = true;
      e.preventDefault();
    },
    true
  );
  fileArea.value.addEventListener(
    'dragleave',
    (e: Event) => {
      console.log('fileArea leave');
      isEnter.value = false;
      e.preventDefault();
    },
    true
  );
});
</script>
