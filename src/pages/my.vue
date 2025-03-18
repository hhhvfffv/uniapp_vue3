<template>
  <div class="my">my
    <p>{{memberStore.profile}}</p>
   <button 
   class="or_"
   @tap="memberStore.setProfile({
    nickname:'西瓜',
    token:'123456'
   })"
   >保存用户信息</button>
   <button
    class="or_"
    @tap="memberStore.clearProfile()"
    >清理用户信息</button>
   <button class="or_" @tap="clog">测试请求</button>
<button @click="request">发送一个请求</button>
  </div>
</template>

<script setup>
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';
import useMemberStore from '../store/index'
import {http} from '../utils/http'
const memberStore = useMemberStore()
onLoad(() => {

})
async function request() {
  const res = await http({
    method:'GET',
    url:'',
    // url:'/home/banner',
    // url:'/member/profile',
    header:{},
  })
  console.log(res);
  
}
function clog(){
  console.log(memberStore.profile);
  
}
</script>

<style scoped>
button{
  padding: 5px;
  background-color: white;
  border: 1px solid green;
  color: green;
  outline: none;
  font-size: 8px;
}
.or_{
  display: inline-block;
  width: 20%;
}
</style>