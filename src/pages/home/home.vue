<template>
    <div id="home">
        <!--搜索-->
        <div class="find">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" class="findInput" placeholder="搜索内容">
        </div>
        <!--导航栏-->
        <div class='navigationOver'>
            <div class="navigationBox">
                <div class='navigation'>
                    <div :class="index == nav ? 'navChecked navigationList':'navigationList'" v-for="(item,index) in navigationList" @click="navBtn(index,item.id)">
                        {{item.name}}
                        <div class='border'></div>
                    </div>
                </div>
            </div>
            <!--白色渐变-->
            <view class='opaction'></view>
        </div>
        <!--轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in img">
                    <a href='javascript:void(0)'>
                        <img :src="$store.state.picHead + item.picUrl" >
                        <div class="imgText">{{item.picTitle}}</div>
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!--热门文章-->
        <div class="LivingList" v-if="nav == 0">
            <div class="LivingTop">
                热门文章
                <span @click='moreAr'>更多</span>
            </div>
            <div class="passOver">
                <div class="passage">
                    <div class="passBox">
                        <div class="passageList" v-for="item in passageList" @click="artPage(item.id)">
                            <img :src='$store.state.picHead + item.poster'>
                            <p>{{item.summary}}</p>
                            <div class="passageBot">
                                <span>{{item.classification}}</span>
                                <span>
                <i class='iconfont icon-yanjing'></i> {{item.readNum}}</span>
                                <span>
                <i class='iconfont icon-xianxingzan'></i>{{item.commentNum}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {commonService} from '../../service/commonService'
    import {common} from '../../assets/js/common/common'
    export default {
        props: [],
        data () {
            document.title = '运联传媒'
            return {
                nav:'0',//菜单栏选择
                navigationList:[
                    {name:'推荐'},
                    {name:'智能生活'},
                    {name:'新媒体'},
                    {name:'新零售'},
                    {name:'社群'},
                    {name:'乱七八糟'}
                ],
                img:[],
                passageList:[],
            }
        },
        mounted () {
            let that = this;
            //请求头部导航
            commonService.getNavigation().then(function(res){
                if(res.success){
                    that.navigationList = res.datas
                }
            })
            //请求轮播图
            commonService.getImage({type:3}).then(function(res){
                if(res.data.success) {
                    that.img = res.data.datas
                    that.$nextTick(function () {
                        that.onswiper();
                    });
                }
            }),
            //热门文章
            commonService.getPassage().then(function(res){
                if(res.data.success) {
                    that.passageList = res.data.datas.datas;
                    console.log(that.passageList)
                }
            })
        },
        methods: {
            //点击顶部菜单栏
            navBtn: function (index,id){
                let i = index
                let typeId = id
                if (typeId == null){
                    typeId = ''
                }
                let that = this;
                that.nav = i;
                that.articleType = typeId;
                that.read = [];
                that.noMore = false;
                that.pageNum = 1
            },
            //swiper初始化
            onswiper(){
                let that = this;
                let swiper = new Swiper('.swiper-container', {
                    loop: true,
                    speed: 400,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
            },
            //更多文章
            moreAr(){
                let that = this;
            }
        }
    }
</script>
<style lang="less">
@import url("../../assets/css/common/mescroll.min.css");
@import '../../assets/css/common/swiper.min.css';
#home{
    width:100%;
    background:#fff;
    .find{
        width:92%;
        height:0.9rem;
        line-height:0.9rem;
        padding:0 0.5rem;
        box-sizing: border-box;
        margin:0.35rem auto 0;
        background: #F9F9F9;
        border-radius: 78px;
        i{
            float:left;
            font-size:18px;
            color:#999999;
        }
        .findInput{
            width:80%;
            height:100%;
            border:none;
            background:#f9f9f9;
            margin-left:0.5rem;
            float:left;
            outline: none;
            color:#999;
            font-size:13px;
        }
    }
    .navigationOver {
        width: 100%;
        height: 1.25rem;
        background: #fff;
        overflow: hidden;
        position: relative;
    }
    .navigationBox {
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .opaction {
        width: 2rem;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100;
        background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        background-image: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        background-image: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        background-image: linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    }
    .navigation {
        height: 1.6rem;
        overflow-x: auto;
        position: relative;
        overflow-y: hidden;
        width: max-content;
        -webkit-overflow-scrolling: touch;
    }
    .navigationList {
        padding: 0 0.5rem;
        box-sizing: border-box;
        height: 1.3rem;
        line-height: 1.3rem;
        float: left;
        font-size: 16px;
        color: #666;
    }
    .navChecked {
        color: #20a0ff;
        text-align: center;
    }
    .navChecked .border {
        border: 1px solid #20a0ff;
        margin: auto;
        margin-top: -0.2rem;
    }
    .swiper-container .swiper-pagination{
        bottom:0.1rem !important;
    }
    .imgText{
        position: absolute;
        bottom:0;
        width:100%;
        height:1rem;
        font-size: 17px;
        line-height:1rem;
        color:#fff;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.8) 98%, #FFFFFF 100%);
    }
    .LivingList {
        width: 100%;
        background: #fff;
    }

    .LivingTop {
        width: 100%;
        padding: 0.4rem;
        font-size: 16px;
        color: #333;
        font-weight: 600;
        box-sizing: border-box;
    }

    .Line {
        margin-top: 0.35rem;
        float: left;
        display: inline-block;
        width: 0.14rem;
        height: 0.6rem;
        margin-right: 0.3rem;
        background-color: #20a0ff;
    }

    .LivingTop span {
        float: right;
        color: #666;
        font-size: 14px;
        font-weight: 300;
    }

    .passOver {
        width: 100%;
        height: 4.9rem;
        overflow: hidden;
    }

    .passage {
        padding-bottom: 0.26rem;
        width: 100%;
        overflow: auto;
        position: relative;
        -webkit-overflow-scrolling: touch;
    }

    .passBox {
        overflow-x: auto;
        position: relative;
        overflow-y: hidden;
        padding: 0 0 0 0.4rem;
        width: max-content;
        -webkit-overflow-scrolling: touch;
    }

    .passageList {
        float: left;
        margin-right: 0.4rem;
        width: 5.33rem;
        height: 5rem;
        display: inline-block;
    }

    .passageList img {
        width: 100%;
        height:2.67rem;
    }

    .passageList p {
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 14px;
        margin-top:0.2rem;
    }

    .passageList .passageBot {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
    }

    .passageList .passageBot span {
        display: block;
        font-size: 12px;
        color: #999;
        float: left;
        margin-right: 0.5rem;
    }
    .icon-zan2{
        font-size:12px;
    }
}
</style>