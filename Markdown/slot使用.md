## slot的使用
Vue的`slot`主要分为：`单个插槽、具名插槽`和`作用域插槽`
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
      let ex = cr('div',{domProps:{innerHTML:this.msg}})
      return cr('div',[ex,this.$slots.default])
    }
  })
  export default {
    data() {
      return {}
    }
  }
</script>
```