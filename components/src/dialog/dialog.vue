<template>
  <transition name="y-dialog-fade">
    <div v-show="visible" class="y-dialog-warpper">
      <div class="y-dialog-inner">
        <div class="y-dialog-box transition-inner" :style="`width:${width}`">
          <div>
            <slot name="headerContent" />
            <div class="y-dialog-header" v-if="showHeaderResult">
              <span class="y-dialog-title">
                {{ title }}
              </span>
              <Icon
                v-if="showClose"
                @click="onClickCancelButton"
                class="y-dialog-close"
                name="close"
              />
            </div>
          </div>

          <div class="y-dialog-body">
            <slot />
          </div>

          <div>
            <slot name="footerContent" />
            <div class="y-dialog-footer" v-if="showFooterResult">
              <Button v-if="showCancelButton" @click="onClickCancelButton">
                {{ cancelText }}
              </Button>
              <Button
                type="primary"
                v-if="showConfirmButton"
                @click="onClickConfirmButton"
              >
                {{ confirmText }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "y-dialog",
});
</script>

<script setup lang="ts" >
import "./style/index.less";
import { ref, defineEmits, useSlots } from "vue";
import Button from "../button/button.vue";
import Icon from "../icon/icon.vue";
import { dialogProps } from "./types.ts";

const props = defineProps(dialogProps);
const emit = defineEmits(["cancel", "confirm"]);
const slots = useSlots();

const onClickCancelButton = (e: Event) => {
  emit("cancel", e);
};

const onClickConfirmButton = (e: Event) => {
  emit("confirm", e);
};

// 自定义尾部
const showFooterResult = ref(true);
const footerContent = slots?.footerContent;

if (footerContent) {
  showFooterResult.value = false;
}

// 自定义头部
const showHeaderResult = ref(true);
const headerContent = slots?.headerContent;
if (headerContent) {
  showHeaderResult.value = false;
}
</script>

