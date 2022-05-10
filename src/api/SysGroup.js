import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 删除权限组
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysGroupRemoveGroupById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Group/removeGroupById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 更新数据
 * @param data body对象
*/
export function sysGroupSubmitGroup (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Group/submitGroup',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 获取用户组详情
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysGroupGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Group/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 分组
*/
export function sysGroupList (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Group/list',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
