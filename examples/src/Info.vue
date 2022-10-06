<template>
  <y-info userInfo="Tyh2001" describe="hello world">
    <template v-slot:photo>
      <y-avatar
        round
        :size="5"
        errorIcon="warning-circle"
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      />
    </template>
    <template v-slot:right>
      <y-button simple type="primary" size="mini">关注 TA</y-button>
    </template>

    <template v-slot:body>
      <span>这是我今天拍的照片，好看吗？</span>
      <img
        style="display: block"
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      />
    </template>

    <template v-slot:footer>
      <span type="danger">2022-02-12</span>
    </template>
  </y-info>
</template>