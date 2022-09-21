import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsCateGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallGoodsCate/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新
 * @param data body对象
*/
export function mallGoodsCateSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallGoodsCate/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsCateRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallGoodsCate/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsCatePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallGoodsCate/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 所有列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsCateList (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallGoodsCate/list',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
