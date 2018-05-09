import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vqQAAA=',
    loading: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vqQAAA=',
    attempt: 1
})
// import axios from 'axios'
// import ElementUI from 'element-ui'
// import routers from './router'
// import VueVideoPlayer from 'vue-video-player'