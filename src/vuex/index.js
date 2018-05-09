/**
 * Created by LXH on 2017/11/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import homeStore from './modules/homeStore'

const store = new Vuex.Store({
    // 定义状态
    state: {
        picHead:'http://resource.sundayauction.cn/',
        indexLogo:'',
        indexName:'',
        fromPath:['home'],
        height:{}
    },
    mutations:{
    },
    actions: {
    },
    modules: {
        homeStore: homeStore,
    }
})
export default store