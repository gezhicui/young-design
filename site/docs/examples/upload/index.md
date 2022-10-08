# Upload 上传

在控制台可查看上传文件变化时的文件数组

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

## API

| 参数     | 说明                                                   | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------------------------------ | ------- | ------ | ------ |
| multiple | 是否可以多选                                           | boolean |        | false  |
| accept   | 可以选择的文件 MIME 类型，多个 MIME 类型用英文逗号分开 | string  |        |        |
| drag     | 是否是拖拽上传                                         | boolean |        | false  |

## Events

| 事件名称     | 说明               | 回调参数     |
| ------------ | ------------------ | ------------ |
| getFilesList | 文件列表改变时触发 | 新的文件列表 |

<script setup lang="ts">
  const getFilesList = (files: File[]) => {
  console.log(files);
};
</script>

<style scope>
.upload-demo {
  width: 400px;
  margin: 50px;

}
.upload-demo .y-icon{
  font-size:20px
}
</style>
