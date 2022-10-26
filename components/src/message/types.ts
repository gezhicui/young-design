import { ExtractPropTypes } from 'vue';

export const messageType = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
};

export interface MessageFun {
  (options: MessageFunAttrs | string): void;
  success?: Function;
  warning?: Function;
  danger?: Function;
  info?: Function;
}

export interface MessageFunAttrs {
  type?: string;
  message: string;
  icon?:string;
  duration?: number;
  showClose?: boolean;
}

export const messageProps = {
  type: {
    type: String,
    default: messageType.INFO,
    validator(value: string) {
      return Object.values(messageType).includes(value);
    },
  },
  top: {
    type: Number,
    default: 20,
  },
  message: {
    type: String,
    required: true,
  },
  icon:String,
  duration: {
    type: Number,
    default: 3000,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  onDestroy: Function,
  onClose: Function,
};

export type MessageProps = ExtractPropTypes<typeof messageProps>;
