import { http } from '../utils/http'

/**
 * 用户信息页面
 * Get
 * /member/profile
 * 本应该携带一个token的但是之前就没有携带过了，所以这里就不携带了
 */

export const getMemberProfileAPI = () => {
    return http({
        url: '/member/profile',
        method: 'GET',
    })
}
