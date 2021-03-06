import { createStore } from 'vuex'
import {generatorDynamicRouter} from "@/router/generator-routers";
// 创建一个新的 store 实例
export const store = createStore({
  modules:{
  },
  state () {
    return {
      addRouters: [],
      permissions:[]
    }
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
  },
  actions:{
    GenerateRoutes({commit}, data) {
      return new Promise(resolve => {
        const {token} = data
        generatorDynamicRouter(token).then(data => {
          commit('SET_ROUTERS',data.routers)
          commit('SET_PERMISSIONS', data.codes)
          resolve()
        })
      })
    }
  },
  getters:{
    // isMobile: state => state.app.isMobile,
    // lang: state => state.app.lang,
    // theme: state => state.app.theme,
    // color: state => state.app.color,
    // token: state => state.user.token,
    // avatar: state => state.user.avatar,
    // nickname: state => state.user.name,
    // welcome: state => state.user.welcome,
    // roles: state => state.user.roles,
    // userInfo: state => state.user.info,
    addRouters: state => state.addRouters,
    // multiTab: state => state.app.multiTab
    permissions: state => state.permissions,
  }

})
