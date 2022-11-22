import { ExtractPropTypes, PropType } from 'vue';

export interface HTMLElementPlus extends HTMLElement {
  handler: (e: Event) => void;
}

export const selectProps = {
  modelValue: [String, Array],
  placeholder: String,
  // customClass: String,
  disabled: Boolean,
  searchable: Boolean,
  width: {
    type: [String, Number],
    default: '260px',
    validator: (v: string | number): boolean => {
      return parseInt(String(v)) > 100;
    },
  },
  // height: {
  //   type: String,
  //   default: '',
  // },
  options: {
    type: Array as PropType<any[]>,
    default: () => {
      return [];
    },
  },
  //默认需要显示的label字段
  fieldLabel: {
    type: String,
    default: 'label',
  },
  //默认需要显示的value字段
  fieldValue: {
    type: [String, Number],
    default: 'value',
  },
  multiple: Boolean,
};
export type SelectProps = ExtractPropTypes<typeof selectProps>;
