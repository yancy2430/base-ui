import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function apiPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/video/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 视频详情
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function apiDetail (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/video/detail',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 弹幕列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function apiDanmaku (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/video/danmaku',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 图片显示
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function apiPic (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/video/pic',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
