import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取抽奖活动表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryDrawGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Draw/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新抽奖活动表
 * @param data body对象
*/
export function lotteryDrawSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Draw/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除抽奖活动表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryDrawRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Draw/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 抽奖活动表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryDrawPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Draw/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 抽奖
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lotteryDrawLuckyDraw (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/lottery/Draw/luckyDraw',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
