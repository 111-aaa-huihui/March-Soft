<template>
    <!--pages/insurance/insurance/insurance.wxml-->
    <view class="guidance">
        <view class="imgTitle">
            <image class="img" src="/static/static/images/advice.png"></image>
        </view>

        <!-- 投保时建议 -->
        <view class="notice">
            <view class="noticeProduct">可投保产品</view>
            <text class="iconfont icon-jinggao1"></text>
            <text class="noticeText">投保时，请注意健康告知中其他疾病的约束条件！</text>
        </view>
        <!--   三个列表 -->
        <view class="contentList">
            <swiper class="topListSwiper">
                <swiper-item>
                    <view class="swiperItem">
                        <veiw class="titleCheck">重疾险&防癌检</veiw>
                        <view class="iconfont icon-blt_zuohua"></view>
                        <view class="contentItem">
                            <view class="protectNameTop">安联健康</view>
                            <view class="protectNameRoot">
                                <view class="point">健康险</view>
                                <view class="priace">325元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">星悦</view>
                            <view class="protectNameRoot">
                                <view class="point">高性价比</view>
                                <view class="priace">665元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">华贵大麦</view>
                            <view class="protectNameRoot">
                                <view class="point">长寿险</view>
                                <view class="priace">785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="swiperItem">
                        <veiw class="titleCheck">医疗险</veiw>
                        <view class="iconfont icon-blt_zuohua"></view>
                        <view class="contentItem">
                            <view class="protectNameTop">头脑发热</view>
                            <view class="protectNameRoot">
                                <view class="point">医用险</view>
                                <view class="priace">170元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">星悦</view>
                            <view class="protectNameRoot">
                                <view class="point">高性价比</view>
                                <view class="priace">665元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">华贵大麦</view>
                            <view class="protectNameRoot">
                                <view class="point">长寿险</view>
                                <view class="priace">785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="swiperItem">
                        <veiw class="titleCheck">人寿险</veiw>
                        <view class="contentItem">
                            <view class="protectNameTop">人口老龄化</view>
                            <view class="protectNameRoot">
                                <view class="point">年龄险</view>
                                <view class="priace">367元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">星悦</view>
                            <view class="protectNameRoot">
                                <view class="point">高性价比</view>
                                <view class="priace">665元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">华贵大麦</view>
                            <view class="protectNameRoot">
                                <view class="point">长寿险</view>
                                <view class="priace">785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                        <view class="contentItem">
                            <view class="protectNameTop">康复保</view>
                            <view class="protectNameRoot">
                                <view class="point">医疗险</view>
                                <view class="priace">1785元起</view>
                            </view>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </view>

        <!-- 咨询专家 -->
        <view class="notice bottom">
            <view class="noticeProduct">咨询核保专家</view>
            <text class="iconfont icon-icon-user"></text>
            <text class="noticeText">邀请特高级专家为您服务！</text>
        </view>
        <view class="qrcodeBottom">
            <image src="/static/static/images/qrcode.png" class="qrcode"></image>
        </view>

        <!-- <view class="scoll">
    <view class="scollTextFirst">重疾险&防癌检</view>
    <text>|</text>
    <view class="scollText2">医疗险</view>
    <text>|</text>
    <view class="scollText3">人寿险</view>
  </view>
  <view>
    <text>咨询核保专家</text>
    <view>二维码</view>
  </view> -->
    </view>
</template>

<script>
// pages/insurance/insurance/insurance.js
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
    methods: {}
};
</script>
<style>
/* pages/insurance/insurance/insurance.wxss */
page {
    height: 100%;
}
.guidance {
    height: 100%;
}
.imgTitle {
    height: 100rpx;
    width: 100%;
    line-height: 40rpx;
    text-align: center;
}
.img {
    height: 37rpx;
    width: 320rpx;
    margin: 30rpx 0;
}
.notice {
    height: 130rpx;
    margin: 0 35rpx;
    padding-left: 15rpx;
    background-color: #fefefe;
    border-radius: 24rpx;
    margin-bottom: 35rpx;
    box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
}
.noticeProduct {
    font-size: 36rpx;
    padding: 8rpx 0;
    margin: 5rpx;
    color: #3f434e;
}
.noticeText {
    width: 90%;
    height: 48rpx;
    line-height: 48rpx;
    padding-left: 10rpx;
    font-size: 27rpx;
    color: #fa8c43;
    /* background: #FFF3D9; */
    border-radius: 2px;
}
.contentList {
    margin: 0 35rpx;
    border-radius: 24rpx;
    box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
}
.topListSwiper {
    height: 685rpx;
}
.icon-blt_zuohua {
    float: right;
    margin: 15rpx;
}
.swiperItem {
    margin-left: 10rpx;
    padding: 10rpx;
}
.titleCheck {
    font-size: 36rpx;
    color: #3f434e;
    margin: 10rpx;
}
.contentItem {
    display: flex;
    flex-direction: column;
    margin-top: 15rpx;
    margin-left: 10rpx;
    color: #3f434e;
    border-bottom: 1rpx solid #e5e5eb;
}
.protectNameTop {
    font-size: 30rpx;
}
.protectNameRoot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 27rpx;
    margin-bottom: 10rpx;
}
.point {
    color: #828285;
}
.priace {
    color: rgb(233, 83, 83);
}
.bottom {
    margin-top: 30rpx;
}
.qrcodeBottom {
    margin-bottom: 10rpx;
}
.qrcode {
    width: 300rpx;
    height: 300rpx;
    margin: 0 auto;
    display: block;
    margin-bottom: 10rpx;
}

/* .scoll{
	height: 60rpx;
	width: 80%;
	top: 10rpx;
	line-height: 60rpx;
	display: flex;
	justify-content: space-around;
	border: 3rpx solid #3DA0FF;
	color: #3DA0FF;
	border-radius: 30rpx;
}
.scollTextFirst{
	margin: 0 10rpx;
} */
</style>
