<template>
  <div class="upload-demo">
    <Upload @getFilesList="getFilesList" drag multiple accept="image/*">
      <Button type="primary" size="small">文件上传</Button>
    </Upload>
  </div>
</template>
<script lang="ts" setup>
import { Upload, Button } from 'young-design';
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
<style lang="less">
.upload-demo {
  width: 400px;
}
</style>
