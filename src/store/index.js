import { defineStore } from 'pinia'
import { ref } from 'vue'

const usePiniaIndex = defineStore('index', () => {
    const count = ref(0)
    function increment() {
        count.value++
    }

    return {
        count,
        increment
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

export default usePiniaIndex