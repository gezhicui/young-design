<template>
  <div>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="text">文字按钮</Button>
    <br />
    <br />
    <Button plain>朴素按钮</Button>
    <Button type="primary" plain>主要按钮</Button>
    <Button type="success" plain>成功按钮</Button>
    <Button type="info" plain>信息按钮</Button>
    <Button type="warning" plain>警告按钮</Button>
    <Button type="danger" plain>危险按钮</Button>
    <br />
    <br />
    <Button round>圆角按钮</Button>
    <Button type="primary" round>主要按钮</Button>
    <Button type="success" round>成功按钮</Button>
    <Button type="info" round>信息按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="danger" round>危险按钮</Button>
    <br />
    <br />
    <Button disabled>禁用按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="info" disabled>信息按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <br />
    <br />
    <Button disabled>禁用按钮</Button>
    <Button type="primary" disabled plain>主要按钮</Button>
    <Button type="success" disabled plain>成功按钮</Button>
    <Button type="info" disabled plain>信息按钮</Button>
    <Button type="warning" disabled plain>警告按钮</Button>
    <Button type="danger" disabled plain>危险按钮</Button>
    <br />
    <br />
    <Button>默认按钮</Button>
    <Button size="medium">中等按钮</Button>
    <Button size="small">小型按钮</Button>
    <Button size="mini">超小按钮</Button>
    <div>
      <Button type="success" icon="zuo">图标按钮</Button>
      <Button type="primary" icon="zengjia" icon-position="right"
        >图标按钮</Button
      >
      <Button type="primary" icon="zengjia"></Button>
    </div>

    <div class="icon-grpup">
      <Icon name="zuo" />
      <Icon name="you" color="red" dot />
      <Icon name="yixuanze" dot badge="1" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Button, Icon } from 'young-ui';
</script>

<style lang="less">
.y-button {
  margin-right: 10px;
}
.icon-grpup .y-icon {
  font-size: 36px;
  color: #666;
  margin-right: 20px;
}
</style>
