## slot 的使用

Vue 的`slot`主要分为：`单个插槽、具名插槽`和`作用域插槽`

### 单个插槽

在子组件中利用`<slot>`标签作为承载父组件分发内容的出口

```
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
```

在`this.$slots.default`等于`undefined`时，说明父组件中并没有传递任何内容，使用默认模板替代。
