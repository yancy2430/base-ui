import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取轮播图
*/
export function mallHomeSlide (options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/app/slide',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 热门推荐
*/
export function mallHomeHot (options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/app/hot',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
