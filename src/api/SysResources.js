import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取资源管理
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysResourcesGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Resources/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新资源管理
 * @param data body对象
*/
export function sysResourcesSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Resources/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除资源管理
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysResourcesRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Resources/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 资源管理列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysResourcesPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Resources/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 资源列表
*/
export function sysResourcesList (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Resources/list',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 获取所有的方法接口
*/
export function sysResourcesMethods (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Resources/methodAll',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
