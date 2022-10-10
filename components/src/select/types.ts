import { ExtractPropTypes } from 'vue'


export const selectProps = {
  options: {
    type: Array,
    default: () => [],
  },
  disabled: Boolean,
  fieldLabel: {
    type: String,
    default: "label",
  },
  fieldValue: {
    type: String,
    default: "value",
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  modelValue: String,
}

export type SelectProps = ExtractPropTypes<typeof selectProps>