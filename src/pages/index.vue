<template>
 <CustomNavbar />
 <XtxSwiper :list="bannerList"/>
 <view class="index">index</view>
</template>

<script setup>
//引入组件
import CustomNavbar from '../components/CustomNavbar.vue'
import {getHomeBannnerAPI} from '@/services/home'

import { ref,watch } from 'vue';
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';

// 页面加载时调用
onLoad(()=>{
//1.调用加载图片的方法
  getHomeBannerData()
})

//1. 图片的数组
const bannerList = ref([])

//1.封装获取轮播图的方法
const getHomeBannerData = async()=>{
  const res = await getHomeBannnerAPI()
  //赋值给数组
  bannerList.value = res.result
//   console.log(bannerList.value);
  
}




</script>

<style lang="scss">


</style>
