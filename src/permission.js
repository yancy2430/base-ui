import {router} from './router'
import {store} from './store'
import storage from 'store'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'

const allowList = ['login', 'register', 'registerResult'] // no redirect allowList
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard/workplace'

router.beforeEach((to, from, next) => {
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${domTitle}`)
  /* has token */
  if (storage.get("ACCESS_TOKEN")) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
    } else {
      if (store.getters.addRouters.length!==0){
        next()
      }else {
        // generate dynamic router
        store.dispatch('GenerateRoutes', {  }).then(() => {
          // 根据roles权限生成可访问的路由表
          // 动态添加可访问路由表
          // VueRouter@3.5.0+ New API
          store.getters.addRouters.forEach(r => {
            router.addRoute(r)
          })
          // 请求带有 redirect 重定向时，登录自动重定向到该地址
          const redirect = decodeURIComponent(from.query.redirect || to.path)
          if (to.path === redirect) {
            // set the replace: true so the navigation will not leave a history record
            next({ ...to, replace: true })
          } else {
            // 跳转到目的路由
            next({ path: redirect })
          }
        })
      }

    }
  } else {
    if (allowList.includes(to.name)) {
      // 在免登录名单，直接进入
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
    }
  }
})

router.afterEach(() => {
})
