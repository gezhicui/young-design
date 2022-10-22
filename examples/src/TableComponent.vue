<template>
  <div class="content">
    <div>
      <table
        ref="table"
        :class="[
          'wapperTable',
          border ? 'border' : 'noboder',
          { zebra },
          { hover },
        ]"
      >
        <tr>
          <th style="width: 30px; text-align: center">
            <input
              type="checkbox"
              :checked="isChecked"
              ref="ischecked"
              @change="selectAll($event)"
            />
          </th>
          <th v-for="column in columns" :key="column.key">
            {{ column.title }}
          </th>
        </tr>
        <tr v-for="row in data" :key="row.id">
          <td style="width: 30px; text-align: center">
            <input
              type="checkbox"
              @change="selectItemsChange(row, $event)"
              :checked="ischecked2"
            />
          </td>
          <td v-for="col in columns" :key="col.key">
            {{ row[col.key] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    selectItems: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    border: {
      type: Boolean,
      default: false,
    },
    zebra: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: false,
      ischecked2: false,
      copySelectItems: [],
    };
  },
  methods: {
    selectItemsChange(row, e) {
      //深拷贝
      this.copySelectItems = JSON.parse(JSON.stringify(this.selectItems));
      if (e.target.checked) {
        //选中,添加
        this.copySelectItems.push(row);
      } else {
        //删除
        const index = this.copySelectItems.findIndex(
          (item) => item.id === row.id
        );
        this.copySelectItems.splice(index, 1);
      }
      //判断全选按钮
      if (this.data.length === this.copySelectItems.length) {
        this.$refs.ischecked.indeterminate = false;
        this.isChecked = true;
      } else if (
        this.data.length !== this.copySelectItems.length &&
        this.copySelectItems.length > 0
      ) {
        //设置半选状态
        this.$refs.ischecked.indeterminate = true;
      } else {
        this.$refs.ischecked.indeterminate = false;
        this.isChecked = false;
      }
      //将拷贝数组传给update
      this.$emit('update:selectItems', this.copySelectItems);
    },
    selectAll(e) {
      if (e.target.checked) {
        //全选
        this.ischecked2 = true;
        //将数组全部放入
        this.copySelectItems = [];
        this.copySelectItems = this.data;
      } else {
        this.ischecked2 = false;
        this.copySelectItems = [];
      }
      //将拷贝数组传给update
      this.$emit('update:selectItems', this.copySelectItems);
    },
  },
};
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.content {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
}
.wapperTable {
  text-align: left;
}
//有边框
.border {
  border-collapse: collapse;
  tr td {
    border: 1px solid #ddd;
  }
  tr th {
    border: 1px solid #ddd;
  }
}
//无边框
.noboder {
  tr td {
    border-bottom: 1px solid #ddd;
  }
  tr th {
    border-bottom: 1px solid #ddd;
  }
}
//斑马条纹
.zebra {
  tr:nth-child(even) {
    background: #ddd;
    opacity: 0.9;
  }
}
// 悬浮
.hover {
  tr:hover {
    cursor: pointer;
    background-color: #ddd;
  }
}
</style>
