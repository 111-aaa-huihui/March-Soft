// pages/prolem/prolem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioId:"",
    loves:[
    {id:1, name:"流鼻涕"},
    {id:2, name:"头晕" },
    {id:3, name:"肚子痛" },
    {id:4, name:"腿疼" },
    ],
	likes:[
	{id:1, name:"冷空气"},
	{id:2, name:"气温较低" },
	{id:3, name:"环境恶劣" },
	{id:4, name:"天气热" },
	],
  },
  updataRadio:function(e){
	  var Id=e.value.id
	  this.setData({
	  radioId:Id
	  })
	  },
  toSuggestion(){
    wx.navigateTo({
      url: '/pages/suggestion/suggestion',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})