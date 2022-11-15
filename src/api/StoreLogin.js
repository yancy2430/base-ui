import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 管理员登录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function storeLoginLogin (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/store/login/login',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 注册用户
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function storeLoginRegister (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/store/login/register',
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
export function storeLoginValidationCode (options) {
    return request(Object.assign({
    url: serviceUrl+'/store/login/validationCode',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 获取短信验证码
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function storeLoginGetSmsCode (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/store/login/getSmsCode',
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
export function storeLoginLogout (options) {
    return request(Object.assign({
    url: serviceUrl+'/store/login/logout',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
