import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取开发商
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function houseCompanyGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/house/Company/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新开发商
 * @param data body对象
*/
export function houseCompanySave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/house/Company/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除开发商
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function houseCompanyRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/house/Company/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 开发商列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function houseCompanyPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/house/Company/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
