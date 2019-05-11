# 思否 vue技术栈开发实战

## #vue-cli 3.0 配置
	vue ui 用UI控制
	vue.config.js
```javascript
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/ivew-admin/' : '/'

module.exports = {
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
// 打包时候不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
```
1. Src/api用于处理数据 axios等
2. Src/img用于静态资源
3. Src/config用于用户配置
4. Src/router用于vue-router
	内含index.js
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)
export default new Router({
  routes
})
```
	router.js用于具体配置
5. Src/store用作vuex
6. src/directive
7. Src/lib工具配置
8. src/mock用于 mockjs 模拟数据

## #路由配置
1. 带参数路由
```javascript
{
    path: '/argu/:name',
    component: () =>*import*('@/views/argu.vue')
}
```
2. 父子路由
```javascript
{
    path: '/parent',
    component: () =>*import*('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () =>*import*('@/views/child.vue')
      }
    ]
}
```
3. 命名路由
Router-link中 使用to标签进行跳转
`<router-link :to=“{ name: ‘home’ }”>Home</router-link> `
4. 多个组件
5. 重定向


## #高级路由配置

1. 传参数三种方式 直接传，对象传，函数传

2. beforeEach

```javascript
router.beforeEach((to, from, next) => {
if (to.name !== 'login') {
if (HAS_LOGINED) next()
else next({ name: 'login' })
  }else {
if (HAS_LOGINED) next({ name: 'home' })
else next()
  }
})
```

3. afterEach

```javascript
router.afterEach((to,*from*)=> {
*// logining = false*
})
```

4. beforeResolve

*完整导航流程*
* 1.导航被触发
* 2.在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
* 3.调用全局的前置守卫 beforeEach
* 4.在重用的组件里调用 beforeRouteUpdate
* 5.调用路由独享的守卫 beforeEnter
* 6.解析异步路由组件
* 7.在被激活的组件（即将进入的页面组件）里调用beforeRouteEnter
* 8.调用全局的解析守卫 beforeResolve
* 9.导航正式被确认
* 10. 确认之后调用全局的后置守卫 afterEach
* 11. 触发DOM更新
* 12.用创建好的实例调用beforeRouteEnter守卫里传给next的回调函数

路由源信息 用meta标签传属性 如title 在router/index.js里面的beforeEach做判断是否要进行修改

数据传输三种方式
* bus总线 this.$bus
* vuex

对于store/module里面的user.js 在index.js中直接在computed方法中定义
```javascript
...mapState({
  userName: state => state.user.userName
})
...mapState([
	'username'
])
```
或者开启命名空间
```javascript
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
```
这样就不用再state里面申明state.user.userName 直接用state.userName就可以了
mapGetters 用法和mapState一样
