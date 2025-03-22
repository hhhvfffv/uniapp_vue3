import { http } from '../utils/http'

/**
 * 分类小程序
 * GET
 * /Category/top
 */

export const getCategoryTopAPI = () => {
    return http({
        method: 'GET',
        url: '/category/top'
    })
}