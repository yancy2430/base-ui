import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取店铺关联表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallStoreUserGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreUser/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新店铺关联表
 * @param data body对象
*/
export function mallStoreUserSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreUser/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除店铺关联表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallStoreUserRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreUser/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 店铺关联表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallStoreUserPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/tongdao/mallStoreUser/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
