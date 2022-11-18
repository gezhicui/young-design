import { ExtractPropTypes } from 'vue';

export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  disabled: Boolean,
  size: String,
  clearable: Boolean,
  password: Boolean,
  prefixIcon: String,
  suffixIcon: String,
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
