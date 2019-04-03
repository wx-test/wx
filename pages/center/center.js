const app = getApp();
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad: function () {
  },
  getUserInfo(info) {
    const userInfo = info.detail.userInfo;
    console.log(userInfo);
    this.setData({
      userInfo,
    })
  },
})