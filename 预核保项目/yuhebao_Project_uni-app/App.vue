<script>
//注册小程序应用 app.js
export default {
    data() {
        return {};
    },
    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function () {},
    globalData: {
        userInfo: null
    },
    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function (options) {},
    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {},
    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {}
};
</script>
<style>
@import './static/iconfont/iconfont.css'; /**app.wxss**/

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>
