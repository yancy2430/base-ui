import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取用户角色关联表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserRoleGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserRole/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新用户角色关联表
 * @param data body对象
*/
export function sysUserRoleSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserRole/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除用户角色关联表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserRoleRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserRole/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 用户角色关联表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserRolePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserRole/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
