<template>
    <div>
        <div class="item" v-for="item in arrays">
            <div class="left">
                <img class="cover" :src="item.cover">
                <span class="mark grey" v-if="item.state=='已结束'"><span class="txtScale">{{ item.state }}</span></span>
                <span class="mark yellow" v-else><span class="txtScale">{{ item.state }}</span></span>
            </div>
            <div class="right">
                <p class="p1">{{ item.title }}</p>
                <p class="p2">{{ item.time }}</p>
                <p class="p3">{{ item.peoNum }}</p>
                <p class="p4">{{ item.price }}</p>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['collection'],
    data () {
      return {
          arrays: []
      }
    },
    components: {},
    mounted () {
        this.arrays = this.collection;
    },
    methods: {}
  }
</script>
<style lang="less">
    @size2: .0533rem;
    @size9: .24rem;
    @size14: .3733rem;
    @size15: .4rem;
    @size16: .4rem;
    @size20: .5333rem;
    @size22: .5867rem;
    @size35: .9333rem;

  .item{
    padding:@size15 0;border-bottom:@size2 solid #eee;display:flex;justify-content:flex-start;
    .left{
      position:relative;
      .cover{}
      .mark{padding:0 @size2;color: #333;position:absolute;top:0;left:0;
        .txtScale{font-size: @size9; white-space:nowrap;}
      }
      .mark.yellow{background:#fc0;}
      .mark.grey{background:#ddd;}
    }
    .right{
      margin-left: @size15; position:relative;
      .p1,.p2,.p3,.p4{width:100%;}
      .p1{font-size: @size16;line-height:@size22;color: #333;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;text-overflow: ellipsis;overflow: hidden;}
      .p2{margin:@size2 0;line-height:@size20;font-size: @size14;color: #666;}
      .p3{line-height:@size20;font-size: @size14;color: #999;}
      .p4{line-height:@size22;font-size: @size16;color: #F4A21B;position:absolute;bottom:0;}
    }
  }
</style>