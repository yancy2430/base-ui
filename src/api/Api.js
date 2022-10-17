import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 
*/
export function apiList (options) {
    return request(Object.assign({
    url: serviceUrl+'/list',
    method: 'POST',
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
export function apiPic (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/pic',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
