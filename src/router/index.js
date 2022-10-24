import {BlankLayout, UserLayout} from '@/layouts'
import {createRouter, createWebHistory} from 'vue-router'
import Survey from "@/views/survey/app/Survey";


/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        key: '',
        name: 'index',
        path: '/',
        component: 'BasicLayout',
        redirect: '/dashboard/analysis',
        meta: { title: '首页', keepAlive: true },
        children: []
    },
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
            },
            {
                path: 'recover',
                name: 'recover',
                component: undefined
            }
        ]
    },
    {
        path: '/survey/app',
        component: Survey,
        redirect: '/survey/app/from',
        hidden: true,
        children: [
            {
                path: '/survey/app/from',
                name: 'SurveyFrom',
                component: () => import(/* webpackChunkName: "user" */ '@/views/survey/app/SurveyFrom')
            },
            {
                path: '/survey/app/list',
                name: 'SurveyList',
                component: () => import(/* webpackChunkName: "user" */ '@/views/survey/app/SurveyList')
            },
            {
                path: '/survey/app/dispose',
                name: 'SurveyDispose',
                component: () => import(/* webpackChunkName: "user" */ '@/views/survey/app/SurveyDispose')
            }
        ]
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/exception/404')
    }

]
export const router = createRouter({
    history: createWebHistory(),
    routes: constantRouterMap,
})
