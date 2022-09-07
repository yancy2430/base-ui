import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取幻灯片
*/
export function homeSlide (options) {
    return request(Object.assign({
    url: serviceUrl+'/api/slide',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    },options))
}
