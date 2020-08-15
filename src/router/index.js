/*
 * @Author: your name
 * @Date: 2020-05-14 16:27:38
 * @LastEditTime: 2020-06-06 11:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_Enxlsx\src\router\index.js
 */ 
import Vue from 'vue';
import Router from 'vue-router';
/* 1. 定义路由组件 */
import Layout from '@/layout';

Vue.use(Router);

/* 2. 定义路由 */
const routes = [
    {
        path: '/',
        redirect: '/default',
        component: Layout,
        children: [
            {
                path: '/default',
                component: () => import('@/views/default/index'),
                name: 'defaultPage'
            }
        ]
    }
];

/* 3. 创建 router 实例 */
const router = new Router({
    /* 4. 传 `routes` 配置，这里是缩写，相当于 routes: routes */
    //mode:'history',
    routes
});
/* 5. 暴露出该文件 */
export default router;