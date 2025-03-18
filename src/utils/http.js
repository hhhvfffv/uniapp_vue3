import useMemberStore from "../store/index"
/**
 * 添加拦截器
 *    拦截request请求
 *    拦截uploadFile文件上传
 * TODO
 *   1.非 http 开头的拼接地址
 *   2.请求超时
 *   3.添加小程序端请求头标识
 *   4.添加token请求标识
 */

const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net"
//添加拦截器
const httpINterceptor = {
    //拦截前调用（options为请求参数）
    invoke(options) {
        //1.非 http 开头的拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        //2.请求超时(设置为10秒)
        options.timeout = 10000
        //3.添加小程序端请求头标识
        options.header = {
            //如果是小程序端请求，则添加（保留一下）请求头标识
            ...options.header,
            'source-client': 'miniapp',
        }
        //4.添加token请求标识
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            //添加请求头
            options.header.Authorization = token
        }
        console.log(options);

    }
}
uni.addInterceptor('request', httpINterceptor)
uni.addInterceptor('uploadFile', httpINterceptor)

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @return Promise
 * 1.返回 Premise 对象
 * 2.请求成功
 *  2.1-提取核心数据 res.data
 *  2.2-添加类型支持泛型TS
 * 3.请求失败
 *   3.1-网络错误->提示(换个网络)网络错误
 *   3.2-401错误 ->token失效，重新登录（跳转到登录页面）
 *   3.3其他错误 ->根据后端错误轻提示
 *   3.4-网络错误->提示(换个网络)网络错误
 */

export const http = (options) => {
    //1.返回 Premise 对象
    return new Promise((resolve, reject) => {
        uni.request({
            //那边服务器需要的参数
            ...options,
            //2.请求成功
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    //2.1-提取核心数据 res.data
                    resolve(res.data)
                } else if (res.statusCode === 401) {
                    //3.2-401错误 ->token失效，重新登录（跳转到登录页面）
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/log' })
                    // 标记失败不再执行resolve
                    reject(new Error('token失效，请重新登录'))
                } else {
                    //3.3其他错误 ->根据后端错误轻提示
                    uni.showToast({
                        icon: 'none',
                        title: res.data.msg || '请求失败，请稍后再试',
                    })
                    // 标记失败不再执行resolve
                    reject(new Error(res.data.msg || '请求失败，请稍后再试'))
                }
            },
            fail(err) {
                //3.1-网络错误->提示(换个网络)网络错误
                uni.showToast({
                    icon: 'none',
                    title: '网络错误，请检查网络',
                })
                reject(new Error('网络错误，请检查网络'))
            }
        })
    })
}

