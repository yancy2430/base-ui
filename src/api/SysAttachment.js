import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取附件表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysAttachmentGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Attachment/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新附件表
 * @param data body对象
*/
export function sysAttachmentSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Attachment/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除附件表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysAttachmentRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Attachment/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 附件表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function sysAttachmentPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/sys/Attachment/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
