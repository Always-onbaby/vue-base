### router-view

`different router the same component vue`,在真实的场景中，这样的情况比较常见

```
{path: 'cerate', component: 'article', name: '发表文章'},
{path: 'edit/:id(\\d+)', component: 'article', name: '编辑文章'},
```

在创建和编辑的页面都是同一个`component`,默认情况下当两个页面切换时并不会触发 vue 的`create`和`mounted`钩子,官网说可以通过 watch \$route 的变化来做处理。  
一个简单的解决方案是在`router-view`上加上一个唯一的`key`值来解决。保证路由的切换都会重新渲染触发钩子

```
<router-view :key="key"></router-view>
...
computed: {
  key() {
    return this.$route.name !== undefined ? this.$route.name+ + new Date() : this.$route+ +new Date()
  }
}
```

### 侧边栏不能高亮的问题

在使用`element-ui`时侧边栏没有跟着自己的路由高亮,使用 elment-ui 官网给出的`default-active`属性

```
:default-active="$route.path"
```
