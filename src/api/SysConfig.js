import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysConfigGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Config/getById',
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
export function sysConfigSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Config/save',
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
export function sysConfigRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Config/removeById',
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
export function sysConfigPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Config/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
