<template>
  <div>
    <tabs v-model="activeKey">
      <table-pane label="标签一" name="1">标签一的内容</table-pane>
      <table-pane label="标签二" name="2">标签二的内容</table-pane>
      <table-pane label="标签三" name="3">标签三的内容</table-pane>
    </tabs>
  </div>
</template>
<script>
import TablePane from './tabs/Pane'
import Tabs from './tabs/Tabs'
export default {
  components: {
    Tabs,
    TablePane
  },
  data() {
    return {
      activeKey: '2'
    }
  }
}
</script>