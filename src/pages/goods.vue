
<template>
  <scroll-view scroll-y class="viewport">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper circular 
              @change="changeIndex"
        class="swiper_">
          <swiper-item 
          class="swiper-item"
          v-for="item in goods.mainPictures"
              :key="item"
             >
            <image
            style="width: 100%;height: 100%;"
              mode="scaleToFill"
              @tap="onImageBag(item)"
               :src="item"
            />
            </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">{{IndexSwiper}}</text>
          <text class="split">/</text>
          <text class="total">{{total}}</text>
        </view>
      </view>

      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{goods.price}}</text>
        </view>
        <view class="name ellipsis">{{ goods.name}}</view>
        <view class="desc"> {{goods.desc}} </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis"> 请选择商品规格 </text>
        </view>
        <view class="item arrow" @tap="popupShow('address')">
          <text class="label">送至</text>
          <text class="text ellipsis"> 请选择收获地址 </text>
        </view>
        <view class="item arrow" @tap="popupShow('service')">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>

    <!-- 商品详情 -->
      <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item" v-for="item in properties" :key="item.name">
            <text class="label">{{item.name}}</text>
            <text class="value">{{item.value}}</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
        style="width: 100%;height: 100%;"
          mode="widthFix"
          v-for="item in pictures"
          :key="item"
          :src="item"
        ></image>
        
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator
          v-for="item in similarProducts"
          :key="item.id"
          class="goods"
          hover-class="none"
          :url="`/pages/goods?id=${item.id}`"
        >
          <image
            class="image"
            mode="aspectFill"
            :src="item.picture"
          ></image>
          <view class="name ellipsis">{{item.name}}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{item.price}}</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <navigator class="icons-button" url="/pages/cart/cart" open-type="switchTab">
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view class="addcart"> 加入购物车 </view>
      <view class="buynow"> 立即购买 </view>
    </view>
  </view>

  <!-- 弹出层 -->
   <uni-popup
    ref="popup"
    type="top"
    background-color="#ffffff"
   >
   <AddressPanel @close="popup.close()" v-show="isPopupShow === 'address'"/>
   <ServicePanel @close="popup.close()" v-show="isPopupShow ==='service'"/>
   </uni-popup>
</template>

<script setup>
import { getGoodsListAPI } from '../services/goods'
import {AddressPanel} from '../components/goods/AddressPanel.vue'
import {ServicePanel} from '../components/goods/ServicePanel.vue'
import { computed, ref } from 'vue'
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';


//1.获取路由传参
const {id} = defineProps(['id'])

onLoad(async()=>{
  await getGoodsData()
})

// 0.获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getWindowInfo()
//1.获取页面的数据
const goods = ref([])
const properties = ref([])
const pictures = ref([])
const similarProducts = ref([])
//2.轮播图下标同步切换
const IndexSwiper = ref(1)
const total = ref(10)
//3.弹出层
const popup = ref()
//4.弹出层判断，地址和退货
const isPopupShow = ref("address")










//1.获取页面的数据
const getGoodsData = async()=>{
  const res = await getGoodsListAPI(id)
  goods.value = res.result
  properties.value = res.result.details.properties
  pictures.value = res.result.details.pictures
  similarProducts.value = res.result.similarProducts
  total.value = goods.value.mainPictures.length
  console.log(goods.value);
  
}

//2.轮播图下标同步切换
const changeIndex = (ev)=>{
  IndexSwiper.value = ev.detail.current + 1
}

//3.点击大图预览
const onImageBag = (url)=>{
  uni.previewImage({
  current: url, // 当前显示图片的http链接
  urls: goods.value.mainPictures // 需要预览的图片http链接列表
})
}

//4.弹出层判断，地址和退货
const popupShow = (name)=>{
  //判断是否哪个弹出层
  isPopupShow.value = name
  //打开弹出层
  popup.value.open("bottom")
}

</script>


<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  height: 100%;
  background-color: #f4f4f4;
}

.panel {
  margin-top: 20rpx;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }
    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: '\e6c2';
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 商品信息 */
.goods {
  background-color: #fff;
  .preview {
    height: 750rpx;
    position: relative;
    .image {
      width: 750rpx;
      height: 750rpx;
    }
    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
      .current {
        font-size: 26rpx;
      }
      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }
      .total {
        font-size: 24rpx;
      }
    }
  }
  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;
    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #35c8a9;
    }
    .number {
      font-size: 56rpx;
    }
    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }
    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }
  .action {
    padding-left: 20rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
    .image {
      width: 100%;
    }
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  .content {
    padding: 0 10rpx 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    .goods {
      width: 310rpx;
      padding: 54rpx 20rpx 20rpx;
      margin: 20rpx 7rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }
    .image {
      width: 300rpx;
      height: 260rpx;
    }
    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }
    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #cf4444;
    }
    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }
  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  height: 100rpx;
  padding: 0 20rpx var(--window-bottom);
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  .buttons {
    display: flex;
    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .addcart {
      background-color: #ffa868;
    }
    .buynow,
    .payment {
      background-color: #27ba9b;
      margin-left: 20rpx;
    }
  }
  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    flex: 1;
    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;
      &::after {
        border: none;
      }
    }
    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
.swiper-item{
  height: 100%;
  width: 100%;
}
.swiper_{
  height: 100%;
  width: 100%;
}
</style>