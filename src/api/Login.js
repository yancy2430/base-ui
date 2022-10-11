import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 管理员登录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function loginLogin (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/login/login',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 验证码
*/
export function loginValidationCode (options) {
    return request(Object.assign({
    url: serviceUrl+'/login/validationCode',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 验证验证码
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function loginValidation (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/login/validation',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 退出登录
*/
export function loginLogout (options) {
    return request(Object.assign({
    url: serviceUrl+'/login/logout',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
