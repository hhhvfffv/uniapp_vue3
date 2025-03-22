import { http } from '../utils/http'

/**
 * 获取商品列表
 * GET
 * /goods
 */

export const getGoodsListAPI = (id) => {
    return http({
        method: 'GET',
        url: '/goods',
        data: {
            id
        }
    })
}