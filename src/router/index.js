import Vue from 'vue'
import VueRouter from 'vue-router'

import vHome from '../components/common/Home.vue'
import vLogin from '../components/page/Login.vue'

Vue.use(VueRouter);

const routes = [
    // 设置路由配置
    {
        //设置URL
        path: '/home',
        //设置对应组件
        component: vHome,
        //设置相应元信息
        meta: {
            title: 'Home组件'
        }
    },
    {
        path: '/login',
        component: vLogin,
        meta: {
            title: 'Login组件'
        }
    }
]

export default new VueRouter({
    routes
})