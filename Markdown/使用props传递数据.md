## 使用props传递数据
### 基本用法
在Vue组件中，最重要的俩个特点`组件内容的复用 组件之间的通信`。通常父组件的模板中包含子组件，父组件需要正向传递参数或者数据，而子组件根据父组件传递来的参数进行对应的显示或者操作，这个正向传递的过程就是通过porps来完成的。  
props参数的传递一般有`数组和对象`两种方式。

数组的用法  
* 传递的多个数据直接在props的数组中添加项即可
* props数据与data中return的数据作用域不同。两种数据都可以在template模板、computed计算属性、methods方法中使用。
```
<div id="app">
  <my-component mesage="来自父组件的信息" message2="这是传递的第二个信息"></my-component>
</div>
<script>
  Vue.component('my-component', {
    props: ['message','message2'],
    template: '<div>{{message,message2}}</div>'
  })
</script>
```
### 数据验证
当传递的数据需要验证其类型时，需要使用对象写法

对象用法
```
Vue.component('my-component', {
  props: {
    propA: Number

    propB: [String,Number]

    propC: {
      type: Boolean,
      default: true
    }

    propD: {
      type: Array,
      default: {
        return: []
      }
    }

    propE: {
      validator: function(value) {
        return value > 10
      }
    }
  }
})
```
