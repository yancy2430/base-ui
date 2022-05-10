import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取邮件记录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysEmailRecordGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/EmailRecord/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新邮件记录
 * @param data body对象
*/
export function sysEmailRecordSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/EmailRecord/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除邮件记录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysEmailRecordRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/EmailRecord/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 邮件记录列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysEmailRecordPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/EmailRecord/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
