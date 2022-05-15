import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取悬赏审核表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardAuditGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Audit/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新悬赏审核表
 * @param data body对象
*/
export function rewardAuditSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Audit/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除悬赏审核表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardAuditRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Audit/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 悬赏审核表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardAuditPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Audit/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
