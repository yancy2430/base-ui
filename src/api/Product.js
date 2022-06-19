import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 分类列表
*/
export function productCategory (options) {
    return request(Object.assign({
    url: serviceUrl+'/product/category',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 产品列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function productPage (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/product/page',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 获取商品主表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function productGetById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/product/getById',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 保存或更新商品主表
 * @param data body对象
*/
export function productSave (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/product/save',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
    },options))
}

/**
 * 文件上传
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function productUpload (queryParams,options) {
        const formData = new FormData()
            formData.append('file',queryParams.file);
    return request(Object.assign({
    url: serviceUrl+'/product/upload',
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
export function productUploads (queryParams,options) {
        const formData = new FormData()
            formData.append('files',queryParams.files);
    return request(Object.assign({
    url: serviceUrl+'/product/uploads',
    method: 'POST',
    data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}
