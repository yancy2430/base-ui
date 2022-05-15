import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取发布板块表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardCategoryGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Category/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新发布板块表
 * @param data body对象
*/
export function rewardCategorySave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Category/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除发布板块表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardCategoryRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Category/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 发布板块表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardCategoryPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Category/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 发布板块表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function rewardCategoryList (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/reward/Category/list',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
