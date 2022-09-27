<template>
  <Dialog
    :visible="normalViaible"
    @cancel="handleClickCancelButton(1, 2, 3, $event)"
    @confirm="handleConfirmButton"
    title="这是标题"
    width="500px"
  >
    <!-- <template v-slot:headerContent>
      <div>我是 header：啊实打实大所</div>
    </template> -->
    这是内容这是内容这是内容这是内容这是内容
  </Dialog>
  <Button @click="changeNormalVisible">点击</Button>
</template>

<script lang="ts" setup>
// import { Options, Vue } from "vue-class-component";
import Dialog from "./src/Dialog.vue";
import { Button } from "young-design";
import { ref } from "vue";
// export default {
//   components: {
//     Dialog,
//   },
// };
const normalViaible = ref(false);
const changeNormalVisible = () => {
  console.log("changeNormalVisible");
  normalViaible.value = !normalViaible.value;
};

const handleClickCancelButton = () => {
  console.log("handleClickCancelButton");
  normalViaible.value = !normalViaible.value;
};

const handleConfirmButton = () => {
  console.log("handleConfirmButton");
  normalViaible.value = !normalViaible.value;
  alert("点击了确定");
};
</script>
