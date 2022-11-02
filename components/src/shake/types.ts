import { PropType, ExtractPropTypes } from 'vue';

export const shakeProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 1000,
  },
};

export type ShakeProps = ExtractPropTypes<typeof shakeProps>;
