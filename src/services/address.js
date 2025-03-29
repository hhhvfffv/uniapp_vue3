import { http } from '../utils/http'

/**
 * 收获地址
 * @param {Object} 
 * POST
 * /member/address
 */

const data_ = {
    receiver: '', // 收货人
    contact: '', // 联系方式
    provinceCode: '', // 省份编码(后端参数)
    cityCode: '', // 城市编码(后端参数)
    countyCode: '', // 区/县编码(后端参数)
    address: '', // 详细地址
    isDefault: 0, // 默认地址，1为是，0为否
}

export const getMemberAddressAPI = (data = data_) => {
    return http({
        url: '/member/address',
        method: 'POST',
        data
    })
}
