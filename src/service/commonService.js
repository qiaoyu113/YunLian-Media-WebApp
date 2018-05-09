/**
 * Created by LXH on 2017/11/1.
 */
import axios from './axios.js'
import store from '../vuex/'
import qs from 'qs'

export const commonService = {
    api: {},
    
    /* 获取Geetest */
    getGaptchas: function (params) {
        return axios.get('/gaptchas' + this.getParam(params))
    },
    /* 校验Geetest */
    postGaptchas: function (params) {
        return axios.post('/gaptchas',qs.stringify(params))
    },
    /* 通用：验证验证码的对错 */
    postValidateImg: function (params) {
        return axios.post('/kaptchas',qs.stringify(params))
    },
     /* 用户登陆 */
    postUser: function (params) {
        return axios.post('/tokens/password',qs.stringify(params))
    },
    /* 通用：获取短信验证码 */
    getValidateMess: function (params) {
        return axios.get('/sms' + this.getParam(params))
    },
    /* 组创建 */
    setGroups:function(params){
        return axios.put('/admin/auctionGroups',qs.stringify(params))
    },
    /* 首页导航栏 */
    getNavigation:function(params){
        return axios.get('/articles/type' + this.getParam(params))
    },
    /* 首页轮播图 */
    getImage:function(params){
        return axios.get('/banners' + this.getParam(params))
    },
    /* 热门文章 */
    getPassage:function(params){
        return axios.get('/articles/hot' + this.getParam(params))
    },




    getParam: function(param){
        let url = '';
        for(let key in param){
            if(param[key] !== null){
                url ? url += '&'+key+'='+param[key] : url += key+'='+param[key]
            }
        }
        return url ? '?'+url : ''
    },
}
export default {commonService}
