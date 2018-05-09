<!--suppress ALL -->
<template>
   <video-player class="video-player-box" :options="playerOptions"></video-player>
</template><!--id="videoPlayer" -->
<script type="text/ecmascript-6">
//  require ('video.js/dist/video-js.css')
//  require ('vue-video-player/src/custom-theme.css')
  import {videoPlayer} from 'vue-video-player'
  import videoJsHls from '../../assets/js/common/video/videojs-contrib-hls'

  export default {
    props: ['video'],
    data () {
      return {
        /*playerOptions: { // 视频播放器
          autoplay: false,
          controls: true,
          sourceOrder: true,
          errorDisplay : false,
           sources: [],
          poster: '',
        }*/
      }
    },
   computed:{
       playerOptions() {
          let playerOptions = { // 视频播放器
                  controls: true,
                  sourceOrder: true,
              }
              playerOptions.autoplay = this.video.autoplay
              playerOptions.poster = this.video.poster
              playerOptions.sources = this.video.sources
           return playerOptions
       }
   },
    components: {'video-player': videoPlayer},
    mounted () {
      let that = this;
//      console.log('我的video', this.video);
//      that.playerOptions.poster = that.video.poster;
//      that.playerOptions.sources = that.video.sources;
    },
    methods: {
      play () {
//          this.video
      },
      pause () {}
    }
  }
</script>
<style  lang="less" scoped>
   @import '../../../node_modules/video.js/dist/video-js.css';
   @import "../../../node_modules/vue-video-player/src/custom-theme.css";
</style>