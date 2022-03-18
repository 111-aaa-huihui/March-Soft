<template>
    <!--pages/check/check.wxml-->
    <view>
        <!-- 头部 -->
        <view class="header">
            <view class="finishFirst">
                <text class="iconfont icon-wancheng"></text>
                <text class="addName">添加疾病名称</text>
            </view>
            <view class="finishSecond">
                <text class="iconfont icon-wancheng"></text>
                <text class="finsh">完善核保问题</text>
            </view>
            <view class="finishthird">
                <text class="iconfont icon-wancheng"></text>
                <text class="suggestion">核保意见书</text>
            </view>
        </view>

        <!-- 添加疾病栏 -->
        <view class="add">
            <view class="addTop">
                <view class="addTop-title">
                    <text>请添加疾病名称</text>
                </view>

                <view class="addTop-article">
                    <text>请添加您有诊断记录的疾病，大数据帮您分析疾病情况，制定详细的核保意见书</text>
                </view>
            </view>
            <view class="addDown" @tap.stop.prevent="toSearch">
                <text class="iconfont icon-jiahao"></text>
                <text>选择个人健康情况</text>
            </view>
            <view class="inputContent" @tap.stop.prevent="inContent">{{}}</view>
        </view>
    </view>
</template>

<script>
// pages/check/check.js
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
        toProlem() {
            uni.navigateTo({
                url: '/pages/prolem/prolem'
            });
        },

        toSearch() {
            uni.navigateTo({
                url: '/pages/search/search'
            });
        },

        //更新本页面
        goUpdate() {
            console.log('我更新啦');
        },

        inContent() {
            console.log('占位：函数 inContent 未声明');
        }
    }
};
</script>
<style>
/* 核查健康情况页面的样式 */
/* pages/check/check.wxss */
page {
    height: 100%;
}
.header {
    display: flex;
    height: 140rpx;
    justify-content: space-around;
    margin: 10rpx auto;
    background-color: #f5f6f7;
}
.finishFirst {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #3da0ff;
    font-size: 26rpx;
    margin: 30rpx auto;
}
.finishSecond {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 26rpx;
    margin: 30rpx auto;
}
.finishthird {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 26rpx;
    margin: 30rpx auto;
}
.addName {
    height: 30rpx;
    margin-top: 15rpx;
}
.finsh {
    height: 30rpx;
    margin-top: 15rpx;
}
.suggestion {
    height: 30rpx;
    margin-top: 13rpx;
}
.add {
    /* height: 275rpx; */
    margin-left: 35rpx;
}
.addTop {
    /* height: 125rpx; */
    display: flex;
    flex-direction: column;
    margin-bottom: 60rpx;
}
.addTop-title {
    /* height: 50rpx; */
    font-size: 45rpx;
    margin: 25rpx 0;
}
.addTop-article {
    /* height: 35rpx; */
    font-size: 25rpx;
    margin: 30rpx 0;
    color: #727e98;
}
.addDown {
    height: 100rpx;
    width: 80%;
    margin: 50rpx 0;
    border: 5rpx dotted #3da0ff;
    border-radius: 3rpx;
    color: #3da0ff;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.root {
    width: 100%;
    display: block;
    position: absolute;
    margin: 80rpx 0;
    bottom: 0rpx;
    border-radius: 5rpx;
    text-align: center;
}
.root button {
    background-color: #d5dce3;
}
</style>
