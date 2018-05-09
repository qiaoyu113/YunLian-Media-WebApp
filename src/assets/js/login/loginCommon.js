/**
 * Created by LXH on 2017/10/30.登录注册页面的公用方法
 */
import {validate} from '../common/validate'
import {utility} from '../utility/utility'

export const loginCommon = {
    /* 页面头部名称 */
    pageTitle: function (str) {
        document.title = str
    },
    /* 显示密码和隐藏密码切换 */
    hideExchange: function(obj) {
        let part = obj.parentNode;
        let first = part.firstChild;
        if (obj.className === 'iconfont icon-biyan'){
            first.setAttribute('type','password');
            obj.className = 'iconfont icon-yanjing';
        }
        else if (obj.className === 'iconfont icon-yanjing'){
            first.setAttribute('type','text');
            obj.className = 'iconfont icon-biyan';
        }
    },
    /* 图片验证码等一系列 */
    showFitIcon (obj,isRight) {
        let parentN = obj.parentNode;
        let icon =parentN.getElementsByTagName('i');
        if(isRight){
            icon[0].style.display = 'none';
            icon[1].style.display = 'block';

        }else {
            icon[0].style.display = 'block';
            icon[1].style.display = 'none';
        }
    },
    validateImage: function (obj, event) {
        let parentN = obj.parentNode;
        let icon =parentN.getElementsByTagName('i');
        //console.log('测试', obj.value)
        if(event === 'keyup') {
            if(obj.value.trim().length <= 0 ){
                for(let i=0;i< icon.length;i++){
                    if(icon[i].className === 'iconfont icon-shuaxin1'){
                        icon[i].style.display = 'block'
                    }else{
                        icon[i].style.display = 'none'
                    }
                }
            }
        }else if(event === 'click') {
            if(obj.value.trim().length <= 0 ){
                for(let i=0;i< icon.length;i++){
                    if(icon[i].className === 'iconfont icon-shuaxin1'){
                        icon[i].style.display = 'block'
                    }else{
                        icon[i].style.display = 'none'
                    }
                }
            }else {
                for(let i=0;i< icon.length;i++){
                    if(icon[i].className === 'iconfont icon-shuaxin1'){
                        icon[i].style.display = 'none'
                    }else{
                        icon[i].style.display = 'block'
                    }
                }
            }
        }
    },
    /* 清空帐号文本框里面的内容 */
    iptLength (obj) {
        let parent = obj.parentNode;
        let lastChild = parent.lastChild;
        if(obj.value.trim().length > 0 ){
            lastChild.className = 'iconfont icon-Shape'
        }else{
            lastChild.className = 'iconfont icon-Shape hide'
        }
    },
    /* 获取短信验证码的效果功能 */
    validateFromPhone: function (obj, id, flag) {
        let timer;
        if(flag == 0) {
            var count = 0;
            timer = setInterval(function () {
                count = parseInt(document.getElementById('countDown').innerHTML) - 1;
                if(count > 0) {
                    document.getElementById('countDown').innerHTML = count;
                }
                else{
                    clearInterval(timer);
                    obj.innerHTML = '获取验证码';
                    obj.className = 'validateFromPhone'
                    flag = 1;
                }
            },1000);
        }
        return {
            isFlag: flag
        }
        /*if(obj.className === 'validateFromPhone'){
            obj.className = 'validateFromPhone validateWaiting'
            obj.innerHTML = '(<span id="countDown">60</span>s)重新获取';
            //var timer,isLoginOn = flag;
            var count = 0;
            timer = setInterval(function () {
                count = parseInt(document.getElementById('countDown').innerHTML) - 1;
                if(count > 0) {
                    document.getElementById('countDown').innerHTML = count;
                }
                else{
                    clearInterval(timer);
                    obj.innerHTML = '获取验证码';
                    obj.className = 'validateFromPhone'
                }
            },1000);
        }*/
    },
    /* 表单验证 */
    formValidate (isPhone, isPic, isSms, isPwd, params) {
        //1.验证手机号是否为空
        //2. 验证手机号是否正确
        //3.验证图片验证码是否为空
        //4.验证短信验证码是否为空
        //5.密码是否为空
        //6.密码是否是6-24位的字母数字组合

        if(isPhone){ //是否验证手机号
            if(!validate.isEmpty(params.phoneNo)){
                return '请输入手机号';
            }
            if(!validate.isPhoneNumber(params.phoneNo)){
                return '请输入正确的手机号';
            }
        }
        if(isPic){ //是否验证图片验证码
            if(!validate.isEmpty(params.kaptchaValue)){
                return "请输入图片验证码";
            }
        }
        if(isSms){ //是否验证短信验证码
            if(!validate.isEmpty(params.smsValue)){
                return "请输入短信验证码";
            }
        }
        if(isPwd){ //是否验证密码
            if(!validate.isEmpty(params.pwd)){
                return '请输入密码';
            }
            if(!validate.isBetweenMAndN(params.pwd, 6, 24)){
                return '请输入6~24位数字、字母密码组合';
            }
            if(validate.isEnLetter(params.pwd)){//是否只有英文字母
                return '请输入6~24位数字、字母密码组合';
            }
            if(validate.isNumber(params.pwd)){ // 是否只有数字
                return '请输入6~24位数字、字母密码组合';
            }
        }
    },
    getPlatForm () {
        let isWx = utility.is_weixin().isWX;
        if(isWx){
            return 'WXH5';
        }else{
            return 'WAPH5';
        }
    }
}
// export default loginCommon