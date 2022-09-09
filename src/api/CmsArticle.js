import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function cmsArticleGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/cms/Article/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新
 * @param data body对象
*/
export function cmsArticleSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/cms/Article/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 删除
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function cmsArticleRemoveById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/cms/Article/removeById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function cmsArticlePage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/cms/Article/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 文件上传
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function cmsArticleUpload (queryParams,options) {
        const formData = new FormData()
            formData.append('file',queryParams.file);
    return request(Object.assign({
    url: serviceUrl+'/cms/Article/upload',
    method: 'POST',
    data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}

/**
 * 文件上传
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function cmsArticleUploads (queryParams,options) {
        const formData = new FormData()
            formData.append('files',queryParams.files);
    return request(Object.assign({
    url: serviceUrl+'/cms/Article/uploads',
    method: 'POST',
    data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}
