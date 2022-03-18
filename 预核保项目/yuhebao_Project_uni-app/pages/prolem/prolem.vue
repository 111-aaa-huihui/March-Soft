<template>
    <!--pages/prolem/prolem.wxml-->
    <view class="proContent">
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

        <!-- 问题页 -->
        <view class="problemContent">
            <view class="problemTilte">
                <view class="wanshan">完善核保问题</view>
                <view class="zhunque">更详细的疾病信息可以使核保结果更准确</view>
            </view>
            <view class="firstIllness">
                <view class="firstIllnessTitle">
                    请查看
                    <text class="illnessName">肩周炎病痛</text>
                    相关问题
                </view>
                <view class="firstBor">
                    <view class="firstProblem">请问您有过以下哪种症状？</view>
                    <radio-group class="radio" @Change="updataRadio">
                        <view v-for="(item, index) in loves" :key="item.id">
                            <radio :value="item.id" :checked="item.checked" color="#fff">{{ item.name }}</radio>
                        </view>
                    </radio-group>
                    <view class="firstProblem">请问您在哪种环境下患病？</view>
                    <radio-group class="radio" @Change="updataRadio">
                        <view v-for="(item, index) in likes" :key="item.id">
                            <radio :value="item.id" :checked="item.checked" color="#fff">{{ item.name }}</radio>
                        </view>
                    </radio-group>
                </view>
            </view>
        </view>
        <!-- 下一步 -->
        <view class="root">
            <button class="next" @tap.stop.prevent="toSuggestion">下一步</button>
        </view>
    </view>
</template>

<script>
// pages/prolem/prolem.js
export default {
    data() {
        return {
            radioId: '',
            loves: [
                {
                    id: 1,
                    name: '流鼻涕'
                },
                {
                    id: 2,
                    name: '头晕'
                },
                {
                    id: 3,
                    name: '肚子痛'
                },
                {
                    id: 4,
                    name: '腿疼'
                }
            ],
            likes: [
                {
                    id: 1,
                    name: '冷空气'
                },
                {
                    id: 2,
                    name: '气温较低'
                },
                {
                    id: 3,
                    name: '环境恶劣'
                },
                {
                    id: 4,
                    name: '天气热'
                }
            ]
        };
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
        updataRadio: function (e) {
            var Id = e.value.id;
            this.setData({
                radioId: Id
            });
        },

        toSuggestion() {
            uni.navigateTo({
                url: '/pages/suggestion/suggestion'
            });
        }
    }
};
</script>
<style>
/* 问题页样式 */
/* pages/prolem/prolem.wxss */
page {
    height: 100%;
}
.proContent {
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
    color: #3da0ff;
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
/* 问题中部 */

.problemContent {
    display: flex;
    flex-direction: column;
    height: 600rpx;
    margin: 0 40rpx;
}
.problemTilte {
    height: 120rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10rpx 0;
    padding-bottom: 10rpx;
}
.wanshan {
    height: 100rpx;
    font-size: 50rpx;
    margin: 5rpx 0;
}
.zhunque {
    font-size: 28rpx;
    color: #747677;
}
.firstIllness {
    margin-top: 5rpx;
}
.firstIllnessTitle {
    font-size: 36rpx;
    margin: 15rpx;
    color: #686e6e;
}
.illnessName {
    color: #3da0ff;
    margin-bottom: 10rpx;
}
.radio {
    transform: scale(0.8);
}
.firstBor {
    height: 790rpx;
    padding-left: 20rpx;
    padding-top: 5rpx;
    background-color: #fefefe;
    border-radius: 20rpx;
    box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
}
.firstProblem {
    margin-top: 10rpx;
    font-size: 28rpx;
    /* margin-left: 15rpx; */
}
radio .wx-radio-input.wx-radio-input-checked {
    border-color: #3da0ff !important;
}
.radio .wx-radio-input.wx-radio-input-checked::before {
    content: '';
    width: 36rpx;
    height: 36rpx;
    border-radius: 50%;
    background-color: #3da0ff;
}
.next {
    width: 224rpx !important;
    padding: 5rpx !important;
    text-align: center;
    letter-spacing: 2rpx;
    border-radius: 46rpx;
    font-size: 30rpx;
    line-height: 60rpx;
    margin: 20rpx auto;
    padding: 0 auto;
    color: #ffffff;
}
.root {
    width: 100%;
    display: block;
    position: absolute;
    margin: 80rpx 0;
    bottom: 0;
    border-radius: 5rpx;
    text-align: center;
}
.root button {
    background-color: #d5dce3;
}
</style>
