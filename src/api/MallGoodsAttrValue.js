import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsAttrValueGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoodsAttrValue/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新
 * @param data body对象
*/
export function mallGoodsAttrValueSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoodsAttrValue/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsAttrValueRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoodsAttrValue/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsAttrValuePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoodsAttrValue/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
