<template>
  <div class="el-table">
    <table>
      <thead>
        <tr>
          <th v-for="item of currentColumns" :key="item._index">
            <span>
              {{item.title}}
              <i class="el-paixu-shengxu"></i>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of currentData" :key="item.index">
          <td v-for="col of currentColumns" :key="col.key">
            <span>{{item[col.key]}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      currentColumns: [],
      currentData: []
    }
  },
  methods: {
    makeColumns() {
      this.currentColumns = this.columns.map((col, index) => {
        return {
          ...col,
          _sortType: 'normal',
          _index: index
        }
      })
    },
    makeData() {
      this.currentData = this.data.map((row, index) => {
        return {
          ...row,
          _index: index
        }
      })
    }
  },
  mounted() {
    this.makeColumns()
    this.makeData()
  }
}
</script>
<style lang="less">
@import '//at.alicdn.com/t/font_1606356_28iws5teo36.css';
[class^='el-'] {
  font-family: iconfont !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;

  color: #606266;
  margin: 0 6px;
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;
}
</style>