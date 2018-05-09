/**
 * Created by LXH on 2017/11/3.
 */
export const utility = {
    /* 判断是否是 微信浏览器*/
    version: '',
    is_weixin: function () { 
        var ua = window.navigator.userAgent.toLowerCase();
        var flag = false
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            //$("#rs").text("微信浏览器");
            flag = true
        } else {
            //$("#rs").text("不是微信浏览器");
        }
        return {
            isWX: flag
        }
    },
    terminal_version: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            language:(navigator.browserLanguage || navigator.language).toLowerCase()  //navigator.browserLanguage：IE语言；navigator.language：非IE语言；
        };
    }
}
export default {utility}