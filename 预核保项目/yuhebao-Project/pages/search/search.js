const app = getApp()

Page({
  data: {
    //这是页面需要的json
    list: [
      {
        'id':'1',
        'name':'高血压',
      },
      {
        'id':'2',
        'name':'高血脂',

      },
      {
        'id':'3',
        'name':'肩周炎',
      },
      {
        'id':'4',
        'name':'腰间盘突出',
      },
      {
        'id':'5',
        'name':'重感冒',
      },
      {
        'id':'6',
        'name':'心脏病',
      },
    ],	
    //这是查询需要的json
	  list2: [
      {
        'id':'1',
        'name':'高血压',
      },
      {
        'id':'2',
        'name':'高血脂',

      },
      {
        'id':'3',
        'name':'肩周炎',
      },
      {
        'id':'4',
        'name':'腰间盘突出',
      },
      {
        'id':'5',
        'name':'重感冒',
      },
      {
        'id':'6',
        'name':'心脏病',
      },
    ]	
  },
  // 搜索
  query(e){
    console.log('111')
    var list = this.data.list2;		//先把第二条json存起来
    var list2 = [];		//定义一个数组
    //循环去取数据
    for(var i=0;i<list.length;i++){
      var string = list[i].name;
      //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组
      if(string.indexOf(e.detail.value) >= 0){
        list2.push(list[i]);
      }
    }
    //到这里list2就已经是你查出的数据
    //如果输入的关键词为空就加载list数据，不是空就加载list2数据
    if(e.detail.value == ""){
      //加载全部
      this.setData({
        list: list
      })
    } else {
      this.setData({
        list: list2
      })
    }
  },
  // 点击疾病详情页
  onillnessDetail:function(){
    wx.navigateTo({
      url: '/pages/prolem/prolem'
    })
  }
})
