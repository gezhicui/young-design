import { PropType, CSSProperties, ExtractPropTypes } from 'vue'

export type Shadow = 'always' | 'hover'

export const cardProps = {
  shadow: {
    type: String as PropType<Shadow>,
    validator: (v: Shadow): boolean => {
      return ['always', 'hover', ''].includes(v)
    }
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: (): null => null
  }
}


export type CardProps = ExtractPropTypes<typeof cardProps>