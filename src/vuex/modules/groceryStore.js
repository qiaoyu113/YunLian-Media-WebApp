/**
 * Created by LXH on 2017/11/17.
 */
const groceryStore = {
    state: {
        pageTitle: '', //页面带返回按钮的白色头部
        redirect_uri: {
            name: 'home', // 路由name
            params: '' // 路由参数
        }, //返回路径
        //直播是否连接
        chatRoomHost: 0 //
        //imgBaseUrl: 'http://test.resource.vjuzhen.com/' //图片基本路径

    },
    mutations: {},
    actions: {},
    getters: {}
}
export default groceryStore