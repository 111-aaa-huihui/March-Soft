// pages/category/index.js
import { request} from "../../request/index.js"
Page({

    data: {
        //左侧数据
        leftList:[],
        //右侧数据
        rightList: [],
        //被点击的左侧菜单
        currentIndex: 0,
        // 切换的时候，自动到顶部
        scrollNumber: 0,
        // 右侧内容
    },
    // 接口返回数据
    Cates:[],
    onLoad: function (options) {
        
        const Cates = wx.getStorageSync("cates");
        if (!Cates) {
            this.getCates()
        }
        else { 
            if (Date.now() - Cates.time > 1000 * 10) {
                this.getCates()
            }
            else { 
                this.Cates = Cates.data;
                let leftList=this.Cates.map(v=>v.cat_name)
                //  构造右侧的商品数据
                let rightList =this.Cates[0].children
                this.setData({
                    leftList,
                    rightList
                }) 
            }
        }
    },
    
    // getCates(){
    //     request({ url: "/categories" }).then(res => {
                
    //         this.Cates = res.data.message
    //         wx.setStorageSync("cates", {time:Date.now(),data:this.Cates})
    //             // 构造左侧的大菜单数据
    //             let leftList=this.Cates.map(v=>v.cat_name)
    //             //  构造右侧的商品数据
    //             let rightList =this.Cates[0].children
    //             this.setData({
    //                 leftList,
    //                 rightList,
           
    //             })
    //         })
    // },

    //优化
    async getCates() { 
        const res = await request({ url: "/categories" })
        this.Cates = res.data.message
            wx.setStorageSync("cates", {time:Date.now(),data:this.Cates})
                // 构造左侧的大菜单数据
                let leftList=this.Cates.map(v=>v.cat_name)
                //  构造右侧的商品数据
                let rightList =this.Cates[0].children
                this.setData({
                    leftList,
                    rightList,
           
                })
    },
    handleItemTap(e) { 
        let { index } = e.currentTarget.dataset
   
        let rightList =this.Cates[index].children
        this.setData({ 
            scrollNumber:0,
            currentIndex: index,
            rightList
            
         })
    }

 
})