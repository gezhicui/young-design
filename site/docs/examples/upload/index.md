# Upload 上传

在控制台可查看上传文件变化时的文件数组

<style>
.upload-demo {
  width: 400px;
  margin: 50px;

}
.upload-demo .y-icon{
  font-size:20px
}
</style>
<script setup lang="ts">
  const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>

## 基本使用

<div class="upload-demo">
  <y-upload @getFilesList="getFilesList">
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</div>

```vue
<template>
  <y-upload @getFilesList="getFilesList">
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## 多选文件

<div class="upload-demo">
  <y-upload @getFilesList="getFilesList" multiple>
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</div>

```vue
<template>
  <y-upload @getFilesList="getFilesList" multiple>
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## 指定文件类型

<div class="upload-demo">
  <y-upload @getFilesList="getFilesList"  accept="image/*">
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</div>

```vue
<template>
  <y-upload @getFilesList="getFilesList" accept="image/*">
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```

## 拖拽上传

<div class="upload-demo">
  <y-upload @getFilesList="getFilesList" drag>
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</div>

```vue
<template>
  <y-upload @getFilesList="getFilesList" drag>
    <y-button type="primary" size="small">文件上传</y-button>
  </y-upload>
</template>

<script setup lang="ts">
const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>
```
