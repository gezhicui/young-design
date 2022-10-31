<template>
  <div class="k-shake" :class="{ ['k-shakeactive']: props.modelValue }">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import './style/index.less';
export default defineComponent({
  name: 'k-shake',
});
</script>
<script lang="ts" setup>
import { watch } from 'vue';
//v-model传来的值即为modelValue
type ShakeProps = {
  modelValue?: boolean;
};
//发送update:modelValue来配合v-model语法糖
type Emits = {
  (e: 'update:modelValue', value: boolean): void;
};

//获取props属性并且设置默认值
const props = withDefaults(defineProps<ShakeProps>(), {
  modelValue: false,
});
const emits = defineEmits<Emits>();

//监听modelValue，为true的话，1s后置为false
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        emits('update:modelValue', false);
      }, 1000);
    }
  },
  { immediate: true }
);
</script>
