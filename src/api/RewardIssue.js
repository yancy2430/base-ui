import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取悬赏榜主表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardIssueGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Issue/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新悬赏榜主表
 * @param data body对象
*/
export function rewardIssueSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Issue/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除悬赏榜主表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardIssueRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Issue/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 悬赏榜主表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardIssuePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Issue/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
