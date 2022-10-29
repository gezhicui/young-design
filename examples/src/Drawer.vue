<template>
  <y-drawer
    :visible="normalViaible"
    @cancel="handleClose"
    @confirm="handleClose"
    title="这是标题"
    width="500px"
  >
    <!-- <template v-slot:headerContent>
      <div>
        我是 header：啊实打实大所 <Button @click="handleClose">点我关闭</Button>
      </div>
    </template> -->
    <!-- <template v-slot:footerContent>
      <div>我是 footer</div>
    </template> -->
    这是内容这是内容这是内容这是内容这是内容
  </y-drawer>
  <y-button @click="openDialog">点击</y-button>
</template>

<script lang="ts" setup>
// import { Options, Vue } from "vue-class-component";
//import Dialog from "./src/Dialog.vue";
// import { Button, Dialog } from "young-design";
import { ref } from 'vue';
// export default {
//   components: {
//     Dialog,
//   },
// };
const normalViaible = ref(false);
const openDialog = () => {
  normalViaible.value = true;
};

const handleClose = () => {
  normalViaible.value = false;
};
</script>
