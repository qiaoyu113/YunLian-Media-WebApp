<template>
    <div id="short">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        mounted: function() {
            let shortUrl = this.$route.params.shortId;
            //根据短Id映射,成功后跳转
            if(shortUrl){
                /*commonService.getUrl(shortUrl).then(function (res) {
                    window.location.href = res.data.datas;
                })*/
            }
        },
        methods: {

        }
    }
</script>