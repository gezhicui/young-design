import type { PropType, ExtractPropTypes } from 'vue';

export const rateProps = {
  modelValue: {
    type: Number as PropType<number>,
    default: (): number => 0,
  },
  iconName: {
    type: String,
    default: (): string => 'star-fill',
  },
  iconSize: {
    type: [String, Number],
    default: (): string => '20',
  },
  effectColor: {
    type: String,
    default: (): string => '#fbcc30',
  },
  invalidColor: {
    type: String,
    default: (): string => '#C6D1DE',
  },
  showText: Boolean,
  textArr: {
    type: Array as PropType<string[]>,
    default: (): string[] => ['极差', '失望', '一般', '惊喜', '满意'],
  },
};

export type RadioProps = ExtractPropTypes<typeof rateProps>;
