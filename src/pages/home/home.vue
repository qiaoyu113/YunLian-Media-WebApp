<template>
    <div id="home">
        <!--搜索-->
        <div class="find">
            <i class="iconfont icon-fangdajing"></i>
            <input type="text" class="findInput">
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
#home{
    width:100%;
    background:#fff;
    .find{
        width:1rem;
        /*padding:12px;*/
    }
}
</style>