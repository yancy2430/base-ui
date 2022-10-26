import { BasicLayout, BlankLayout, RouteView } from '@/layouts'
import {sysUserMenu} from '@/api/SysUser'
import {markRaw} from "vue";

// 前端路由表
const constantRouterComponents = {
  // 基础页面 layout 必须引入
  BasicLayout: BasicLayout,
  BlankLayout: BlankLayout,
  RouteView: RouteView,

  '403': () => import(/* webpackChunkName: "error" */ '@/exception/403'),
  '404': () => import(/* webpackChunkName: "error" */ '@/exception/404'),
  '500': () => import(/* webpackChunkName: "error" */ '@/exception/500'),
  // 你需要动态引入的页面组件
  // 'Workplace': () => import('@/views/dashboard/Workplace'),
  // 'Analysis': () => import('@/views/survey/app/SurveyList'),

}

// 前端未找到页面路由（固定不用改）
const notFoundRouter = {
  path: '/:catchAll(.*)', redirect: '/404', hidden: true
}

// 根级菜单
const rootRouter = {
  key: '',
  name: 'index',
  path: '/',
  component: 'BasicLayout',
  redirect: '/survey/app/SurveyList',
  meta: { title: '首页', keepAlive: true },
  children: [
  ]
}

/**
 * 动态生成菜单
 * @param token
 * @returns {Promise<Router>}
 */
export const generatorDynamicRouter = (token) => {
  return new Promise((resolve, reject) => {
    sysUserMenu().then(res => {
      const { data } = res
      const childrenNav = []
      const codes =[]
      for (const childrenNavKey in data) {
        codes.push(data[childrenNavKey].code)
        for (const permissionsKey in data[childrenNavKey].permissions) {
          codes.push(data[childrenNavKey].permissions[permissionsKey].code)
        }
      }
      //      后端数据, 根级树数组,  根级 PID
      listToTree(data, childrenNav, 0)
      rootRouter.children=rootRouter.children.concat(childrenNav)
      const routers = generator([rootRouter])
      routers.push(notFoundRouter)
      resolve({'routers':routers,'codes':codes})
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 格式化树形结构数据 生成 vue-router 层级路由表
 *
 * @param routerMap
 * @param parent
 * @returns {*}
 */
export const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const { title, hideChildren, hiddenHeaderContent, target, icon } = item.meta || {}
    const { type } = item || {}
    const currentRouter = {
      // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
      path: item.path || `${parent && parent.path || ''}/${item.key}`,
      // 路由名称，建议唯一
      name: item.name || item.key || '',
      // 该路由对应页面的 组件 :方案1
      // component: constantRouterComponents[item.component || item.key],
      // 该路由对应页面的 组件 :方案2 (动态加载)
      component: markRaw((constantRouterComponents[item.component.replace('./', '').replace('.vue', '') || item.key]) || (() => import(`@/views${item.component.replace('.', '')}`))),
      hidden:item.type===1,
      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: {
        title: title,
        icon: item.icon || undefined,
        hiddenHeaderContent: hiddenHeaderContent,
        target: target,
        permission: item.name
      }
    }
    // 是否设置了隐藏子菜单
    if (hideChildren) {
      currentRouter.hideChildrenInMenu = true
    }
    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    if (!currentRouter.path.startsWith('http')) {
      currentRouter.path = currentRouter.path.replace('//', '/')
    }
    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect)
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentRouter.children = generator(item.children, currentRouter)
    }
    return currentRouter
  })
}

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list, tree, parentId) => {
  list.forEach(item => {
    // 判断是否为父级菜单
    if (item.pid === parentId) {
      const child = {
        ...item,
        'meta': {
          'title': item.name,
          'show': true
        },
        name: item.code,
        // component: item.component || "EmptyView",
        key: item.code,
        children: []
      }
      // 迭代 list， 找到当前菜单相符合的所有子菜单
      listToTree(list, child.children, item.id)
      // 删掉不存在 children 值的属性
      if (child.children.length <= 0) {
        delete child.children
      }
      // 加入到树中
      tree.push(child)
    }
  })
}
