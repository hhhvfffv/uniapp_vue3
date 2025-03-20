<template>
 <CustomNavbar />
 <XtxSwiper :list="bannerList"/>
 <CategoryPanel :list="categoryList"/>
 <HotPanel :list="hotList"/>
 <view class="index">index</view>
</template>

<script setup>
//引入组件
import CustomNavbar from '../components/CustomNavbar.vue'
import CategoryPanel from '../components/CategoryPanel.vue'
import HotPanel from '../components/HotPanel.vue'
import {getHomeBannnerAPI,getCategoryAPI,getHomeHotAPI} from '@/services/home'

import { ref,watch } from 'vue';
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';

// 页面加载时调用
onLoad(()=>{
//1.调用加载图片的方法
  getHomeBannerData(),
  //2.调用分类的方法
  getCategoryData()
  //3.调用热门推荐的方法
  getHomeHotData()
})

//1. 图片的数组
const bannerList = ref([])
//2. 分类的数组
const categoryList = ref([])
//3. 热门推荐的数组
const hotList = ref([])

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




</script>

<style lang="scss">
page{
  background-color: #f7f7f7;
}

</style>
