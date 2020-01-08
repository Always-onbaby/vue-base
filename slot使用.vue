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
      return cr('div', [ex, this.$slots.default])
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