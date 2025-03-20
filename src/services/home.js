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
