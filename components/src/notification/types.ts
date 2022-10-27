import { ExtractPropTypes } from 'vue';

export const notificationType = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
};

export interface NotificationFun {
  (options: NotificationFunAttrs | string): void;
  success?: Function;
  warning?: Function;
  danger?: Function;
  info?: Function;
}

export interface NotificationFunAttrs {
  type?: string;
  message: string;
  description?: string;
  icon?: string;
  color?: string;
  duration?: number;
  showClose?: boolean;
}

export const notificationProps = {
  type: {
    type: String,
    validator(value: string) {
      return Object.values(notificationType).includes(value);
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
  description: String,
  icon: String,
  color: String,
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

export type NotificationProps = ExtractPropTypes<typeof notificationProps>;
