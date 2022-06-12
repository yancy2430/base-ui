import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取商品主表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoods/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新商品主表
 * @param data body对象
*/
export function mallGoodsSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoods/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除商品主表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoods/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 商品主表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallGoodsPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallGoods/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
