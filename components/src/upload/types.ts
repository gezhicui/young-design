
import { ExtractPropTypes } from 'vue'


export const uoloadType = {
  multiple: Boolean,
  accept: String,
  drag: Boolean
}

export type LinkProps = ExtractPropTypes<typeof uoloadType>


