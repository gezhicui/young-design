# Icon 图标

## 基础用法

<div class="icon-wrap">
  <div class="icon-item"  v-for="(item, index) in iconList" :key="item">
    <y-icon :name="item"/> 
    <span class="icon-name">{{item}}</span>
  </div>
</div>

```vue
<template>
  <y-icon name="组件名称" />
</template>
```

## 修改颜色

<div class="icon-wrap">
  <div class="icon-item" >
    <y-icon name="cloud-download" color="red"/> 
  </div>
   <div class="icon-item" >
    <y-icon name="like" color="green"/> 
  </div>
   <div class="icon-item" >
    <y-icon name="heart" color="orange"/> 
  </div>
   <div class="icon-item" >
    <y-icon name="delete" color="blue"/> 
  </div>
</div>

```vue
<template>
  <y-icon name="cloud-download" color="red" />
  <y-icon name="like" color="green" />
  <y-icon name="heart" color="orange" />
  <y-icon name="delete" color="blue" />
</template>
```

## 添加角标

<div class="icon-wrap">
<y-icon name="phone" dot />
</div>

```vue
<template>
  <y-icon name="phone" dot />
</template>
```

## 数字角标

<div class="icon-wrap">
<y-icon name="phone" dot badge="1" />
</div>

```vue
<template>
  <y-icon name="phone" dot badge="1" />
</template>
```

## API

| 参数  | 说明                             | 类型    | 可选值       | 默认值 |
| ----- | -------------------------------- | ------- | ------------ | ------ |
| name  | icon 名                          | string  | 查看上方按钮 |        |
| dot   | 是否有角标                       | boolean |              | false  |
| badge | 数字角标内容(dot 为 true 才生效) | string  |              |        |
| color | icon 颜色                        | string  |              |        |

<script setup lang="ts">
const iconList  = [
'close-circle',
'info-circle',
'check-circle',
'left-circle',
'down-circle',
'minus-circle',
'plus-circle',
'play-circle',
'question-circle',
'right-circle',
'timeout',
'up-circle',
'warning-circle',
'sync',
'undo',
'redo',
'reload',
'reloadtime',
'message',
'poweroff',
'piechart',
'setting',
'location',
'edit-square',
'export',
'appstore',
'left-square',
'codelibrary',
'detail',
'adduser',
'deleteteam',
'deleteuser',
'addteam',
'user',
'team',
'linechart',
'mobile',
'filedone',
'file-exception',
'filesync',
'filesearch',
'delete',
'home',
'bank',
'like',
'unlike',
'folder',
'folder-open',
'folder-add',
'deploymentunit',
'camera',
'cloud',
'cloud-download',
'cloud-sync',
'heart',
'phone',
'tags',
'share',
'shrink',
'arrawsalt',
'verticalright',
'verticalleft',
'right',
'left',
'up',
'down',
'fullscreen',
'fullscreen-exit',
'arrowright',
'arrowup',
'arrowleft',
'arrowdown',
'vertical-align-botto',
'vertical-align-top',
'outdent',
'menu',
'check',
'close',
'question',
'rollback',
'stop',
'fire',
'zuo',
'zengjia',
'yixuanze',
'yixuan',
'you',
'close-circle-fill',
'info-circle-fill',
'question-circle-fill',
'warning-circle-fill',
'check-circle-fill',
]
</script>

<style scope>
.icon-wrap{
  display:flex;
  flex-wrap:wrap;
}
.icon-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100px;
  width:16.6%
}
.icon-name{
  font-size:12px
}
.icon-wrap .y-icon {
  font-size: 36px;
  color: #666;
  margin-bottom:10px
}
</style>
