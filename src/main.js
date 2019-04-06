import Vue from 'vue'

// 按需导入部分组件
import { Button, Cell, Header, Swipe, SwipeItem } from "mint-ui"

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import App from './App.vue'

// 导入mui框架
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 导入vue-
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 全局引入mint-ui(这个不好我们最好按需导入)
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint)


const vm = new Vue({
    el: '#app',
    render: h => h(App),
    router
})