<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content" @tap="onAvatarChange">
        <image class="image" :src="profile.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{profile.nickname}}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group  @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profile.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profile.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
          @change="onBirthdayChange"
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profile.birthday"
          >
            <view v-if="profile.birthday">{{profile.birthday}}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker class="picker" mode="region" 
          :value="profile.fullLocation?.split('')"
          @change="onCityChange"
          >
            <view v-if="profile.fullLocation">{{profile.fullLocation}}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">{{profile.profession}}</text>
          <input class="input" type="text" placeholder="请填写职业" :value="profile.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onsubmit">保 存</button>
    </view>
  </view>
</template>

<script setup>
import {getMemberProfileAPI,putMemberProfileAPI} from '../services/profile'
import useMemberStore from '../store/index'

import { ref } from 'vue'

import { onLoad, onShow, onReady } from '@dcloudio/uni-app';

onLoad(async()=>{
await getMemberProfileData()
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getWindowInfo()
//1.请求用户信息的数据
const profile = ref([])
//3.同步到我的页面(我的页面是通过useMemberStore获取的)
const memberStore = useMemberStore()



//1.请求用户信息的数据
const getMemberProfileData = async ()=>{
  const res = await getMemberProfileAPI()
  
  profile.value = res.result
  
}
//2.头像修改
const onAvatarChange = ()=>{
  uni.chooseMedia({
    count:1,
    mediaType:["image"],
    success:(success)=>{
      // console.log(success);
      const {tempFilePath} = success.tempFiles[0]
      console.log(tempFilePath);
      //文件上传（接口500）
      uni.uploadFile({
        url:'/member/profile/avatar',
        name:'file',
        filePath:tempFilePath,
        success:(res)=>{
          if(res.statusCode === 200){
            const avatar = JSON.parse(res.data).result.avatar
            //赋值给渲染到页面的数据
            profile.value.avatar = avatar
            //同步到我的页面
            useMemberStore.profile.avatar = avatar
          }else if(res.statusCode === 500){
            uni.showToast({
              icon:"none",
              title:"上传失败,服务器500",
            })
          }
        },
      })
    },
  })
}


//3.关于性别修改的更改
const onGenderChange = (e)=>{
  profile.value.gender = e.detail.value
}

//4.生日修改
const onBirthdayChange = (e)=>{
  //同步到页面
  profile.value.birthday = e.detail.value 
}

//5.城市修改
const onCityChange = (e)=>{
  console.log(e.detail);
  profile.value.fullLocation = e.detail.value.join(' ')//页面使用空客区分这里把数组转换成字符
  //同步到后端
  profile.value.fullLocationCode = e.detail.code
}


//2.保存用信息
/**
 * 参数
 *  nickname: '丞义',
    gender: '女',
    birthday: '2006-01-21',
    profession: '学生',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
 */
const onsubmit = async()=>{
  //省市区
    const [provinceCode,cityCode,countyCode] = profile.value.fullLocationCode
//更改的数据
const data = {
  nickname:profile.value.nickname,
  gender:profile.value.gender,
  birthday:profile.value.birthday,
  provinceCode,
  cityCode,
  countyCode
}

   const res = await putMemberProfileAPI(data)
   //同步到我的页面，存到pinia里面
   memberStore.profile.nickname = res.result.nickname
   //保存后返回上一页
   uni.navigateBack()
}


</script>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>