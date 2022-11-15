import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 微信小程序调用接口
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function weixinOnLoginByWx (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/member/api/onLoginByWx',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 微信设置用户信息
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function weixinSetUserInfo (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/member/api/setUserInfo',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 微信绑定手机号
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function weixinSetUserPhone (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/member/api/setUserPhone',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
