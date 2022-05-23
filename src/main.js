import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

import './permission' // permission control
import './global.css'

export const vue = createApp(App);
vue.config.productionTip = false;
import request from '@/utils/request'
vue.config.globalProperties.$request = request
vue.use(Antd);
import {store} from './store'
// 将 store 实例作为插件安装
vue.use(store)
import {router} from './router'
vue.use(router);

vue.directive('auth', {
    beforeMount: function (el, binding, vnode) {
        console.log(el,binding,vnode)
        el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
    }
})

vue.mount('#app')
