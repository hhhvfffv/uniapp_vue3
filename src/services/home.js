//导入封装的请求方法http
import { http } from "@/utils/http";

/**
 * 首页——广告——区域展示（小程序）
 * @param distributionSite 广告区域展示位置（1：首页轮播图，2：分类页轮播图）默认为1
 */

export const getHomeBannnerAPI = (distributionSite = 1) => {
    return http({
        method: 'GET',
        url: '/home/banner',
        data: {
            //服务器的参数
            distributionSite,
        }
    })
}

/**
 * 首页——分类展示（小程序）
 * Get请求
 * /home/category/mutli
 */
export const getCategoryAPI = () => {
    return http({
        method: 'GET',
        url: '/home/category/mutli'
    })
}

/**
 * 首页——商品热门推荐（小程序）
 * Get请求
 * /home/hot/mutli
 */
export const getHomeHotAPI = () => {
    return http({
        method: 'GET',
        url: '/home/hot/mutli'
    })
}

/**
 * 猜你喜欢
 * Get
 * /home/goods/guessLike
 */
export const getHomeGoodGuessLikeAPI = (data_ = { page: 1, pageSize: 10 }) => {
    return http({
        method: 'GET',
        url: '/home/goods/guessLike',
        data: {
            page: data_.page,
            pageSize: data_.pageSize
        }
    })
}

