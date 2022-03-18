<template>
    <view>
        <!--pages/suggestion/suggestion.wxml-->
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
        <view class="detailTableTop">
            <view class="detailTitle">病情分析详情表</view>
            <text class="detailInformation">根据您的所填信息生成以下报告</text>
        </view>
        <!-- 病情分析表 -->
        <view class="detailTableContent">
            <!-- <view class="detailAya">XXX的风险分析</view> -->
            <view class="detailTableContentFirst">
                <view class="row">
                    <text class="iconfont icon-yiyuan1"></text>
                    <text class="desc">病情描述</text>
                </view>
                <text class="station">疾病状况分析</text>
            </view>

            <view class="detailTableContentSecond">
                <view class="">
                    <view class="row">
                        <text class="iconfont icon-shiyongwendang"></text>
                        <text class="hebaoDesc">核保说明</text>
                    </view>
                </view>
                <view class="contentFirst">
                    <text class="smallTitle">重疾险&防癌险</text>
                    <text class="smallText">重疾险&防癌险建议</text>
                </view>
                <view class="contentSecond">
                    <text class="smallTitle">医疗险</text>
                    <text class="smallText">医疗险推荐和建议</text>
                </view>
                <view class="contentThird">
                    <text class="smallTitle">人寿险</text>
                    <text class="smallText">人首先推荐和建议</text>
                </view>
            </view>
        </view>
        <!-- 底部 -->
        <view class="detailTableRoot">
            <button class="buttonagain" @tap.stop.prevent="toIndex">重新核保</button>
            <button class="buttontou" @tap.stop.prevent="toInsurance">投保建议</button>
        </view>
    </view>
</template>

<script>
// pages/suggestion/suggestion.js
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
        toIndex() {
            uni.redirectTo({
                url: '/pages/index/index'
            });
        },

        toInsurance() {
            uni.redirectTo({
                url: '/pages/insurance/insurance/insurance'
            });
        }
    }
};
</script>
<style>
/* 核保意见页面的样式 */
/* pages/suggestion/suggestion.wxss */
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
    color: #3da0ff;
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
.detailTableTop {
    height: 120rpx;
    margin: 20rpx 20rpx;
    padding-left: 20rpx;
    background-color: #fefefe;
    border-radius: 24rpx;
    box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
}
.detailTitle {
    font-size: 36rpx;
    padding: 8rpx 0;
    padding-bottom: 0;
    margin: 5rpx;
    color: #3f434e;
}
.detailInformation {
    width: 90%;
    height: 48rpx;
    line-height: 48rpx;
    font-size: 27rpx;
    border-radius: 2px;
}
.detailTableContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 40rpx;
}
.detailTableContentFirst {
    display: flex;
    flex-direction: column;
    height: 120rpx;
    padding-top: 45rpx;
}
.desc {
    padding-bottom: 6rpx;
}
.hebaoDesc {
    padding: 10rpx 0;
}
.station {
    font-size: 28rpx;
    color: #b3b4b9;
}
.detailTableContentSecond {
    display: flex;
    flex-direction: column;
    height: 500rpx;
    margin-top: 20rpx;
}
.contentFirst {
    display: flex;
    flex-direction: column;
    margin: 20rpx 0;
}
.contentSecond {
    display: flex;
    flex-direction: column;
    margin: 20rpx 0;
}
.contentThird {
    display: flex;
    flex-direction: column;
    margin: 20rpx 0;
    letter-spacing: 3rpx;
}
.row {
    display: flex;
    flex-direction: row;
}
.smallTitle {
    font-size: 28rpx;
    color: #131313;
}
.smallText {
    font-size: 24rpx;
    color: #b3b4b9;
}
.icon-yiyuan1 {
    padding-top: 6rpx;
    color: rgb(7, 147, 240);
}
.icon-shiyongwendang {
    padding-top: 18rpx;
    color: rgb(7, 147, 240);
}

.detailTableRoot {
    display: flex;
    flex-direction: row;
}
.buttonagain {
    width: 224rpx !important;
    padding: 5rpx !important;
    background-color: #3da0ff;
    text-align: center;
    letter-spacing: 2rpx;
    border-radius: 46rpx;
    font-size: 30rpx;
    line-height: 60rpx;
    margin: 20rpx auto;
    padding: 0 auto;
    color: #ffffff;
}
.buttontou {
    width: 224rpx !important;
    padding: 5rpx !important;
    background-color: #3da0ff;
    text-align: center;
    letter-spacing: 2rpx;
    border-radius: 46rpx;
    font-size: 30rpx;
    line-height: 60rpx;
    margin: 20rpx auto;
    padding: 0 auto;
    color: #ffffff;
}
</style>
