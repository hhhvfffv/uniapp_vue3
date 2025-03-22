<!--
此文件为开发者工具生成，生成时间: 2025/3/22上午11:04:35
使用方法：
在 C:\Users\75300\Desktop\vue实验室\learn_project\uniapp_project\my-vue3-project\dist\dev\mp-weixin\pages\classify.wxml 引入模板

```
<import src="classify.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 C:\Users\75300\Desktop\vue实验室\learn_project\uniapp_project\my-vue3-project\dist\dev\mp-weixin\pages\classify.wxss 中引入样式
```
@import "./classify.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport data-v-d942d788 data-v-d942d788">
      <view class="search search data-v-d942d788 data-v-d942d788">
        <view class="input input data-v-d942d788 data-v-d942d788">
          <text class="icon-search data-v-d942d788 sk-transparent sk-text-14-2857-264 sk-text">女靴</text>
        </view>
      </view>
      <view class="categories categories data-v-d942d788 data-v-d942d788">
        <scroll-view scroll-y="true" class="primary primary data-v-d942d788 data-v-d942d788">
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-691 sk-text">居家</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-645 sk-text">美食</text>
          </view>
          <view class="item data-v-d942d788 active sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-556 sk-text">服饰</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-423 sk-text">母婴</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-706 sk-text">个护</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-765 sk-text">严选</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-731 sk-text">数码</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-432 sk-text">运动</text>
          </view>
          <view class="item data-v-d942d788 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-d942d788 sk-transparent sk-text-14-2857-322 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary secondary data-v-d942d788 data-v-d942d788">
          <view is="components/XtxSwiper" class="banner banner data-v-d942d788 data-v-d942d788">
            <view class="carousel XtxSwiper--carousel">
              <swiper autoplay="false" circular="true" interval="3000" current="0"></swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel data-v-d942d788 data-v-d942d788">
            <view class="title title data-v-d942d788 data-v-d942d788">
              <text class="name data-v-d942d788 sk-transparent sk-text-27-2727-814 sk-text">钱包/胸包</text>
              <navigator class="more data-v-d942d788 sk-transparent sk-text-30-3030-778 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
            </view>
            <view class="section section data-v-d942d788 data-v-d942d788">
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-916 sk-text">自我态度男式多功能多层格局休闲胸包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="symbol data-v-d942d788 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-641 sk-text">146.00</text>
                </view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-873 sk-text">轻松出行复古经典老花时尚女式钥匙包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="symbol data-v-d942d788 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-975 sk-text">88.00</text>
                </view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-583 sk-text">别致优雅男式新潮头层牛皮钥匙包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="symbol data-v-d942d788 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-407 sk-text">106.00</text>
                </view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-727 sk-text">一包在手想走就走男士风琴多卡位便携卡包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="symbol data-v-d942d788 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-291 sk-text">121.00</text>
                </view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-696 sk-text">休闲潮流运动男士胸包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="symbol data-v-d942d788 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-400 sk-text">136.00</text>
                </view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-646 sk-text">品质在内格调在外头层真皮防消磁钥匙卡包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="symbol data-v-d942d788 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-725 sk-text">80.00</text>
                </view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-699 sk-text">女式复古蜥蜴纹质感牛皮钱包</view>
              </navigator>
              <navigator class="goods goods data-v-d942d788 data-v-d942d788" hover-class="none">
                <image class="image data-v-d942d788 sk-image"></image>
                <view class="name ellipsis data-v-d942d788 sk-transparent sk-text-14-2857-460 sk-text">超能装多功能出行胸包</view>
                <view class="price price data-v-d942d788 data-v-d942d788">
                  <text class="number data-v-d942d788 sk-transparent sk-text-14-2857-538 sk-text">49.00</text>
                </view>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style scoped>
/*
此文件为开发者工具生成，生成时间: 2025/3/22上午11:04:35

在 C:\Users\75300\Desktop\vue实验室\learn_project\uniapp_project\my-vue3-project\dist\dev\mp-weixin\pages\classify.wxss 中引入样式
```
@import "./classify.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-264 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 38.0435rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-691 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-645 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-556 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-423 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-706 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-765 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-731 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-432 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-322 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-27-2727-814 {
    background-image: linear-gradient(transparent 27.2727%, #EEEEEE 0%, #EEEEEE 72.7273%, transparent 0%) !important;
    background-size: 100% 59.7826rpx;
    position: relative !important;
  }
.sk-text-30-3030-778 {
    background-image: linear-gradient(transparent 30.3030%, #EEEEEE 0%, #EEEEEE 69.6970%, transparent 0%) !important;
    background-size: 100% 59.7826rpx;
    position: relative !important;
  }
.sk-text-14-2857-916 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-641 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-873 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-975 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-583 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-407 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-727 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-291 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-696 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-400 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-646 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-725 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-699 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-460 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.4348rpx;
    position: relative !important;
  }
.sk-text-14-2857-538 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>