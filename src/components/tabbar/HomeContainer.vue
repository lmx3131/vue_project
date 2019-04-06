<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.img" alt="" srcset="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list:[]
    };
  },
  // 生命周期函数
  created(){
    this.getSwipe()
  },
  methods:{
    getSwipe(){
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
        console.log(res.body.message);
        if(res.body.status === 0){
          this.list = res.body.message
        }else{
          Toast("加载轮播图失败...")
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
}
.mint-swipe-item{
    img{
      width:100%;
      height: 200px;
    }
  }
</style>