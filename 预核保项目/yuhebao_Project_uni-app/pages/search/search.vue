<template>
    <view class="container">
        <view class="illnesslist">
            <view class="search">
                <view class="search-header">
                    <text class="iconfont icon-sousuo"></text>
                    <input class="search-input" @input="query" placeholder="请您输入相关病症" />
                </view>
            </view>
            <scroll-view :scroll-y="true" class="sctollText">
                <view class="illnesslist-li" @tap="onillnessDetail" v-for="(item, index) in list" :key="index">
                    <view class="illnesslist-li-pic"></view>

                    <view class="illnesslist-li-content">
                        <view class="illnesslist-li-name">
                            <text class="iconfont icon-tianjiaxuanxiang"></text>
                            <text :decode="true">&nbsp;</text>
                            {{ item.name }}
                        </view>
                        <view class="illnesslist-li-format">{{ item.format }}</view>
                        <view class="illnesslist-li-factory">{{ item.factory }}</view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
const app = getApp();
export default {
    data() {
        return {
            //这是页面需要的json
            list: [
                {
                    id: '1',
                    name: '高血压'
                },
                {
                    id: '2',
                    name: '高血脂'
                },
                {
                    id: '3',
                    name: '肩周炎'
                },
                {
                    id: '4',
                    name: '腰间盘突出'
                },
                {
                    id: '5',
                    name: '重感冒'
                },
                {
                    id: '6',
                    name: '心脏病'
                }
            ],
            //这是查询需要的json
            list2: [
                {
                    id: '1',
                    name: '高血压'
                },
                {
                    id: '2',
                    name: '高血脂'
                },
                {
                    id: '3',
                    name: '肩周炎'
                },
                {
                    id: '4',
                    name: '腰间盘突出'
                },
                {
                    id: '5',
                    name: '重感冒'
                },
                {
                    id: '6',
                    name: '心脏病'
                }
            ]
        };
    },
    methods: {
        // 搜索
        query(e) {
            console.log('111');
            var list = this.list2; //先把第二条json存起来

            var list2 = []; //定义一个数组
            //循环去取数据

            for (var i = 0; i < list.length; i++) {
                var string = list[i].name; //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组

                if (string.indexOf(e.detail.value) >= 0) {
                    list2.push(list[i]);
                }
            } //到这里list2就已经是你查出的数据
            //如果输入的关键词为空就加载list数据，不是空就加载list2数据

            if (e.detail.value == '') {
                //加载全部
                this.setData({
                    list: list
                });
            } else {
                this.setData({
                    list: list2
                });
            }
        },

        // 点击疾病详情页
        onillnessDetail: function () {
            uni.navigateTo({
                url: '/pages/prolem/prolem'
            });
        }
    }
};
</script>
<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* 搜索样式  */
.search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    background-color: #ffffff;
    border-bottom: 2rpx solid #eeeeee;
    z-index: 99;
}
.search-header {
    width: 95%;
    height: 70rpx;
    background-color: #eeeeee;
    display: flex;
    justify-self: start;
    align-items: center;
    border-radius: 10rpx;
    margin: 0 auto;
    margin-top: 15rpx;
}
.icon-sousuo {
    padding: 10rpx;
}
.search-input {
    width: 80%;
    height: 70rpx;
    font-size: 24rpx;
}
/* 疾病展示 */

.illnesslist {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    margin-top: 100rpx;
}
.illnesslist-li {
    width: 100%;
    height: 50rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20rpx 0;
    padding-left: 20rpx;
    border-bottom: 2rpx solid #eeeeee;
}
.illnesslist-li-pic {
    width: 200rpx;
    height: 200rpx;
}
.illnesslist-li-content {
    margin-left: 20rpx;
    font-size: 26rpx;
    line-height: 50rpx;
    color: #76bdff;
}
</style>
