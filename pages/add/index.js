// pages/add/index.js
Page({
  data: {
    textareaSize:  { maxHeight: 1000, minHeight: 200 },
    fileList: [],
    name: "",  //留言人姓名 
    message: "",  //留言内容
  },
  submitMessage(){
    // 获取数据库引用
    const db = wx.cloud.database()
    const messageList = db.collection('messageList')
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    messageList.add({
      data: {
        name: this.data.name,
        message: this.data.message,
        date: `${month}月${day}日`
      }
    }).then(res => {
      wx.switchTab({  
        url:'../../pages/index/index'  
      });  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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