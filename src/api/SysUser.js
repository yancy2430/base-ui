import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取管理员表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新管理员表
 * @param data body对象
*/
export function sysUserSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除管理员表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 管理员表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 获取用户可用菜单
*/
export function sysUserMenu (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/menu',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 获取用户信息
*/
export function sysUserInfo (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/info',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 管理员登录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserLogin (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/login',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 验证码
*/
export function sysUserValidationCode (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/validationCode',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 验证验证码
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysUserValidation (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/validation',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 退出登录
*/
export function sysUserLogout (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/logout',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 同步用户
*/
export function sysUserUserSync (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/User/userSync',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
