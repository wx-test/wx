// 引入代码
let call = require('./request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictureList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // 调用封装的方法,为了方便我直接在u二面加载的时候i执行这个方法
    call.request('lunbo.do', this.shuddleSuc, this.fail);
  },
  shuddleSuc: function(data){
    let that = this;
    that.setData({
      pictureList:data.rows,
    })
  }
})