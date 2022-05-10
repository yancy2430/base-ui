import axios from 'axios'
import { VueAxios } from './axios'
import storage from 'store'
import {router} from '../router'

let baseUrl = '/gateway'
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: baseUrl,
  timeout: 60000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  if (response.data instanceof Blob) {
    if (response.data.type === "application/json") {
      let content=blobToUi8Arr(response.data);
      return JSON.parse(content);
    }else {
      return response
    }

  }
  if (response.data.code !== 200) {
    console.log(response.data.msg)
  }
  if (response.data.code===403){
    storage.set("ACCESS_TOKEN",undefined)
    router.replace("/user/login")
  }
  return response.data
}, errorHandler)

function blobToUi8Arr(b) {
  var uri = URL.createObjectURL(b),
    xhr = new XMLHttpRequest();
  xhr.open('GET', uri, false);
  xhr.send();
  URL.revokeObjectURL(uri);
  return xhr.response;
}

export function readFileDownload(data, fileName) {
  console.log(data)
  if (!fileName) {
    let contentDisposition = data.headers['content-disposition'];
    if (contentDisposition) {
      fileName = window.decodeURI(data.headers['content-disposition'].split('=')[1], "UTF-8");
    }
  }
  var res = data.data
  if (res.type === 'application/json' || res.type === 'application/json;charset=UTF-8') {     // 失败的时候，注意ie兼容问题
    let fileReader = new FileReader()
    fileReader.onload = function(event) {
      let jsonData = JSON.parse(this.result) // this.result是根据event，读取文件后打印的
      if (jsonData.data === null && jsonData.code !== 0) {
        this.$message.error(jsonData.msg)
      }
    }
    fileReader.readAsText(res)
  }
  if (res.type === 'application/octet-stream' || res.type === 'application/vnd.ms-excel' || res.type === 'application/vnd.ms-excel;charset=UTF-8') {
    console.log('success...')         // 成功，注意ie兼容问题

    const blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName)
    } else {
      const url = window.URL.createObjectURL(blob)
      const aLink = document.createElement('a')
      aLink.style.display = 'none'
      aLink.href = url
      aLink.setAttribute('download', fileName)
      document.body.appendChild(aLink)
      aLink.click()
      document.body.removeChild(aLink)
      window.URL.revokeObjectURL(url)
    }
  }
}
export function openDownloadDialog(url, saveName)
{
  if(typeof url == 'object' && url instanceof Blob)
  {
    url = URL.createObjectURL(url);
  }
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || '';
  var event;
  if(window.MouseEvent) {
    event = new MouseEvent('click');
  }
  else
  {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
}

export default request

export const serviceUrl = (baseUrl.indexOf("://") !== -1?baseUrl:"")
export {
  request as axios,
}

export function head(headPath){
  return request({
    url: serviceUrl+headPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}
