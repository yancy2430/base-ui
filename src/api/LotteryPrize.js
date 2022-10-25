import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取奖品表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryPrizeGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Prize/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新奖品表
 * @param data body对象
*/
export function lotteryPrizeSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Prize/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除奖品表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryPrizeRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Prize/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 奖品表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryPrizePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Prize/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
