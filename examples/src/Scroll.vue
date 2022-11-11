<template>
  <div
    :style="{
      height: '100px',
      width: '200px',
      background: '#f1f2f3',
      marginBottom: '20px',
    }"
  ></div>
  <y-scroll :height="250" @onScroll="scroll">
    <div class="demo-scroll-item" v-for="item in count">{{ item }}</div>
  </y-scroll>

  <div :style="{ marginTop: '20px' }">
    <iframe
      width="100%"
      height="500px"
      src="http://localhost:8000/#/IntlCircuitDailyTable"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { getCurrentInstance, ref } from 'vue';
export default {
  setup() {
    const count = ref(10);
    const scroll = (val) => {
      // if (val >= 0.8) {
      //   count.value += 3;
      // }
    };
    return {
      scroll,
      count,
    };
  },
};
</script>

<style lang="less">
.y-scroll {
  width: 500px;
  .demo-scroll-item {
    padding: 20px 0;
    background-color: rgba(242, 235, 235, 0.2);
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;

    &:nth-of-type(odd) {
      background-color: rgba(134, 110, 110, 0.1);
    }
  }
}
</style>
