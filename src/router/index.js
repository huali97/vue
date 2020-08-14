import Vue from 'vue'
import VueRouter from 'vue-router' //导入vue-router
import Home from '@/components/Home'
import News from '@/components/News'
import About from '@/components/About'

Vue.use(VueRouter)  //安装vue-router插件

// 将Vue-VueRouter实例作为模块的默认导出

export default new VueRouter({
    routes: [
        {
            path: './home',
            component: Home
        },
        {
            path: './news',
            component: News
        },
        {
            path: './about',
            component: About
        }
    ]
})
