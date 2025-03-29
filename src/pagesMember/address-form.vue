

<template>
  <view class="content">
    <form>
      <!-- 表单内容 -->
      <view class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" @change="onRegionChange">
          <view v-if="form.fullLocation">{{form.fullLocation}}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </view>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch class="switch" color="#27ba9b" @change="onSwitchChange" :checked="form.isDefault" />
      </view>
    </form>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
  {{form}}
</template>

<script setup>
import { getMemberAddressAPI,getMemberAddressByIdAPI,putMemberAddressByIdAPI } from '../services/address'
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';
import { ref ,defineProps} from 'vue'

onLoad(()=>{
setTitle()
//只有修改传过来才有id，要判断是是不是修改
if(id){
  getMemberAddressByIDData()
}
})


//2.页面动态设置标题和获取修改参数
const {id} = defineProps(['id'])
// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})



//2.动态设置标题
const setTitle = () =>{
  uni.setNavigationBarTitle({
    title:id?"修改地址":"新建地址",
  })
}

//3.地址改变
const onRegionChange = (e) =>{
  //前端显示
  form.value.fullLocation = e.detail.value
  //后端需要
  const [provinceCode,cityCode,countyCode] = e.detail.code
  Object.assign(form.value,{provinceCode,cityCode,countyCode})
}

//4.开关控制
const onSwitchChange = (e)=>{
   form.value.isDefault = e.detail.value?1:0//默认地址，1为是，0为否
}

//5.提交到后端
const onSubmit = async(e) => {
  if(id){
  await putMemberAddressByIdAPI(id,form.value)
  }else{
        //这里form虽然实际多了一个fullLocation但是后端不会接收的(新建地址)
        await getMemberAddressAPI(form.value)
  }
  //成功提示
  uni.showToast({
    icon:"none",
    title:id?"修改成功":"保存成功"
  })
setTimeout(()=>{
    //返回
  uni.navigateBack()
},2000)
}

//6.页面显示修改页面的数据
const getMemberAddressByIDData = async() =>{
  const res = await getMemberAddressByIdAPI(id)
  //合并对象
  Object.assign(form.value,res.result)
}
</script>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>