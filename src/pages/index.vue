<template>
 <CustomNavbar />
 <!-- /**
 *这里是需要滚动的但是不能带着标题栏一起滚动
 *所以这里用了一个scroll-view组件
 */ -->
 <!-- //refresher-enabled开启下拉刷新 -->
<scroll-view scroll-y class="index-scroll" 
@scrolltolower="GetScrollButton"
:refresher-enabled="true" @refresherrefresh="getNewData"
:refresher-triggered="isGetNewDate_" >
    <!-- 骨架 -->
    <PageSkeleton v-if="isOnLoad"/>
<template v-else>
    <!-- // 轮播图 -->
      <XtxSwiper :list="bannerList"/>
  <!-- // 分类展示 -->
       <CategoryPanel :list="categoryList"/>
       <HotPanel :list="hotList"/>
  <!-- // 猜你喜欢 -->
       <XtxGuess ref="Getref"/>
</template>
</scroll-view>
</template>

<script setup>
//引入组件
import CustomNavbar from '../components/CustomNavbar.vue'
import CategoryPanel from '../components/CategoryPanel.vue'
import HotPanel from '../components/HotPanel.vue'
import PageSkeleton from '../components/PageSkeleton.vue'    // 引入页面骨架屏组件
import {getHomeBannnerAPI,getCategoryAPI,getHomeHotAPI} from '@/services/home'

import { ref,watch } from 'vue';
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';

// 页面加载时调用
onLoad(async()=>{
  isOnLoad.value = true//骨架屏显示
await Promise.all([
  //1.调用加载图片的方法
  getHomeBannerData(),
  //2.调用分类的方法
  getCategoryData(),
  //3.调用热门推荐的方法
  getHomeHotData()
])
isOnLoad.value = false//骨架屏消失
})

//1. 图片的数组
const bannerList = ref([])
//2. 分类的数组
const categoryList = ref([])
//3. 热门推荐的数组
const hotList = ref([])
//4.下拉刷新猜你喜欢获取更多数据
const Getref = ref()
//5.下拉刷新完成关闭动画
const isGetNewDate_ = ref(false)
//6.骨架屏是否显示
const isOnLoad = ref(false)

//1.封装获取轮播图的请求
const getHomeBannerData = async()=>{
  const res = await getHomeBannnerAPI()
  //赋值给数组
  bannerList.value = res.result
}

//2.首页——分类展示请求
const getCategoryData = async()=>{
  const res = await getCategoryAPI()
  //赋值给数组
  categoryList.value = res.result
}

//3.首页——热门推荐请求
const getHomeHotData = async()=>{
  const res = await getHomeHotAPI()
  //赋值给数组
  hotList.value = res.result
}

//4.页面触底时，向猜你喜欢发送请求，获取猜你喜欢的数据并渲染
const GetScrollButton = ()=>{
  console.log("我到页面底部咯，嘿嘿");
  Getref.value?.GetMore()
  
}

//5.下拉刷新
const getNewData = async()=>{
  //开启动画
  isGetNewDate_.value = true
  Getref.value?.resetData()
  Getref.value?.GetMore()
  //重新请求数据
  await Promise.all([getHomeBannerData(),getCategoryData(),getHomeHotData()])
  //关闭动画
  isGetNewDate_.value = false
}


</script>

<style lang="scss">
page{
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.index-scroll{
  // 因为给不给他一个高就无法判断滚动条的高度，所以给他一个最小高度
  height: 0;
  flex: 1;
}


</style>
