import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function smsSignPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Sign/page',
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
export function smsSignSave (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Sign/save',
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
export function smsSignDelete (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Sign/delete',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 
*/
export function smsSignList (options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Sign/list',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
