import Vue from 'vue'
//增加loading动画
Vue.directive('busy', {
    update: function(el, binding) {
        let p = binding.value
        if(el._isloading) return
        if(p && p.then){
            el._isLoading = true
            let timer = setTimeout(function () {
                el._isLoading = false
                el.removeChild(loading)
            },10000)
            let loading = document.createElement('div')
            loading.innerHTML=`<div style="position: fixed;height: 100%;width:100%;top:0;left:0;background-color: rgba(254,254,254,.5)">loading</div>`
            el.appendChild(loading)
            p.then(function () {
                el._isLoading = false
                el.removeChild(loading)
                clearTimeout(timer)
            },function(error){
                el._isLoading = false
                el.removeChild(loading)
                clearTimeout(timer)
            })
        }
    }

})
Vue.directive('imgZoom', {
    update: function(el, binding) {
        let arr = el.querySelectorAll('img');
        for(let i = 0;i<arr.length;i++){
            arr[i].addEventListener('click',function () {
                console.log(arr[i].src);
                let imgZoom = document.createElement('div')
                imgZoom.innerHTML=`<div style="zoom:normal;padding-top:50%;position: fixed;height: 100%;width:100%;top:0;left:0;background-color: rgba(254,254,254,.5)" id="img-zoom">
                        <img src="`+arr[i].src+`" alt="" style="max-width: 100%;max-height: 100%;transform: translateY(-55%)">
                        </div>`
                document.body.appendChild(imgZoom)
                imgZoom.addEventListener('click',function () {
                    document.body.removeChild(imgZoom)
                })
            })
        }
    }

})
Vue.directive('focusBottom', {
    bind: function(el, binding) {
        el.addEventListener('focus',function () {
            let bottom = document.getElementById('index-bottom')
            if(bottom) bottom.style.position = 'relative'
        })

        el.addEventListener('blur',function () {
            let bottom = document.getElementById('index-bottom')
            if(bottom) bottom.style.position = 'fixed'
        })
    }

})

Vue.directive('setTitle', {
    update: function(el, binding) {
        if(typeof document != "undefined") document.title = binding.value
    }

})
import InfiniteScroll from '../assets/js/common/infinite';
Vue.directive('InfiniteScroll', InfiniteScroll);

