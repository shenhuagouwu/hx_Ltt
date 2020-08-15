/*
 * @Author: your name
 * @Date: 2020-05-14 16:27:38
 * @LastEditTime: 2020-05-21 09:45:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_Enxlsx\src\main.js
 */
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // global css
import store from './store';
import App from './app.vue';
import api from './api/index.js';
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
