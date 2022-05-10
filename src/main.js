import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

import './permission' // permission control
import './global.css'

const vue = createApp(App);
vue.config.productionTip = false;
import storage from "store";
export function auth () {
    let user=storage.get('userInfo');
   if (user.id>1){
       return false;
   }
    return true;
}
import request from '@/utils/request'
vue.config.globalProperties.$auth = auth
vue.config.globalProperties.$request = request
vue.use(Antd);
import {store} from './store'
// 将 store 实例作为插件安装
vue.use(store)
import {router} from './router'
vue.use(router);

vue.mount('#app')
