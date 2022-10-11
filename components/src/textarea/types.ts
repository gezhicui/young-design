import { PropType, ExtractPropTypes } from 'vue'

export type Resize = 'vertical' | 'horizontal' | 'none' | 'both'


export const textareaProps = {
  modelValue: String,
  placeholder: String,
  max: [Number, String] as PropType<number | string>,
  rows: {
    type: String,
    default: (): string => '3'
  },
  cols: {
    type: String,
    default: (): string => '70'
  },
  resize: {
    type: String as PropType<Resize>,
    default: (): Resize => 'both',
    validator: (v: Resize): boolean => {
      return ['vertical', 'horizontal', 'none', 'both'].includes(v)
    }
  },
  disabled: Boolean,
  autofocus: Boolean,
  name: String
}

export type TextareaProps = ExtractPropTypes<typeof textareaProps>