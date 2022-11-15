import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 短信发送
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function smsSendSendBody (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Send/sendByBody',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 发送短信
 * @param data body对象
*/
export function smsSendSendParam (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sms/Send/sendByParam',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}
