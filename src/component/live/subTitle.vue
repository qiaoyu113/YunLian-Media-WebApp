<template>
  <p class="subTitle"><!--<z-history :type="1"></z-history>-->{{ curTitleName }}</p>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['curTitle'],
    data () {
      return {
        curTitleName: ''
      }
    },
    components: {},
    mounted () {
      this.curTitleName = this.curTitle.titTxt;
    },
    methods: {}
  }
</script>
<style lang="less">
  @size46: 1.2267rem;
  @size18: .48rem;
  .subTitle{
    height: @size46;
    line-height: @size46;
    font-size: @size18;
    color: #333333;
    letter-spacing: .3px;
    border-bottom: 1px solid rgba(221,221,221,0.50);
    text-align:center;
    background: #FFFFFF;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>