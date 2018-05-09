<template>
  <div class="page-error" id="error">
    <div class="center">
      <div class="error-image error-bg"></div>
      <p class="error-txt">空空如也~</p>
      <p class="error-goHome btn1" @click="goHome">返回首页</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: [],
    data () {
      document.title = '出错啦~~~'
      return {}
    },
    components: {},
    mounted () {},
    methods: {
      goHome () {
        let that = this;
        let id = that.$store.state.shopId || localStorage.pathId
        that.$router.replace({name: 'home',params:{shopId:id}});
      }
    }
  }
</script>
<style lang="less">
  /* 红色 */
  /*@bgUrl: '../assets/image/error/ufo_red_2x.png';
  @btnBg: #B72712;
  @btnClr: #fff ;*/
  /* 黄色 */
  /*@bgUrl: '../assets/image/error/ufo_yellow_2x.png';
  @btnBg: #F5D05A;
  @btnClr: #333 ;*/
  /* 蓝色 */
/*  @bgUrl: '../assets/image/error/ufo_blue_2x.png';*/
/*  @btnBg: #69f;
  @btnClr: #fff ;*/

  @size14: .3733rem;
  @size20: .5333rem;
  @size36: .96rem;
  @size43: 1.1467rem;
  @size71: 1.8933rem;
  @size100: 2.6667rem;
  @size142: 3.7866rem;
  @size181: 4.8267rem;

  .page-error{width:100%;margin-top:35%;display:flex;align-items:center;justify-content: center;
  .center{width: @size181;display:flex;align-items:center;justify-content: center;flex-wrap:wrap;}
    .error-image{width: @size181;height: @size142;/*background:url(@bgUrl); background-size:contain;*/}
    .error-txt{width:100%;margin:@size43 auto @size20;font-size: @size14;color: #333;text-align:center;}
    .error-goHome{width: @size100;height: @size36; line-height: @size36; font-size: @size14;/*color: @btnClr;background: @btnBg;*/text-align:center;border-radius: @size71;}
  }
</style>