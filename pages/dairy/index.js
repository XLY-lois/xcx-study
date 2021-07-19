// pages/dairy/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    textareaSize:  { maxHeight: 1000, minHeight: 200 },
    fileList: {},
  },
  choseImg(){
    const now = new Date().getTime();
    wx.chooseImage({
      success: chooseResult => {
        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: `imgs/my-photo${now}.png`,
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res)
            this.setData({
              fileList:{url:res.fileID}
            })
          },
        })
      },
    })
  },
  submit(){
       // 获取数据库引用
       const db = wx.cloud.database()
       const messageList = db.collection('dairyList')
       const date = new Date()
       const month = date.getMonth() + 1
       const day = date.getDate()
       messageList.add({
         data: {
           content: this.data.content,
           title: this.data.title,
           date: `${month}月${day}日`,
           imgId: this.data.fileList.url
         }
       }).then(res => {
         wx.switchTab({  
           url:'../../pages/index/index'  
         });  
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