
import { ExtractPropTypes } from 'vue'

export const iconProps = {
  name: {
    type: String,
    default: 'close-circle'
  },
  dot: Boolean,
  badge: String,
  color: String,
}
export type IconProps = ExtractPropTypes<typeof iconProps>