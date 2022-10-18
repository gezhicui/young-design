<script lang="ts">
export default { name: 'y-table' };
</script>
<script lang="ts" setup>
import { tableProps } from './types';
import type { CSSProperties } from 'vue';
import './style/index.less';

const prop = defineProps(tableProps);

const importantStyle = (i: number): CSSProperties => {
  const importants: number[] = prop.important;
  for (const key of importants) {
    if (key === i + 1) {
      return { background: prop.importantColor };
    }
  }
  return {};
};

const isBorder = (): object => {
  return { 'y-table-border': prop.border };
};
</script>

<template>
  <div class="y-table" :style="{ height }">
    <table
      class="y-table-table"
      border="0"
      cellspacing="0"
      cellpadding="0"
      :width="width"
    >
      <thead class="y-thead">
        <tr class="y-thead-th" :height="trHeight">
          <th
            v-if="num"
            :class="[`y-thead-td`, isBorder()]"
            :align="align || 'left'"
          />
          <th
            v-for="(item, i) in columns"
            :key="i"
            :class="[`y-thead-td`, isBorder()]"
            :width="item.width"
            :align="align || 'left'"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>

      <tbody class="y-tbody">
        <tr
          v-for="(dataItem, ind) in (data as any)"
          :key="ind"
          :class="[
            'y-tbody-tr',
            {
              'y-tbody-tr-zebra': zebra,
            },
          ]"
          :height="trHeight"
          :style="importantStyle(ind)"
        >
          <td
            v-if="num"
            :class="[`y-tbody-td`, isBorder()]"
            :align="align || 'left'"
          >
            {{ ind + 1 }}
          </td>
          <td
            v-for="(colItem, index) in (columns as any)"
            :key="index"
            :style="{ width: `${colItem.width * 10}px` }"
            :class="[`y-tbody-td`, isBorder()]"
            :align="align || 'left'"
          >
            <div v-if="!colItem.slots">{{ dataItem[colItem.key] }}</div>
            <div v-else>
              <slot :name="colItem.slots" :rowData="dataItem"></slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
