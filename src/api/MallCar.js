import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取购物车表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallCarGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallCar/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新购物车表
 * @param data body对象
*/
export function mallCarSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallCar/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除购物车表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallCarRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallCar/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 购物车表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallCarPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallCar/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
