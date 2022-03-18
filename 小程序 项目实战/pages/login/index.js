//Page Object
Page({
    data: {
        userInfo:[]
    }
    ,
    getUserProfile(e){
        wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorageSync("userinfo", this.data.userInfo);
        wx.navigateBack({
          delta:1
        })
      }
        })
     
    }
});
  