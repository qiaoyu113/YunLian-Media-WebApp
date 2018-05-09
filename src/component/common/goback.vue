<template>
  <div id="history">
    <div v-on:click="goHistory()">
      <!--<img src="../assets/image/back.png" alt="" v-if="type!=1">-->
      <div v-if="type!=1">
        <i class="iconfont icon-fanhui" id="history-back"></i>
      </div>
      <i class="iconfont icon-fanhui" id="history-fanhui" v-if="type==1"></i>
    </div>
  </div>
</template>

<script>
    export default {
        props:['type'],
        mounted: function() {
            //console.log(this.$route.fullPath);
        },
        methods: {
            goHistory:function(){
                let path = this.$store.state.fromPath
                let i = path.length
//                console.log(this.$store.state.fromPath);
                if(i){
                    this.$store.state.fromPath.pop()
                }
                if(i>1 && path[i-2]!='home'){
                    this.$router.replace({path:path[i-2]})
                }else{
                    this.$router.replace({name:"home"})
                }
//                console.log('goback',this.$store.state.fromPath)
            }
        }
    }
</script>

<style>
  #history{position: relative;z-index:20;}
  #history-back{
    width:.8rem;height:.8rem;line-height:.8rem;text-align:left;font-size:.8rem;color:#fff;background:rgba(0,0,0,.3);position:absolute;top:.2667rem;left:.4rem;z-index:59;
    display:block;-webkit-border-radius:100%;
    -moz-border-radius:100%;
    border-radius:100%;
  }
  #history-fanhui{
    font-size: 0.8rem;
    position: absolute;
    left: 0.2rem;
    line-height: 1.2rem;
    color: #333;
  }
</style>


