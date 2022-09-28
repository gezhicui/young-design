import { ExtractPropTypes } from 'vue'

export const dialogProps = {
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
  }
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>