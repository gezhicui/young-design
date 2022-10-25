# Button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <y-button>默认按钮</y-button>
        <y-button type="primary">主要按钮</y-button>
        <y-button type="success">成功按钮</y-button>
        <y-button type="info">信息按钮</y-button>
        <y-button type="warning">警告按钮</y-button>
        <y-button type="danger">危险按钮</y-button>
        <y-button type="text">文字按钮</y-button>
        <br>
        <br>
        <y-button plain>朴素按钮</y-button>
        <y-button type="primary" plain>主要按钮</y-button>
        <y-button type="success" plain>成功按钮</y-button>
        <y-button type="info" plain>信息按钮</y-button>
        <y-button type="warning" plain>警告按钮</y-button>
        <y-button type="danger" plain>危险按钮</y-button>
        <br>
        <br>
        <y-button round>圆角按钮</y-button>
        <y-button type="primary" round>主要按钮</y-button>
        <y-button type="success" round>成功按钮</y-button>
        <y-button type="info" round>信息按钮</y-button>
        <y-button type="warning" round>警告按钮</y-button>
        <y-button type="danger" round>危险按钮</y-button>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <y-button>默认按钮</y-button>
    <y-button type="primary">主要按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="info">信息按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="danger">危险按钮</y-button>
    <y-button type="text">文字按钮</y-button>
    <br />
    <br />
    <y-button plain>朴素按钮</y-button>
    <y-button type="primary" plain>主要按钮</y-button>
    <y-button type="success" plain>成功按钮</y-button>
    <y-button type="info" plain>信息按钮</y-button>
    <y-button type="warning" plain>警告按钮</y-button>
    <y-button type="danger" plain>危险按钮</y-button>
    <br />
    <br />
    <y-button round>圆角按钮</y-button>
    <y-button type="primary" round>主要按钮</y-button>
    <y-button type="success" round>成功按钮</y-button>
    <y-button type="info" round>信息按钮</y-button>
    <y-button type="warning" round>警告按钮</y-button>
    <y-button type="danger" round>危险按钮</y-button>
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "young-design";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

:::

## 禁用状态

<div class="example">
    <div>
        <y-button disabled>禁用按钮</y-button>
        <y-button type="primary" disabled>主要按钮</y-button>
        <y-button type="success" disabled>成功按钮</y-button>
        <y-button type="info" disabled>信息按钮</y-button>
        <y-button type="warning" disabled>警告按钮</y-button>
        <y-button type="danger" disabled>危险按钮</y-button>
        <br>
        <br>
        <y-button disabled>禁用按钮</y-button>
        <y-button type="primary" disabled plain>主要按钮</y-button>
        <y-button type="success" disabled plain>成功按钮</y-button>
        <y-button type="info" disabled plain>信息按钮</y-button>
        <y-button type="warning" disabled plain>警告按钮</y-button>
        <y-button type="danger" disabled plain>危险按钮</y-button>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <y-button disabled>禁用按钮</y-button>
    <y-button type="primary" disabled>主要按钮</y-button>
    <y-button type="success" disabled>成功按钮</y-button>
    <y-button type="info" disabled>信息按钮</y-button>
    <y-button type="warning" disabled>警告按钮</y-button>
    <y-button type="danger" disabled>危险按钮</y-button>
    <br />
    <br />
    <y-button disabled>禁用按钮</y-button>
    <y-button type="primary" disabled plain>主要按钮</y-button>
    <y-button type="success" disabled plain>成功按钮</y-button>
    <y-button type="info" disabled plain>信息按钮</y-button>
    <y-button type="warning" disabled plain>警告按钮</y-button>
    <y-button type="danger" disabled plain>危险按钮</y-button>
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "young-design";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

:::

## 调整按钮尺寸

<div class="example">
    <div>
        <y-button>默认按钮</y-button>
        <y-button size="medium">中等按钮</y-button>
        <y-button size="small">小型按钮</y-button>
        <y-button size="mini">超小按钮</y-button>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <y-button>默认按钮</y-button>
    <y-button size="medium">中等按钮</y-button>
    <y-button size="small">小型按钮</y-button>
    <y-button size="mini">超小按钮</y-button>
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "young-design";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

:::

## 图标、图标位置及图标尺寸

可以通过配置`icon`属性和 `iconPosition`来确定图标及图标位置

使用`iconSize`来确定图标尺寸

<div class="example">
  <y-button icon="cloud-download">下载</y-button>
  <y-button icon="like">赞</y-button>
  <y-button icon="heart" iconPosition="right">喜欢</y-button>
  <y-button icon="delete" iconPosition="right">删除</y-button>
  <br>
  <y-button icon="cloud-download" iconSize="10" />
  <y-button icon="like"  iconSize="20"/>
  <y-button icon="heart" round iconPosition="right" iconSize="30" />
  <y-button icon="delete" round iconPosition="right" type='danger'  iconSize="40"/>
</div>

::: details 显示代码

```vue
<template>
  <div>
    <y-button icon="cloud-download">下载</y-button>
    <y-button icon="like">赞</y-button>
    <y-button icon="heart" iconPosition="right">喜欢</y-button>
    <y-button icon="delete" iconPosition="right">删除</y-button>
    <br />
    <y-button icon="cloud-download" iconSize="10" />
    <y-button icon="like" iconSize="20" />
    <y-button icon="heart" round iconPosition="right" iconSize="30" />
    <y-button
      icon="delete"
      round
      iconPosition="right"
      type="danger"
      iconSize="40"
    />
  </div>
</template>
<script lang="ts" setup>
import { y-button } from "young-design";
</script>
<style>
.y-button {
  margin-right: 10px;
}
</style>
```

:::

## API

| 参数         | 说明                             | 类型          | 可选值                                                      | 默认值 |
| ------------ | -------------------------------- | ------------- | ----------------------------------------------------------- | ------ |
| type         | 按钮类型                         | string        | ['primary', 'success', 'info', 'warning', 'danger', 'text'] | ——     |
| size         | 按钮大小                         | string        | ['medium', 'small', 'mini' ]                                | ——     |
| plain        | 是否朴素按钮                     | boolean       | ——                                                          | ——     |
| round        | 是否圆角按钮                     | boolean       | ——                                                          | ——     |
| disabled     | 是否禁用                         | boolean       | ——                                                          | ——     |
| icon         | 图标名                           | string        | 查看 Ion 中的图标 name                                      | ——     |
| iconPosition | 图标位置                         | string        | ['right','left' ]                                           | 'left' |
| iconSize     | 图标 icon 大小,传入 25 就是 25px | string/number | ——                                                          | ——     |

<style scope>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px
  }
  .example .y-button {
      margin:10px 5px
  }
  
</style>
