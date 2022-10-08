import { PropType, ExtractPropTypes } from 'vue'

export type Type = 'circle' | 'square'
export const SwitchType = ['circle', 'square']

export const switchProps = {
  modelValue: Boolean,
  closeColor: {
    type: String,
    default: '#dcdfe6'
  },
  openColor: {
    type: String,
    default: '#3a6ff4'
  },
  type: {
    type: String as PropType<Type>,
    validator(value: Type) {
      return SwitchType.includes(value)
    }
  },
  closeText: String,
  openText: String,
  disabled: Boolean,
  width: {
    type: Number,
    default: 40
  }
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>