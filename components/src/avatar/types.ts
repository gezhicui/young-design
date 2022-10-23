import { PropType, ExtractPropTypes } from 'vue';

export type Fit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export const avatarProps = {
  src: String,
  alt: String,
  size: {
    type: Number,
    default: (): number => 8,
  },
  fit: {
    type: String as PropType<Fit>,
    validator: (v: Fit): boolean => {
      return ['fill', 'contain', 'cover', 'none', 'scale-down', ''].includes(v);
    },
  },
  round: Boolean,
  border: Boolean,
  select: Boolean,
  draggable: Boolean,
  errorIcon: {
    type: String,
    default: 'close-circle',
  },
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
