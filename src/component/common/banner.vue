<template>
  <div class="swiper-container" v-if="listImg.length">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url('+picHead + str.picUrl+')' }" :key="str.type">
        <a class="swiper-slide-a" :href="str.picLink"></a>
        <div class="swiper-text"><p>{{str.picTitle}}</p></div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>

  </div>
</template>

<script>
    export default {
      data(){
        return{
          picHead : this.$store.state.picHead
        }
      },
        props: ['listImg'],
        updated() {
            var swiper = new Swiper('.swiper-container', {
                centeredSlides: true,
                pagination :{
                  el: '.swiper-pagination',
                  clickable :true,
                },
                loop: true,
                coverflow:{
                  rotate:30
                },
                speed: 600,
                autoplay: true,
                // spaceBetween: 10,
                // slidesPerView: 1.15,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        },
        mounted (){

        },
        methods: {
        }
        
    }
</script>

<style lang="less">
  .swiper-container {
    width: 100%;
    height:5rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
      a {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .swiper-slide-next,.swiper-slide-prev {
      height: 100%;
    }
    .swiper-slide-active{
      height: 100%;
    }
    .swiper-pagination{
      bottom:0 !important;
    }
    .swiper-pagination-bullet {
      bottom:0;
      width:0.13rem;
      height: 0.13rem;
      display: inline-block;
      background: #fff;
      margin:0 3px !important;
    }
    .swiper-text{
      width: 100%;
      height: 1rem;
      background: rgba(0,0,0,0.50);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 8;
      p{
        line-height: .9rem;
        text-align: center;
        font-size: .453rem;
        color: #FFFFFF;
        padding: 0 .4rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>