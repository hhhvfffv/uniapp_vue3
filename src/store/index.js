import { defineStore } from 'pinia'
import { ref } from 'vue'

const usePiniaIndex = defineStore('index', () => {
    const count = ref(0)
    return { count }
},
    {
        // 持久化
        persist: true,
    })

export default usePiniaIndex