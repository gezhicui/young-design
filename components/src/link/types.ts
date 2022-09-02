
import { ExtractPropTypes } from 'vue'

export const LinkType = ['primary', 'success', 'info', 'warning', 'danger']

export const linkProps = {
  type: {
    type: String,
    validator(value: string) {
      return LinkType.includes(value)
    }
  },
  disabled: Boolean,
  underline: Boolean
}

export type LinkProps = ExtractPropTypes<typeof linkProps>


