import { http } from '../utils/http'
/**
 * 登录
 * @param {Object} data
 * url:'/login/wxMin'
 * data:<的必要参数>{
 *         code:string  通过wx.login获取的code
 *         encryptedData:string 
 *         iv:string
 * }
 */

//个人开发不支持（手机号权限获取不到）
export const postLoginMinAPI = (data) => {
    return http({
        method: 'POST',
        url: '/login/wxMin',
        data
    })
}

/**
 * 
 * @param {*} phoneNumber 
 * @returns 模拟手机号码
 */
//个人开发模拟
export const postLoginWxMinSimpleAPI = (phoneNumber) => {
    return http({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber
        }
    })
}