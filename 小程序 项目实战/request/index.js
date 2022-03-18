export const request = (params) => {
 
    return new Promise((resolve, reject) => {
        // 定义一个共有前缀
        wx.showLoading({
            title: '加载中',
        })
       
      console.log(params);
        const baseUrl ="https://api-hmugo-web.itheima.net/api/public/v1"
        wx.request({
            data:params.data,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result)
                console.log(baseUrl + params.url);
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => { 
            wx.hideLoading()
              
            }
                })
    }) 
}  
