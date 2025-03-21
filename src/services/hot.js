import { http } from '../utils/http'

/**
 * 热门推荐
 * Get
 * '/hot/preference'
 *'/hot/inVogue' 
 *'/hot/oneStop' 
 * '/hot/new' 
 * @param url
 * @param data
 */

//注意这里因为没有用t所以 千万别把subType的默认类型定义错了
export const getHotRecommendAPI = (url = "/hot/preference", data = { page: 1, pageSize: 10, subType: '' }) => {
    return http({
        method: 'GET',
        url,
        data
    })
}
