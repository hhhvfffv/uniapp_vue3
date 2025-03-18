import { defineStore } from 'pinia'
import { ref } from 'vue'

const useMemberStore = defineStore('index', () => {
    // 会员信息
    const profile = ref()
    //保存会员信息，登录时使用
    const setProfile = (val) => {
        profile.value = val
    }
    //清理会员信息，退出时使用
    const clearProfile = () => {
        profile.value = undefined
    }


    return {
        profile, //会员信息
        setProfile,//保存会员信息，登录时使用
        clearProfile//清理会员信息，退出时使用
    }
},
    {
        // 小程序端持久化
        persist: {
            storage: {
                getItem(key) {
                    return uni.getStorageSync('key')
                },
                setItem(key, value) {
                    uni.setStorageSync('key', value)
                }
            }
        },
    })

export default useMemberStore