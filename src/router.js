import VueRouter from 'vue-router'


// 导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

var router = new VueRouter({
    routes: [
        { path:"/", redirect:"/home" },
        { path:"/home", component:HomeContainer },
        { path:"/member", component:MemberContainer },
        { path:"/search", component: SearchContainer },
        { path:"/shopcar", component: ShopcarContainer}
    ],
    // 修改路由点击时候的类样式
    linkActiveClass:'mui-active'
})

export default router