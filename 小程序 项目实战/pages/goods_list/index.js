import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
            {
                id: 0,
                value: "综合",
                isActive: true
            },
            {
                id: 1,
                value: "销量",
                isActive: false
            },
            {
                id: 0,
                value: "价格",
                isActive: false
            }
        ],
        goodslist: []
    },
    handletabChange(e) {
        let { index } = e.detail

        let { tabs } = this.data
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
        this.setData({
            tabs
        })
    },
    // 要接收的参数
    QueryParams: {
        cid: "",
        pagenum: 1,
        pagesize: 10
    },
    //总页数
    totalPages: 1,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        this.QueryParams.cid = options.cid
        this.getGoodList()
      
    },
    // 获取商品列表数据
    async getGoodList() {
        const res = await request({ url: "/goods/search", data: this.QueryParams })
        console.log(res);
        //得到总页数
        const total = res.data.message.total
        this.totalPages = Math.ceil(total / this.QueryParams.pagesize)
        
        this.setData({
            goodslist: [...this.data.goodslist, ...res.data.message.goods]
        })
        //  关闭下拉刷新窗口，如果没调用下拉刷新窗口，直接关闭也不会报错
        wx.stopPullDownRefresh()
          
    },
    onReachBottom() {
        if (this.QueryParams.pagenum >= this.totalPages) {
            wx.showToast({
                title: '已经没有了',
              
            });
        }
        else { 
            this.QueryParams.pagenum++;
            this.getGoodList()
        }
    },
    
    onPullDownRefresh() { 
        console.log("刷新");
        //重置数组
        this.setData({
            goodslist:[]
        })
        // 重置页码
        this.QueryParams.pagenum = 1;
        // 发送请求
        this.getGoodList();
    }
 
})