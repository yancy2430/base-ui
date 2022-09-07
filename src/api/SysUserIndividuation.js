import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取个性化设置
*/
export function sysUserIndividuationGetById (options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserIndividuation/getById',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 更新自定义表
 * @param data body对象
*/
export function sysUserIndividuationSaveTableCustom (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/UserIndividuation/saveTableCustom',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}
