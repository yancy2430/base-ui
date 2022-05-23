import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取枚举
 * @param enumName 枚举名
 * @param options ajax其他参数
 */
export function enumOption (enumName,options) {
    return request(Object.assign({
        url: serviceUrl+'/enum/'+enumName,
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    },options))
}