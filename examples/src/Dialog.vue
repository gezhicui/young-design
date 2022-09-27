<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="y-dialog-warpper">
      <div class="y-dialog-inner">
        <div class="y-dialog-box border-radius inner" :style="`width:${width}`">
          <div>
            <slot name="headerContent" />
            <div class="y-dialog-header" v-if="showHeaderResult">
              <h3 class="y-dialog-title">
                {{ title }}
              </h3>
              <span
                v-if="showClose"
                @click="onClickCancelButton"
                class="y-dialog-close"
                >X</span
              >
            </div>
          </div>

          <div class="y-dialog-body margin-tb-12">
            <slot />
          </div>

          <div>
            <slot name="footerContent" />
            <div class="y-dialog-footer" v-if="showFooterResult">
              <Button
                v-if="showCancelButton"
                @click="onClickCancelButton"
                mode="text"
              >
                {{ cancelText }}
              </Button>
              <Button v-if="showConfirmButton" @click="onClickConfirmButton">
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
import { ComponentInternalInstance, getCurrentInstance, ref } from "vue";

import { Button } from "young-design";

export default {
  props: {
    // dialog标题
    title: {
      required: false,
      default: "",
      type: String,
    },
    // dialog 是否出现
    visible: {
      required: false,
      default: false,
      type: Boolean,
    },
    // cancel 按钮的文字
    cancelText: {
      required: false,
      default: "取消",
      type: String,
    },
    // confirm按钮的文字
    confirmText: {
      required: false,
      default: "确认",
      type: String,
    },
    // 是否需要头部 头部包含关闭按钮 默认为true
    showHeader: {
      required: false,
      default: true,
      type: Boolean,
    },
    // 是否需要footer 默认为true 如果为false confirm 和 concel按钮将会消失
    showFooter: {
      required: false,
      default: true,
      type: Boolean,
    },
    // 是否需要close 默认true 如果为false右上角的关闭x将不显示
    showClose: {
      required: false,
      default: true,
      type: Boolean,
    },
    // 是否需要cancel按钮 默认为true 如果为false,cancel按钮将不会显示
    showCancelButton: {
      required: false,
      default: true,
      type: Boolean,
    },
    // 是否需要confirm按钮 默认为true 如果为false,confir按钮将不会显示
    showConfirmButton: {
      required: false,
      default: true,
      type: Boolean,
    },
    // 自定义宽度 默认auto
    width: {
      required: false,
      default: "auto",
      type: String,
    },
  },
  components: {
    Button,
  },
  setup(propsData) {
    console.log(propsData);

    const currentInstance: ComponentInternalInstance | null =
      getCurrentInstance();

    function onClickCancelButton(e: Event) {
      currentInstance?.emit("cancel", e);
    }

    function onClickConfirmButton(e: Event) {
      currentInstance?.emit("confirm", e);
    }

    // 自定义尾部
    const showFooterResult = ref(propsData.showFooter);
    const footerContent = currentInstance?.slots.footerContent;

    if (footerContent) {
      showFooterResult.value = false;
    }

    // 自定义头部
    const showHeaderResult = ref(propsData.showHeader);
    const headerContent = currentInstance?.slots.headerContent;

    if (headerContent) {
      showHeaderResult.value = false;
    }

    return {
      showHeaderResult,
      showFooterResult,
      onClickCancelButton,
      onClickConfirmButton,
    };
  },
};
</script>

<style lang="less" scoped>
.y-dialog-warpper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  user-select: none;

  .y-dialog-inner {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    .y-dialog-box {
      // width: 460px;
      display: inline-block;
      padding: 24px 24px 12px 24px;
      background: #fff;
      text-align: left;
    }
  }

  .y-dialog-header {
    position: relative;
    display: flex;
    .y-dialog-title {
      line-height: 30px;
      width: calc(100% - 30px);
    }
    .y-dialog-close {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }

  .y-dialog-footer {
    text-align: right;
  }
}

.dialog-fade-enter-to,
.dialog-fade-leave-from {
  transition: all 0.2s linear;
  opacity: 1;
}
.dialog-fade-enter-from,
.dialog-fade-leave-to {
  transition: all 0.2s linear;
  opacity: 0;
}

.dialog-fade-enter-to .inner,
.dialog-fade-leave-from .inner {
  transition: all 0.2s linear;
  opacity: 1;
}
.dialog-fade-enter-from .inner,
.dialog-fade-leave-to .inner {
  transform: translateY(-20px);
  transition: all 0.2s linear;
  opacity: 0;
}
</style>
