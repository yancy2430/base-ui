import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取悬赏回复表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardAnswerGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Answer/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新悬赏回复表
 * @param data body对象
*/
export function rewardAnswerSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Answer/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除悬赏回复表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardAnswerRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Answer/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 悬赏回复表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardAnswerPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Answer/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
