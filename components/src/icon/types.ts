import { ExtractPropTypes } from 'vue';

export const iconProps = {
  name: {
    type: String,
    default: 'close-circle',
  },
  size: {
    type: [String, Number],
    default: '16',
  },
  dot: Boolean,
  badge: String,
  color: String,
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
