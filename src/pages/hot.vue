<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
      :src="bannerPicture"
        style="width: 100%;"
      ></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text class="text" v-for="(item,index) in subTypes" :key="item.id"
      :class="{active: index === currentIndex}"
      @click="currentIndex = index"
      >{{item.title}}</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view scroll-y class="scroll-view" 
    v-for="(item,index) in subTypes" :key="item.id"
    v-show="currentIndex === index"
    @scrolltolower="onScrollToLower">
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods?id=${goods.id}`"
        >
          <image
            class="thumb"
            :src="goods.picture"
          ></image>
          <view class="name ellipsis">{{goods.name}}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{goods.price}}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text" v-if="item.goodsItems.stop">正在加载...</view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import {getHotRecommendAPI} from '../services/hot'
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';

onLoad(()=>{
  //获取页面数据
  getHotRecommendData()
})



//路由传参
 const {type} = defineProps(['type'])

// 1.热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
//2.标题图片
let bannerPicture = ref()
//2.子分类
let subTypes = ref([])
//3.tab切换条
let currentIndex = ref(0)
//4.滚动条触底事件(结束条件)
let stop = ref(true)


//动态设置标题
const currUrlMap = hotMap.find(item => item.type === type) //返回一个对象，没找到就是undefined

//1.设置标题
uni.setNavigationBarTitle({
  title:currUrlMap.title,
})

// 2.动态获取数据
const getHotRecommendData = async() => {
  const res = await getHotRecommendAPI(currUrlMap.url,{
    // 判断是否是开发环境，是的话就起始页码设置为30，否则为1
    page:import.meta.env.DEV ? 2 : 1,
    pageSize:10,
    subType:''
  })
   //数组赋值
   bannerPicture.value = res.result.bannerPicture
   subTypes.value = res.result.subTypes
}

//4.当选项触底时，加载更多数据
const onScrollToLower = async() => {
  //获取当前选项
  let currsubTypes = subTypes.value[currentIndex.value]
  //当前的页码小于总页数
  if(currsubTypes.goodsItems.page < currsubTypes.goodsItems.pageSize){
        //获取当前的页码++
  currsubTypes.goodsItems.page ++
    currsubTypes.goodsItems.stop = true

  }else{
    uni.showToast({
      icon: 'none',
      title: '没有更多数据了',
      duration: 1000
    })
    currsubTypes.goodsItems.stop = false
    // console.log(currsubTypes.goodsItems.stop);
    
    return 
  }
  //获取当前的api进行调用渲染
  const res = await getHotRecommendAPI(currUrlMap.url,{
    subType:currsubTypes.id,
    page:currsubTypes.goodsItems.page,
    pageSize:currsubTypes.goodsItems.pageSize
  })
  
  // 新的数组
  let newGoodsItems = res.result.subTypes[currentIndex.value].goodsItems.items
  //数组赋值
  subTypes.value[currentIndex.value].goodsItems.items.push(...newGoodsItems)  
}






</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
height: 0;
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 315rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>