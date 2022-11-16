<template>
  <div class="box">
    <iframe src="http://localhost:8000/#/RentedDetailTable" width="100%" height="700px" />
    <y-popover class="space" trigger="click" placement="right-start" content="我是内容">
      <template #reference>
        <div
          :style="{ height: '100px', width: '100px', background: '#fff', border: '1px solid gray' }"
        >
          测试按钮
        </div>
      </template>
    </y-popover>

    <y-popover class="space2" trigger="click" placement="right-end" content="我是内容">
      <template #reference>
        <div
          :style="{ height: '100px', width: '100px', background: '#fff', border: '1px solid gray' }"
        >
          测试按钮
        </div>
      </template>
    </y-popover>
  </div>
</template>

<style lang="less" scoped>
.box {
  position: relative;
}
.space {
  position: relative;
  top: -500px;
  left: 100px;
}
.space2 {
  position: relative;
  top: -500px;
  left: 300px;
}
</style>
