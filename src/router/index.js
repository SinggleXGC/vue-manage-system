import Vue from 'vue'
import VueRouter from 'vue-router'

import vHome from '../components/common/Home.vue'
import vLogin from '../components/page/Login.vue'
import vChild from '../components/page/Children.vue'

Vue.use(VueRouter);

const routes = [
    // 设置路由配置
    {
        //设置URL
        path: '/home',
        //设置对应组件
        component: vHome,
        children: [
            {
                //要注意，以 / 开头的嵌套路径会被当作根路径。
                // 使用嵌套组件无须设置嵌套的路径。
                path: 'child',
                component: vChild
            }
        ],
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