Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchLists:[
      { imgSrc:'../images/doctor.png', disc:'找医生'},
      { imgSrc:'../images/drug.png', disc:'找药品'},
      { imgSrc:'../images/illness.png', disc:'查疾病'},
      { imgSrc:'../images/blackboard.png', disc:'医师讲堂'},
    ],
    banenrUrls:[
      "../images/banner1.jpg",
      "../images/banner2.jpg",
      "../images/banner3.jpg",
      "../images/banner4.jpg",
    ],
    teacherList:[
      {
        mainTit:'隐形正畸的危害？30岁再进行正畸还来得及吗？',
        secTit:'杨半仙·深圳市香港大学深圳医院·主治医师',
        nowPrice:'¥9.00',
        oldPrice:'¥39.00',
        join:'888',
        image:'../images/banner1.jpg'
      },
      {
        mainTit: '秃顶为什么没有被自然选择淘汰？',
        secTit: '一个性状是否会被自然选择淘汰，不止...',
        nowPrice: '¥20.00',
        oldPrice: '¥88.00',
        join: '128',
        image: '../images/banner2.jpg'
      },
      {
        mainTit: '患者问：医生您好！我在初中时因为过马路时被小轿车撞到脚部导致骨折，近两年腿部经常感...',
        secTit: '您好！很荣幸帮助你！根据您的描述，您可能是因为初中时的车祸导致了骨质问题，你最好先去医院进行拍...',
        nowPrice: '¥9.00',
        oldPrice: '¥39.00',
        join: '888',
        image: '../images/banner3.jpg'
      },
      {
        mainTit: '秃顶为什么没有被自然选择淘汰？',
        secTit: '一个性状是否会被自然选择淘汰，不止...',
        nowPrice: '¥20.00',
        oldPrice: '¥88.00',
        join: '128',
        image: '../images/banner2.jpg'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
})