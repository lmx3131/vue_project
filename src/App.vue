<template>
  <div  class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- /顶部 Header 区域 -->
    <!-- 中间 路由 router-view 区域 -->
    <h3>主体部分</h3>
    <!-- /中间 路由 router-view 区域 -->
    <!-- 底部 tab-bar 区域 -->
    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                <span class="mui-badge">0</span>
            </span>
            <span class="mui-tab-label">购物车</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </a>
    </nav>
    <!-- /底部 tab-bar 区域 -->
    
  </div>
</template>

<script>
import { Toast } from "mint-ui"
Toast("提示信息");
export default {};
</script>

<style lang="scss" scoped>
.app-container{
    padding-top: 40px
}
</style>
