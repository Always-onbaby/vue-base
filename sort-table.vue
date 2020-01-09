<template>
  <div class="tab-wrap">
    <ElTable :data="data" :columns="columns"></ElTable>
  </div>
</template>
<script>
import ElTable from './table/el-table'
export default {
  components: {
    ElTable
  },
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '出生日期',
          key: 'birthday'
        },
        {
          title: '住址',
          key: 'address'
        },
        {
          title: '年龄',
          key: 'age',
          sortTable: true
        }
      ],
      data: [
        {
          name: '俞小凡1',
          age: 19,
          birthday: '1999-02-21',
          address: '北京市朝阳区芍瑶殿'
        },
        {
          name: '俞小凡2',
          age: 19,
          birthday: '1999-02-21',
          address: '北京市朝阳区芍瑶殿'
        },
        {
          name: '俞小凡3',
          age: 19,
          birthday: '1999-02-21',
          address: '北京市朝阳区芍瑶殿'
        },
        {
          name: '俞小凡4',
          age: 19,
          birthday: '1999-02-21',
          address: '北京市朝阳区芍瑶殿'
        }
      ]
    }
  }
}
</script>
<style lang="less">
// @import '//at.alicdn.com/t/font_1606356_28iws5teo36.css';
</style>