<template>
  <div id="modal">
    <div class="modal"  v-if="msgs.type" >
      <div class="tips" v-if="msgs.type == 1">
        <p>{{msgs.text}}</p>
      </div>
      <div  v-if="msgs.type == 2">
        <div>
          <p>{{msgs.text}}</p>
          <div class="confirm-btn" @click="close">确定</div>
        </div>
      </div>
      <div class="tips3" v-if=" msgs.type == 3">
        <div class="center">
          <div class="confirm-info">
            <p>{{msgs.text}}</p>
          </div>
          <div class="confirm-btn" @click="ok">确定</div>
        </div>
      </div>
      <div class="tips4"  v-if="msgs.type == 4">
        <div class="center">
          <div class="confirm-info"><input :type="msgs.iptType" class="ipt" :placeholder="msgs.text" v-model="iptPwd"></div>
          <div class="confirm-btn" @click="ok">确定</div>
        </div>
      </div>
      <div class="tips-photo"  v-if="msgs.type == 5"><!--图片放大-->
        <i class="iconfont icon-guanbi2" @click="close"></i>
        <div class="center">
           <img class="original" :src="msgs.imageUrl">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iptPwd: '',
    }
  },
  props:['msgs'],
  mounted: function() {
  },
  methods: {
    close:function(){
      this.msgs.type = 0;
    },
    ok: function () {
      // 用于解决弹框输密码的功能
      this.msgs.dialogs.livePwd = this.iptPwd;
      this.$emit('iamSure', this.msgs.dialogs);
      this.iptPwd = '';
      this.msgs.type = 0;
    }
  }
}
</script>
<style>
  .modal{width:100%;height:100%;position:fixed;z-index:100;top:0;left:0;display:flex;justify-content: center;align-items:center;}
  .tips{ z-index:200;animation: showPop 2s ease 0s;max-width:295px;padding:14px 30px;line-height:24px;font-size: 16px;color: #FFF;opacity:0;background: #000;border-radius: 4px;}
  .tips3,.tips4,.tips-photo{width:100%;height:100%;background:rgba(0,0,0,.5);display:flex;justify-content: center;align-items: center;}
  .tips3 .center,.tips4 .center{width:270px;height:138px;background:#fff;border-radius: 12px;}
  .tips3 .center .confirm-info,.tips4 .center .confirm-info{width:100%;height:93px;font-size: 13px;display:flex;justify-content: center;align-items: center;}
  .tips3 .center .confirm-btn,.tips4 .center .confirm-btn{width:100%;height:44px;line-height:44px;text-align:center;font-size: 17px;color: #0076FF;border-top:1px solid #eee;}
  .tips4 .center .confirm-info .ipt{width:237px;height:40px;padding:0 6px;border:1px solid #ddd;outline:none;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
  .tips-photo{background:rgba(0,0,0,.9);z-index:99;}
  .tips-photo .icon-guanbi2{font-size:.8rem;color:#ddd;position:absolute;top:.4rem;right:.4rem;}
  .tips-photo .center{width:90%;margin:0 auto;display:flex;align-items: center; justify-content: center;}
  .tips-photo .center .original{max-width:100%;max-height:100%;}
    @keyframes showPop{
      0%{
          -webkit-transform: scale(.1);
          -moz-transform: scale(.1);
          -o-transform: scale(.1);
          -ms-transform: scale(.1);
          transform: scale(.1);
          opacity: 0;
      }
      15%{
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          opacity: 0.8;
      }
      90%{
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          opacity: 0.8;
      }
      100%{
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -o-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          opacity: 0;
      }
  }
</style>

