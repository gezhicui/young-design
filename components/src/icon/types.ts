import { ExtractPropTypes,PropType,CSSProperties } from 'vue';

export const iconProps = {
  name: {
    type: String,
    default: 'close-circle',
  },
  iconStyle:{
    type:Object as PropType<CSSProperties>,
    default:()=>{}
  },
  iconClass:String,
  size: {
    type: [String, Number],
    default: '16',
  },
  dot: Boolean,
  badge: String,
  color: String,
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
