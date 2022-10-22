import { PropType, ExtractPropTypes } from 'vue';

export type Align = 'left' | 'right' | 'center';
export interface columnsInterface {
  title: string;
  key: string;
  width?: string;
  slots: string;
}

export const tableProps = {
  data: {
    type: Array as PropType<unknown[]>,
    default: (): any[] => [],
  },
  columns: {
    type: Array as PropType<columnsInterface[]>,
    default: (): columnsInterface[] => [],
  },
  trHeight: {
    type: String,
    default: (): string => '40px',
  },
  align: {
    type: String as PropType<Align>,
    default: (): Align => 'left',
    validator: (v: Align): boolean => {
      return ['left', 'right', 'center', ''].includes(v);
    },
  },
  zebra: Boolean,
  border: Boolean,
  width: {
    type: String,
    default: (): string => '100%',
  },
  height: {
    type: String,
    default: (): string => 'auto',
  },
  num: Boolean,
  important: {
    type: Array as PropType<number[]>,
    default: (): number[] => [],
  },
  importantColor: {
    type: String,
    default: (): string => '#fdf5e6',
  },
  selectItems: {
    type: Array as PropType<unknown[]>,
    default: (): any[] => [],
  },
  rowSelect: Boolean,
  rowKey: {
    type: String,
    default: (): string => 'id',
  },
};

export type TableProps = ExtractPropTypes<typeof tableProps>;
