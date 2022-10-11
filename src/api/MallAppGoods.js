import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取商品详情
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function mallAppGoodsDetail (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/mall/app/detail',
    method: 'POST',
    params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
