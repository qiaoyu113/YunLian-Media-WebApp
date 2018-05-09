/**
 * Created by zhong on 2017/10/24.
 *
 * (resolve) =>{require(['../components/test.vue'],resolve)}
 *
 */
import Vue from 'vue'
import store from './vuex'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义全局组件
import zmodal from './component/common/modal.vue'
import zbanner from './component/common/banner.vue'
import zfooter from './component/common/footer.vue'
import zhistory from './component/common/goback.vue'
import backhome from './component/common/back-home.vue'


Vue.component('z-modal', zmodal)
Vue.component('z-banner', zbanner)
Vue.component('z-footer', zfooter)
Vue.component('z-history', zhistory)
Vue.component('z-home', backhome)


// 定义组件

const short = (resolve) => {require(['./pages/short.vue'],resolve)}
const error = (resolve) => {require(['./pages/error.vue'],resolve)}
const home = (resolve) => {require(['./pages/home/home.vue'],resolve)}

// 创建路由器实例，配置路由规则
const routers = [
    {path: '/d/:shortId', component: short},
    // {name:'login',path: '/login', component: login},
    {name: 'home',path:'/',component: home, meta: {keepAlive: true},
           // children:[
           // 设置
           //     {name: 'jurisdiction',path:'/setup/jurisdiction',component: jurisdiction},
           //     {name: 'system',path:'/setup/system',component: system,redirect:'/setup/integral',
                   // children:[
                    // {name: 'integral',path:'/setup/integral',component: integral},
                    // {name: 'member',path:'/setup/member',component: member},
                    // {name: 'file',path:'/setup/file',component: file},
                    // {name: 'label',path:'/setup/label',component: label},
                    // {name: 'userName',path:'/setup/user',component: userName},
                   // ]
               // },
           // ]
       },
    {name: 'err',path:'/s/404',component: error}, //错误跳到404页面


    
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routers
})

export default router