import { PropType, ExtractPropTypes } from 'vue';

export type Size = 'large' | 'medium' | 'small' | 'mini';

export type optionsItemValue = string | number;
export interface OptionsArray {
  [index: number]: {
    label: string;
    value: optionsItemValue;
    disabled?: boolean;
  };
}

export const radioProps = {
  modelValue: String,
  label: String,
  name: String,
  disabled: Boolean,
  border: Boolean,
  size: {
    type: String as PropType<Size>,
    default: (): Size => 'large',
    validator: (v: Size): boolean => {
      return ['large', 'medium', 'small', 'mini', ''].includes(v);
    },
  },
  options: {
    type: Object as PropType<OptionsArray>,
  },
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
