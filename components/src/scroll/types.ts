import { PropType, ExtractPropTypes } from 'vue';

export const scrollProps = {
  height: {
    type: Number,
    default: 100,
  },
  to: Number,
  alwaysVisible: {
    type: Boolean,
    default: true,
  },
  size: {
    type: Number,
    default: 6,
  },
};

export type ScrollProps = ExtractPropTypes<typeof scrollProps>;
