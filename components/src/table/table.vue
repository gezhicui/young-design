<template>
  <!-- {{ JSON.stringify(selectItems) }} -->
  <div class="y-table" :style="{ height }">
    <table
      class="y-origin-table"
      border="0"
      cellspacing="0"
      cellpadding="0"
      :width="width"
    >
      <thead class="y-thead">
        <tr class="y-thead-th" :height="trHeight">
          <th v-if="rowSelect" style="width: 30px; text-align: center">
            <input
              ref="checkAllBox"
              type="checkbox"
              @change="selectAllChange($event)"
            />
          </th>
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
          <td v-if="rowSelect" style="width: 30px; text-align: center">
            <input
              type="checkbox"
              @change="selectItemsChange(dataItem, $event)"
              :checked="isRowChecked"
            />
          </td>
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

<script lang="ts">
export default { name: 'y-table' };
</script>
<script lang="ts" setup>
import { tableProps } from './types';
import { ref, reactive, toRef, watch } from 'vue';
import type { CSSProperties } from 'vue';
import './style/index.less';

const props = defineProps(tableProps);
// const propsselectItems = toRef(props, 'selectItems');

const emit = defineEmits(['update:selectItems']);

const importantStyle = (i: number): CSSProperties => {
  const importants: number[] = props.important;
  for (const key of importants) {
    if (key === i + 1) {
      return { background: props.importantColor };
    }
  }
  return {};
};

const isBorder = (): object => {
  return { 'y-table-border': props.border };
};

const isRowChecked = ref(false);
const isAllChecked = ref(false);
const copySelectItems = ref([] as Array<unknown>);

const selectAllChange = (e: Event): void => {
  //深拷贝
  copySelectItems.value = JSON.parse(JSON.stringify(props.selectItems));
  if ((e.target as HTMLInputElement).checked) {
    //全选
    isRowChecked.value = true;
    //将数组全部放入
    copySelectItems.value = props.data;
  } else {
    isRowChecked.value = false;
    copySelectItems.value = [];
  }
  emit('update:selectItems', copySelectItems.value);
};

const selectItemsChange = (dataItem: any, e: Event) => {
  copySelectItems.value = JSON.parse(JSON.stringify(props.selectItems));
  if ((e.target as HTMLInputElement).checked) {
    //选中,添加
    copySelectItems.value.push(dataItem);
  } else {
    //删除
    const index = copySelectItems.value.findIndex(
      (item: any) => item[props.rowKey] === dataItem[props.rowKey]
    );
    copySelectItems.value.splice(index, 1);
  }
  changeCheckboxStatus();
  emit('update:selectItems', copySelectItems.value);
};

const checkAllBox = ref();

const changeCheckboxStatus = () => {
  if (checkAllBox.value) {
    console.log('changeCheckboxStatus', checkAllBox.value);
    if (props.data.length === copySelectItems.value.length) {
      checkAllBox.value.indeterminate = false;
      isAllChecked.value = true;
    } else if (
      props.data.length !== copySelectItems.value.length &&
      copySelectItems.value.length > 0
    ) {
      //设置半选状态
      checkAllBox.value.indeterminate = true;
    } else {
      checkAllBox.value.indeterminate = false;
      isAllChecked.value = false;
    }
  }

  console.log(checkAllBox);
};
</script>
