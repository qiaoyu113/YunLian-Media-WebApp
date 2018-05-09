/**
 * Created by LXH on 2017/11/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const tranStore = new Vuex.Store({
  state: {
      order: {
          orderState: 0, //订单状态
          No: '', // 订单编号
          createTime: '', // 创建日期
          price: 0, //  价格
          points: 0, // 积分
          favorable: 0, // 会员优惠
          discount: 0, // 打折
          freight: 0, // 运费
          actualPay: 0, // 实付款
          title: '', // 订单详情--标题
          img: '',
          // img: {// 订单详情——图片
          //     path:'', //图片路径
          //     width: 0, // 图片宽
          //     height: 0, // 图片高
          // },
          date: '', // 订单详情——开始时间
          subType: 1, // 退款原因/下单信息
          des: '',//  退款原因/下单信息 具体内容
      }
  },
  mutations: {
      aa () {}
  }
})
export default tranStore