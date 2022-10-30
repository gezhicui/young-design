import { ExtractPropTypes, PropType } from 'vue';

export type Direction = 'top' | 'left' | 'bottom' | 'right';

export const drawerProps = {
  // drawer标题
  title: {
    required: false,
    default: '',
    type: String,
  },
  // drawer 是否出现
  visible: {
    required: false,
    default: false,
    type: Boolean,
  },
  // cancel 按钮的文字
  cancelText: {
    required: false,
    default: '取消',
    type: String,
  },
  // confirm按钮的文字
  confirmText: {
    required: false,
    default: '确认',
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
  closable: {
    required: false,
    default: true,
    type: Boolean,
  },
  //点击蒙层是否关闭
  maskClosable: {
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
  // 自定义宽度 默认30%
  size: {
    required: false,
    default: '30%',
    type: String,
  },
  // 自定义弹出方向
  direction: {
    type: String as PropType<Direction>,
    default: (): Direction => 'right',
    validator: (v: Direction): boolean => {
      return ['top', 'left', 'bottom', 'right', ''].includes(v);
    },
  },
};

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
