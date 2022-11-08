import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 数据列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function surveyList (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/survey/api/list',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 数据内容
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function surveyContent (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/survey/api/content',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}

/**
 * 添加问题
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function surveyAddIssue (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/survey/api/addIssue',
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
export function surveyUpload (queryParams,options) {
        const formData = new FormData()
            formData.append('file',queryParams.file);
    return request(Object.assign({
    url: serviceUrl+'/survey/api/upload',
    method: 'POST',
    data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}

/**
 * 处理接口
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function surveyDispose (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/survey/api/dispose',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
