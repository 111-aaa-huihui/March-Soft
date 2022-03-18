//Page Object
import {request} from "../../request/index"
Page({

  //options(Object)
  data: {
    //轮播数组
    swiperList: [],
    // 分类导航数据
    cataList: [],
    // 楼层数据
    floorList:[] 
  },
 
  // 
  onLoad: function (options) {
  // wx.request({
  //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
  //   success: (result) => { 
  //     console.log(result)
  //     this.setData({
  //       swiperList: result.data.message 
  //     })
  //     console.log(this.swiperList)
  //   }
    this.getSwiperList();
    this.getCataList();
    this.getFloorList();
  },
  // 获取轮播图的数据
  getSwiperList(){
    request({url:"/home/swiperdata"}).then((result)=>{
      this.setData({
          swiperList:result.data.message
      })
        })
  },
  //获取分类管理数据
  getCataList(){
    request({ url: "/home/catitems" }).then(result => { 
      this.setData({
          cataList:result.data.message
        })
    })
  },
// 获取楼层数据
  getFloorList() { 
    request({ url: "/home/floordata" }).then(result => { 
      this.setData({
        floorList:result.data.message
      })
    })
  }
});
