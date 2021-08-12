// pages/prepage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:''
  },
  getUserInfo(){
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
      }
    })
  },
  jumpToTab(e){
    // this.getUserInfo()
    let url = e.currentTarget.dataset.url
    wx.switchTab({  
      url:url
    });  
  },
  jumpTo(e) {
    // this.getUserInfo()
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
      success: function(res) {
    
      },
      fail: function(res) {
    
      },
      complete: function(res) {
      },
     })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 获取数据库引用
    //  const db = wx.cloud.database()
    //  const classificationList = db.collection('classificationList')
    //  let len = 34
    //  for(let i=0;i < len;i++){
    //   classificationList.add({
    //     data: {
    //       classId: '100'+(i+5),
    //       classVal: '',
    //       iconUrl:'cloud://xcx-study-1gfs98ik9fcf0faa.7863-xcx-study-1gfs98ik9fcf0faa-1306433877/accountIcons/'
    //     }
    //   }).then(res => {
    //     console.log(res)
    //   })
    //  }
     
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