import { ExtractPropTypes } from 'vue';

export const messageType = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
};

export const MessageProps = {
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

export type MessageProps = ExtractPropTypes<typeof MessageProps>;
