/**
 * Created by LXH on 2017/11/13.
 */
const loginStore = {
    state: {
        phoneNo: '',//登录手机号
        kaptchaKey: '', // 服务器端验证码
        kaptchaValue: '', // 用户端输入验证码
        kaptchaMess: '', //图片验证码返回信息
        messchaKey: '', // 服务器端生成的短信验证码
        messValidate: '', // 用户端输入的短信验证码
        password: '', // 密码
        timer: 0, // 计时器
        redirect_uri: '', // 登录页面之前的地址
        platform: '', // 登录平台类型
        thirdInfo: '', //第三方登录绑定手机号
        smsType: 0 //判断是哪种行为的短信验证码， 1.注册；2.手机（动态验证码）登陆并注册；3.手机充值密码

    },
    mutations: {}
}
export default loginStore
