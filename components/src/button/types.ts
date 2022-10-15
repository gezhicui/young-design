import { PropType, ExtractPropTypes } from 'vue';

export type Type =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text';
export type Size = 'medium' | 'small' | 'mini';
export const ButtonType = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'text',
];
export const ButtonSize = ['medium', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String as PropType<Type>,
    validator(value: Type) {
      return ButtonType.includes(value);
    },
  },
  size: {
    type: String as PropType<Size>,
    validator(value: Size) {
      return ButtonSize.includes(value);
    },
  },
  iconSize: {
    type: [String, Number],
    default: '16',
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: String,
  iconPosition: String,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
