import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取门店信息
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallStoreInfoGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreInfo/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新门店信息
 * @param data body对象
*/
export function mallStoreInfoSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreInfo/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除门店信息
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallStoreInfoRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreInfo/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 门店信息列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallStoreInfoPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreInfo/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
