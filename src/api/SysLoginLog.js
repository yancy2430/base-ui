import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysLoginLogGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/LoginLog/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新
 * @param data body对象
*/
export function sysLoginLogSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/LoginLog/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysLoginLogRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/LoginLog/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysLoginLogPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/LoginLog/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
