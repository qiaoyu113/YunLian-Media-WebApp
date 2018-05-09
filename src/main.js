import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueLazyload from 'vue-lazyload'
import store from './vuex';
import './mixin/directive';
import './mixin/filter';
import VueCropper from 'vue-cropper';
import wx from 'weixin-js-sdk'
// import './assets/js/common/infinite'
// import infiniteScroll from 'vue-infinite-scroll';

// Vue.use(infiniteScroll)

//视频播放器
// require ('video.js/dist/video-js.css')
// require ('vue-video-player/src/custom-theme.css')
// import VideoPlayer from 'vue-video-player'
// VideoPlayer.config({
//   youtube: true,
//   switcher: true,
//   hls: true
// })
// Vue.use(VideoPlayer)

// 开启debug
Vue.config.debug = true
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueCropper)
Vue.use(ElementUI)

const app = new Vue({
  router:router,
  render :h =>h(App),
  store : store
}).$mount('#app')