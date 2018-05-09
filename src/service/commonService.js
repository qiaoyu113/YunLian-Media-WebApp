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
    /* 获取列表拍品组 */
    getGroupsList:function(params){
        return axios.get('/admin/auctionGroups'+ this.getParam(params))
    },
    /*获取列表组*/
    getAuctionGroups(params){
        return axios.get('/admin/auctions' + this.getParam(params))
    },
    /*更新列表组*/
    postGroups(params,id){
        return axios.post('/admin/auctionGroups/'+id ,qs.stringify(params))
    },
    /*委托方列表请求*/
    getClient(params){
        return axios.get('/admin/dictionarys' + this.getParam(params))
    },
    /*保存拍品*/
    putAuctions(params){
        return axios.put('/admin/auctions',qs.stringify(params))
    },
    /*第二次保存拍品*/
    postAuctions2(params,id){
        return axios.post('/admin/auctions/'+ id,qs.stringify(params))
    },
    /*拍品出入专场*/
    checkAuctions(params){
        return axios.post('/admin/auctions',qs.stringify(params))
    },
    /*拍品出入专场*/
    updownAuctions(params){
        return axios.post('/admin/auctions',qs.stringify(params))
    },
    /*修改拍品参拍人数*/
    changeAuctions(params){
        return axios.post('/admin/auctions/realNum',qs.stringify(params))
    },
    /*查询拍品详情*/
    getAuctions(params,id){
        return axios.get('/admin/auctions/'+ id ,qs.stringify(params))
    },
    /*删除拍品*/
    deleteAuctions(params,id){
        return axios.delete('/admin/auctions/'+ id ,qs.stringify(params))
    },
    /*获取组详情*/
    getGroups(params,id){
        return axios.get('/admin/auctionGroups/'+ id + this.getParam(params))
    },
    /*获取专场列表*/
    getSpecialList(params){
        return axios.get('/admin/auctionMarkets'+ this.getParam(params))
    },
    /*导出专场列表*/
    getSpecialExport(params){
        return axios.get('/admin/auctions/export'+ this.getParam(params))
    },
    /*上传图片*/
    postImg(params){
        return axios.post('/files/base64',qs.stringify(params))
    },
    /*创建专场列表*/
    postAuctionMarkets(params){
        return axios.put('/admin/auctionMarkets',qs.stringify(params))
    },
    /*删除专场列表*/
    delectAuctionMarkets(id){
        return axios.delete('/admin/auctionMarkets/'+ id)
    },
    /*获取专场详情*/
    getAuctionMarkets(id){
        return axios.get('/admin/auctionMarkets/'+ id)
    },
    /*专场上架/下架*/
    postMarketDate(params,id){
        return axios.post('/admin/auctionMarkets/'+ id,qs.stringify(params))
    },
    /*专场详情列表*/
    getMarketsList(params,id){
        return axios.get('/admin/auctionMarkets/'+ id + this.getParam(params))
    },
    /*专题列表*/
    getpackagesList(params){
        return axios.get('/admin/auctionPackages' + this.getParam(params))
    },
    /*更新专题*/
    postpackagesId(params,id){
        return axios.post('/admin/auctionPackages/'+ id ,qs.stringify(params))
    },
    /*上移/下移专题*/
    upDownpack(params){
        return axios.post('/admin/auctionPackages/',qs.stringify(params))
    },
    /*删除专题列表*/
    delectPacks(id){
        return axios.delete('/admin/auctionPackages/'+ id)
    },
    /*保存专题*/
    savePacks(params){
        return axios.put('/admin/auctionPackages',qs.stringify(params));
    },
    /*第二次保存专题*/
    savePacksPost(params,id){
        return axios.post('/admin/auctionPackages/'+id,qs.stringify(params));
    },
    /*获取专题*/
    getpackagesId(params,id){
        return axios.get('/admin/auctionPackages/'+ id + this.getParam(params))
    },
    /* 拍品订单列表数据 */
    getOrderAuction(params){
        return axios.get('/orders' + this.getParam(params))
    },
    /* 拍品订单导出 */
    getOrderExport(params){
        return axios.get('/orders/export' + this.getParam(params))
    },
/* 拍品订单详情 */
    getOrderMore(params,id){
        return axios.get('/orders/' + id + this.getParam(params))
    },
    /* 拍品列表栏数量*/
    getOrderNum(params){
        return axios.get('/orders/orderNum' + this.getParam(params))
    },
    /* 确认修改金额 */
    postOrderPrice(params,no){
        return axios.post('/orders/'+ no +'/amount' ,qs.stringify(params))
    },
    /* 运营出价列表 */
    getOffersAuctions(params){
        return axios.get('/offers/auctions' + this.getParam(params))
    },
    /*管理员出价*/
    postOffers(params){
        return axios.post('/offers' ,qs.stringify(params))
    },
    /*查询字典列表*/
    getDicetionary(params){
        return axios.get('/admin/dictionarys/list' + this.getParam(params))
    },
    /*所有出价记录*/
    getAllPrice(params){
        return axios.get('/offers' + this.getParam(params))
    },
    /* 自动出价 */
    postOffersMiss(params){
        return axios.post('/offers/miss' ,qs.stringify(params))
    },
    /* 发货接口 */
    postGoods(params,orderNo){
        return axios.post('/orders/'+ orderNo +'/express' ,qs.stringify(params))
    },
    /* 售后列表接口 */
    getOrdercsList(params){
        return axios.get('/ordercs' + this.getParam(params))
    },
    /*受理|更新售后信息*/
    postOrdercsList(params){
        return axios.post('/ordercs' + this.getParam(params))
    },
    /* 售后详情接口 */
    getOrdercs(params,orderNo){
        return axios.get('/ordercs/'+ orderNo + this.getParam(params))
    },
    /* 提交售后 */
    putOrdercs(params){
        return axios.put('/ordercs',qs.stringify(params))
    },
    /* 通过\拒绝 */
    postOrdercs(params){
        return axios.post('/ordercs',qs.stringify(params))
    },
    /* 交易维护请求数据 */
    getForms(params){
        return axios.get('/forms' + this.getParam(params))
    },
    /* put交易维护的数据 */
    putForms(params){
        return axios.put('/forms' + this.getParam(params))
    },
    /* 请求银行卡信息 */
    getBankForm(params){
        return axios.get('/admin/bankCards' + this.getParam(params))
    },
    /* 查看银行卡详情 */
    getBankMore(params,no){
        return axios.get('/forms/'+ no + this.getParam(params))
    },
    /* 查看原银行卡号 */
    getOldBankNo(params,id){
        return axios.get('admin/bankCards/'+ id + this.getParam(params))
    },
    /*  订单详情页退款 */
    orderRefund:function(orderNo,params){
        return axios.put('/orders/'+ orderNo +'/refundApply' + this.getParam(params));
    },
    /*   取消订单页  */
    noPay:function(orderNo,params){
        return axios.put('/orders/'+ orderNo +'/cancel' + this.getParam(params));
    },
    /*   电子票查询   */
    getTicket:function(orderNo){
        return axios.get('/mytickets/orderNo/'+ orderNo);
    },
    /*   微信状态下兑换码使用   */
    getUnionid:function(id){
        return axios.post('tokens/unionid',qs.stringify(id));
    },
    /* 添加浏览数 */
    addReadNo: function(shopId, typeId, params) {
        return axios.post('/shops/' + shopId + '/read/' + typeId + '/inc', qs.stringify(params))
    },
     /* 获取帮助列表 */
    getFile: function (params) {
        return axios.get('/admin/doc' + this.getParam(params))
    },
     /* 获取单个帮助 */
    getFileid: function (params) {
        return axios.get('/admin/doc/' + params)
    },
    /*  帮助上下移   */
    putOrderNew:function(params){
        return axios.put('/admin/doc/orderNew'+this.getParam(params));
    },
     /* 删除帮助 */
    deleFile: function (params) {
        return axios.delete('/admin/doc'+this.getParam(params));
    },
    /*   添加帮助   */
    postFile:function(params){
        return axios.post('/admin/doc',qs.stringify(params));
    },
    /*  修改帮助   */
    putFile:function(params){
        return axios.put('/admin/doc',qs.stringify(params));
    },

     /* 标签 */
    getDictionarys: function (params) {
        return axios.get('/admin/dictionarys' + this.getParam(params))
    },
     /* 添加标签 */
    postDictionarys: function (params) {
        return axios.post('/admin/dictionarys',qs.stringify(params))
    },
     /* 添加标签 */
    putDictionarys: function (params) {
        return axios.put('/admin/dictionarys' + this.getParam(params))
    },
    /*  删除标签  */
    deleDictionarys:function(params){
        return axios.delete('/admin/dictionarys'+this.getParam(params));
    },
     /* 请求账户设置 */
    getUsers: function () {
        return axios.get('/admin/adminUsers/me')
    },
     /* 修改昵称和手机号 */
    postUsers: function (id,params) {
        return axios.post('/admin/adminUsers/'+id + this.getParam(params))
    },
     /* 修改密码 */
    postPassword: function (params) {
        return axios.post('/admin/adminUsers/resetpwd' + this.getParam(params))
    },
     /* 获取角色列表信息 */
    getRole: function (params) {
        return axios.get('/admin/roles' + this.getParam(params))
    },
    /* 获取单个角色信息 */
    getRoleid: function (params) {
        return axios.get('/admin/roles/' + params)
    },
    /* 获取权限列表信息 */
    getPermissions: function () {
        return axios.get('/permissions/tree' )
    },
       /* 添加角色 */
    postRole: function (params) {
        return axios.post('/admin/roles' + this.getParam(params))
    },
     /* 删除角色 */
    deleteRole: function (params) {
        return axios.delete('/admin/roles' + this.getParam(params))
    },
     /* 获取管理员账号信息无分页 */
    getAdminUsersview: function (params) {
        return axios.get('/admin/adminUsers' + this.getParam(params))
    },
    /* 获取管理员账号信息有分页 */
    getAdminUsers: function (params) {
        return axios.get('/admin/adminUsers' + this.getParam(params))
    },
     /* 分配角色 */
    postDistribution: function (id,params) {
        return axios.post('/admin/roles/'+ id + this.getParam(params))
    },
       /* 分配角色 */
    getAdminroles: function (params) {
        return axios.get('admin/roles/roleId' + this.getParam(params))
    },
     /* 新建账号 */
    putAccount: function (params) {
        return axios.put('/admin/adminUsers' + this.getParam(params))
    },
    /* 删除账号 */
    deleteAccount: function (id) {
        return axios.delete('/admin/adminUsers/' + id)
    },
     /* 编辑账号 */
    postAccount: function (id,params) {
        return axios.post('/admin/adminUsers/' + id + this.getParam(params))
    },
     /* 获取单个账号 */
    editAccount: function (id) {
        return axios.get('/admin/adminUsers/' + id )
    },
    /* 获取认证列表 */
    getAuthLogs: function (params) {
        return axios.get('/admin/users/authLogs' + this.getParam(params))
    },
    /* 获得实名认证信息 */
    getAuths: function (id) {
        return axios.get('/admin/users/auths/' + id)
    },
    /* 实名认证审核 */
    postAuthLogs: function (params) {
        return axios.post('/admin/users/authLogs' + this.getParam(params))
    },
    /* 获取用户列表 */
    getUserslist: function (params) {
        return axios.get('/admin/users' + this.getParam(params))
    },
    /* 获取用户个人信息 */
    getUserslistId: function (id) {
        return axios.get('/admin/users/' + id)
    },
    /* 获取订单信息 */
    getUsersorderid: function (id,params) {
        return axios.get('/admin/users/order/' + id + this.getParam(params))
    },
    /* 获取保证金信息 */
    getUserswalletid: function (id,params) {
        return axios.get('/admin/users/wallet/' + id + this.getParam(params))
    },
    /* 获取地址信息 */
    getUsersaddressid: function (id,params) {
        return axios.get('/admin/users/address/' + id + this.getParam(params))
    },
    /* 实名认证验证*/
    postVerification: function (id,params) {
        return axios.post('/admin/users/auths/' + id + this.getParam(params))
    },
    /* 重置密码*/
    postResetpassword: function (params) {
        return axios.post('/admin/users/password' + this.getParam(params))
    },
    /* 获取图片验证码 */
    getKaptchas: function (params) {
        return axios.get('/kaptchas')
    },
    /* 获取手机验证码 */
    getSms: function (params) {
        return axios.get('/sms' + this.getParam(params))
    },
    /* 重置手机号*/
    postPhone: function (params) {
        return axios.post('/admin/users/phone' + this.getParam(params))
    },
     /* 获取vip列表 */
    getVips: function () {
        return axios.get('/admin/vip')
    },
    /* 获取单个vip */
    getVipid: function (id) {
        return axios.get('/admin/vip/' + id)
    },
     /* 更新vip */
    putVipid: function (params) {
        return axios.put('/admin/vip' + this.getParam(params))
    },
    /* 获取规则 */
    getRule: function (params) {
        return axios.get('/admin/doc/type' + this.getParam(params))
    },
    /* 获取积分列表 */
    getPoint: function (params) {
        return axios.get('/admin/point' + this.getParam(params))
    },
     /* 获取积分日志 */
    getListintegral: function (id,params) {
        return axios.get('/admin/point/' + id + this.getParam(params))
    },
    /* 更新vip */
    putPoint: function (params) {
        return axios.put('/admin/point' + this.getParam(params))
    },
    /*日志记录接口*/
    getLogs: function (params) {
        return axios.get('/admin/logs' + this.getParam(params))
    },
    /* 获取随机名字 */
    getrandomName:function(params){
        return axios.get('/admin/dictionarys/randomName' + this.getParam(params))
    },
    /* 尾款支付 */
    getWrongOrder:function(params){
        return axios.get('/admin/wrongorder' + this.getParam(params))
    },
    /* 尾款支付导出表格 */
    getWrongExport:function(params){
        return axios.get('/admin/wrongorder/export' + this.getParam(params))
    },
    /* 尾款支付 */
    postWrongOrder:function(params){
        return axios.post('/admin/wrongorder',qs.stringify(params))
    },

     /* 获取申请单 */
    // getForms: function (params) {
    //     return axios.get('/forms' + this.getParam(params))
    // },
     /* 获取申请单详情 */
    getFormsid: function (id) {
        return axios.get('/forms/' + id)
    },
    /* 获取总额 */
    getTotal: function () {
        return axios.get('/wallet/total')
    },
     /* 获取保证金明细 */
    getBails: function (params) {
        return axios.get('/wallet/bails' + this.getParam(params))
    },
       /* 获取收入支出 */
    getWallet: function (params) {
        return axios.get('/wallet/admin' + this.getParam(params))
    },
     /* 获取银行卡列表 */
    getBankCards: function () {
        return axios.get('/admin/bankCards')
    },
    /* 删除银行卡 */
    deleteBankCards: function (id) {
        return axios.delete('/admin/bankCards/' + id)
    },
     /* 获取单个银行卡信息 */
    getBankCardsid: function (id) {
        return axios.get('/admin/bankCards/' + id)
    },
    /* 添加银行卡 */
    putBankCards: function (params) {
        return axios.put('/admin/bankCards' + this.getParam(params))
    },
    /* 首页访问量 */
    gettatisticsS:function () {
        return axios.get('/statistics/index')
    },
    /* 流量统计 */
    gettatistics:function (params) {
        return axios.get('/statistics'+ this.getParam(params))
    },
    /* 拍品出入库 */
    postWarehouse:function(params){
        return axios.post('/admin/auctions/inWarehouse',qs.stringify(params))
    },
    /* post退款 */
    postForms(params){
        return axios.post('/forms' ,qs.stringify(params))
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
