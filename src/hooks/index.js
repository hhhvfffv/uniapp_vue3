import { ref } from "vue"

export const useGuessList = () => {
    //获取组件实例
    const Getref = ref()
    //监听滚动事件
    const GetScrollButton = () => {
        Getref.value?.GetMore()
    }

    return {
        Getref,
        GetScrollButton
    }
}