Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/',
      success(res) {
        console.log(res.data)
      }
    })
  },
  onGotUserInfo(e) {
    let userInfo =  e.detail.userInfo;
    console.log(userInfo)
    this.setData({
      userInfo:userInfo,
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../../pages/about/about',
    })
  }
})