import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取短信记录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysSmsRecordGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/SmsRecord/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新短信记录
 * @param data body对象
*/
export function sysSmsRecordSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/SmsRecord/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除短信记录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysSmsRecordRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/SmsRecord/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 短信记录列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysSmsRecordPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/SmsRecord/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
