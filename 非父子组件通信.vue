<template>
  <div class="message">
    <span class="msg">{{message}}</span>
    <my-component></my-component>
  </div>
</template>
<script>
import Vue from 'vue'
let bus = new Vue()
Vue.component('my-component', {
  data() {
    return {
      msg: 'this is from child message!'
    }
  },
  methods: {
    handleEvent() {
      bus.$emit('on-message', this.msg)
    }
  },
  render(cr) {
    return cr('div', { on: { click: this.handleEvent } }, ['传递事件'])
  }
})
export default {
  data() {
    return {
      message: 'this is a placeholder'
    }
  },
  mounted() {
    let _this = this
    bus.$on('on-message', function(msg) {
      _this.message = msg
    })
  }
}
</script>