import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallPayWayGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallPayWay/getById',
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
export function mallPayWaySave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallPayWay/save',
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
export function mallPayWayRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallPayWay/removeById',
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
export function mallPayWayPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/mallPayWay/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
