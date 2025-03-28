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

/**
 * 修改个人信息
 * put
 * /member/profile
 * @param {*} data 
 */
//定义默认值
const data_ = {
    nickname: '丞义',
    gender: '女',
    birthday: "2000-01-01",
    profession: '学生',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
}
export const putMemberProfileAPI = (data = data_) => {
    return http({
        method: 'PUT',
        url: '/member/profile',
        data
    })
}