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
 * 
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
 * 
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
 * 
*/
export function apiDetail (options) {
    return request(Object.assign({
    url: serviceUrl+'/video/{id}.m3u8',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 
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
