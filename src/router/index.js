import Vue from 'vue'
import VueRouter from 'vue-router'

import vLogin from '../components/page/Login.vue'

Vue.use(VueRouter);

const routes = [
    // 设置路由配置
    {
        //设置URL
        path: '/home',
        //设置对应组件
        component: () => import('../components/common/Home.vue'),
        children: [
            {
                //要注意，以 / 开头的嵌套路径会被当作根路径。
                // 使用嵌套组件无须设置嵌套的路径。
                path: 'child',
                component: () => import('../components/page/Children.vue'),
            },
            {
                path: 'child1',
                component: () => import('../components/page/Children1.vue'),
            },
            {
                path: 'child2',
                component: () => import('../components/page/Children2.vue'),
            },{
                path: 'child3',
                component: () => import('../components/page/Children3.vue'),
            },
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
    },
    {
        path: '/demo',
        component: () => import('../components/page/EleDemo.vue'),
    }
]

export default new VueRouter({
    routes
})