import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function smsTemplatePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Template/page',
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
export function smsTemplateList (options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Template/list',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
