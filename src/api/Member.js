import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 用户注册
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function memberRegister (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/survey/api/register',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 用户登录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function memberLogin (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/survey/api/login',
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
export function memberAll (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/member/all',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
