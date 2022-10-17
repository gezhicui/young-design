<template>
  <div class="gw-table-content">
    <!-- 需要表头固定，且表格可以滚动时的表头 -->
    <table class="gw-fixed-table" v-if="tableHeaderFixed">
      <thead
        :style="{
          backgroundColor: headerBackground
            ? 'hsla(200, 79%, 49%, 0.2)'
            : 'transparent',
          fontSize: headerFontSize || '18px',
        }"
      >
        <th style="width: 70px" v-if="serialNumber">序号</th>
        <th
          :class="{ ellipsis: headerEllipsis }"
          :width="h.width"
          v-for="(h, i) in columns"
          :key="i"
        >
          {{ h.label }}
        </th>
      </thead>
    </table>
    <div class="un-fixed-table-box">
      <table class="gw-table">
        <!-- 正常的表头，无固定 -->
        <thead
          v-if="!tableHeaderFixed"
          :style="{
            backgroundColor: headerBackground
              ? 'hsla(200, 79%, 49%, 0.2)'
              : 'transparent',
            fontSize: headerFontSize || '18px',
          }"
        >
          <th style="width: 70px" v-if="serialNumber">序号</th>
          <th
            :class="{ ellipsis: headerEllipsis }"
            :width="h.width"
            v-for="(h, i) in columns"
            :key="i"
          >
            {{ h.label }}
          </th>
        </thead>
        <tbody>
          <tr
            :class="{ dash: trDash }"
            v-for="(tr, ri) in dataSource"
            :key="ri"
          >
            <!-- 是否需要序号 -->
            <td style="width: 70px" v-if="serialNumber">{{ ri + 1 }}</td>
            <td
              :style="{
                ...td.style,
                padding: tdPadding,
                width: td.width,
              }"
              v-for="(td, key) in columns"
              :key="key"
            >
              <span :class="{ ellipsis: columnEllipsis }" :title="tr[td.key]">
                <!-- 当前列的插槽, -->
                <slot v-if="!td.slots">{{ tr[td.key] }}</slot>
                <slot v-else :name="td.slots" :rowData="tr"></slot>
                <!-- tr[td.key] 这个东西为什么能获取到当前这个key值的数据没太懂。。 -->
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    columns: {
      // 表头
      required: true,
      default: [],
    },
    dataSource: {
      // 表数据
      required: true,
      default: [],
    },
    serialNumber: {
      // 是否需要第一列的序列号
      required: false,
      default: false,
    },
    headerBackground: {
      // 是否需要表头的背景色
      required: false,
      default: false,
    },
    headerFontSize: {
      // 表头字体大小
      required: false,
      default: '',
    },
    tdPadding: {
      // td的padding值
      required: false,
      default: '',
    },
    headerEllipsis: {
      // thead是否超过宽度省略
      required: false,
      default: true,
    },
    columnEllipsis: {
      // td是否超过宽度省略
      required: false,
      default: true,
    },
    trDash: {
      // 每行加下边框
      required: false,
      default: false,
    },
    tableHeaderFixed: {
      // 表头是否固定
      required: false,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.gw-table-content {
  padding: 12px;
  height: calc(100% - 21px);
  .un-fixed-table-box {
    max-height: calc(100% - 44px);
    overflow-y: scroll;
  }
  .gw-table,
  .gw-fixed-table {
    width: 100%;
    max-height: 100%;
    position: relative;
    table-layout: fixed;
    thead {
      background-color: #1ba0e1;
      color: #00aaff;
      font-family: 'Adobe Heiti Std R';
      font-size: 17px;
      th {
        padding: 10px 12px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #00aaff;
      }
      th.ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    tbody {
      tr:nth-child(odd) {
        background-color: rgba(27, 160, 225, 0.05);
      }
      tr {
        overflow: hidden;
        color: #00aaff;
        td {
          padding: 11px 12px;
          font-size: 14px;
          border-right: 2px solid transparent;

          > span {
            max-width: 100%;
            display: inline-block;
          }
          > span.ellipsis {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      tr.dash {
        border-bottom: 1px dashed rgba(#1ba0e1, 0.3);
      }
    }
  }
}
</style>
