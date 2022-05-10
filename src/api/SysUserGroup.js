import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取用户角色关联表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserGroupGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserGroup/getById',
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
export function sysUserGroupSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserGroup/save',
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
export function sysUserGroupRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserGroup/removeById',
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
export function sysUserGroupPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserGroup/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
