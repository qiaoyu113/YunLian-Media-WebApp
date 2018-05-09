/**
 * Created by zhong on 2017/10/27.
 */
import axios from 'axios';
import store from '../vuex/'

// axios.defaults.baseURL = 'http://api.saas.vjuzhen.com';
// axios.defaults.baseURL = 'http://api.qizhi.vjuzhen.com';
// axios.defaults.baseURL = 'http://gsk.tunnel.qydev.com';
// axios.defaults.baseURL = 'http://5gkv74.natappfree.cc';
// axios.defaults.baseURL = 'http://q2cthf.natappfree.cc';
axios.defaults.baseURL = 'http://api.admin.sundayauction.cn';
// axios.defaults.baseURL = 'http://hwggj5.natappfree.cc';
// axios.defaults.baseURL = 'http://e76m5x.natappfree.cc';
// axios.defaults.baseURL = 'http://runbo.natapp1.cc';


let win = typeof window
let isClient = false
if(win && win != 'undefined'){
    isClient = true
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {

    // 在发送请求之前加toke
    let xtoken = isClient ? localStorage.token : null;
  
    if(xtoken != null){
        config.headers['Authorization'] = 'bearer ' +  xtoken
    }
    return config;
}, function (error) {
    // 请求错误
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 响应数据基本判断
    // 对token过期的跳转登录页面
    if (response.data.code == 510100 && !(response.config.url.indexOf('cdks/login')>0)){
        if(isClient){
            localStorage.clear();
            localStorage.redirectUrl = location.href
            location.href = location.origin+'/login/'
        }
    }
    return response;
}, function (err) {
    if(!isClient) return
        // 对响应错误做点什么
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)' ; break;
            case 401: err.message = '未授权，请重新登录(401)'; break;
            case 403: err.message = '拒绝访问(403)'; break;
            case 404: err.message = '请求出错(404)'; break;
            case 408: err.message = '请求超时(408)'; break;
            case 500:
                err.message = '服务器错误(500)';break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)';break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }

    }else{
        if(!isClient) return
        err.message = '连接服务器失败!'
    }
    return Promise.reject(err);
})

// axios.post = axios.get

export default axios