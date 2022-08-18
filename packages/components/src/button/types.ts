
import { ExtractPropTypes } from 'vue'

export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger', 'text']
export const ButtonSize = ['midium', 'small', 'mini'];

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      //这里表示type只能接收这些值
      return ButtonType.includes(value)
    }
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
