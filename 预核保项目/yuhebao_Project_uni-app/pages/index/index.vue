<template>
    <!--pages/index/index.wxml-->
    <view class="container">
        <image class="cover" src="/static/static/images/cover.png" mode="widthFix"></image>
        <view>
            <view class="introduction">
                <view>人工智能大数据算法，一分钟完成疾病核保问卷</view>
                <view>给您安心便捷的投保体验</view>
            </view>
            <button class="enter" @tap.stop.prevent="toCheak">立即核保</button>
            <view class="freeDuty">
                <text>免责声明：核保结果今仅供参考，不作为保险公司最终结论</text>
            </view>
        </view>
    </view>
</template>

<script>
// pages/index/index.js
export default {
    data() {
        return {};
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
    methods: {
        toCheak() {
            uni.navigateTo({
                url: '/pages/check/check'
            });
        }
    }
};
</script>
<style>
/* index样式 */
/* pages/index/index.wxss */
.cover {
    width: 100%;
    margin: 0 auto;
}
.introduction {
    text-align: center;
    color: #3da0ff;
    font-size: 26rpx;
    line-height: 60rpx;
}
.enter {
    background-color: #3da0ff;
    text-align: center;
    letter-spacing: 2rpx;
    border-radius: 46rpx;
    font-size: 35rpx;
    line-height: 60rpx;
    margin: 20rpx auto;
    padding: 0 auto;
    color: #ffffff;
}
.freeDuty {
    text-align: center;
    font-size: 20rpx;

    line-height: 40rpx;
    color: #727e98;
}
</style>
