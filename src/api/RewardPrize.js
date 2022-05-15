import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取奖励信息表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardPrizeGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Prize/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新奖励信息表
 * @param data body对象
*/
export function rewardPrizeSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Prize/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除奖励信息表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardPrizeRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Prize/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 奖励信息表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardPrizePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Prize/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
