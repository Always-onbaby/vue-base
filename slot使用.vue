<template>
  <div class="slot">
    <child-component>
      <p>父组件分发的内容</p>
    </child-component>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('child-component', {
  data() {
    return {
      msg: '子组件的内容'
    }
  },
  render(cr) {
    let ex = cr('div', {
      domProps: {
        innerHTML: this.msg
      }
    })
    if (this.$slots.default === undefined) {
      return ex
    } else {
      return cr('div', this.$slots.default)
    }
  }
})
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less">
</style>