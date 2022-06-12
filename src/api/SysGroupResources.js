import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取权限角色分配
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysGroupResourcesGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/GroupResources/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新权限角色分配
 * @param data body对象
*/
export function sysGroupResourcesSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/GroupResources/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除权限角色分配
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysGroupResourcesRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/GroupResources/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 权限角色分配列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysGroupResourcesPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/GroupResources/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
