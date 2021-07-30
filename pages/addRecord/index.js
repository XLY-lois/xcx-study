// pages/addRecord/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeCollapse: [''],
    color: {
      'pay':'',
      'income':''
    },
    type:'',
    money: '', //记录金额
    desc:'', //备注
    curClass:'',
    iconUrl:'', //当前选中类型的url
    classificationList:[]
  },
  onChangeCollapse(event) {
    this.setData({
      activeCollapse: event.detail,
    });
  },
  onChangeMoney(event){
    this.setData({
      money:event.detail
    })
  },
  chooseType(e){
    if(e.target.dataset.type == 'income') {
      this.setData({
        color:{
          'income':'#faa755',
          'pay':''
        },
      })
      this.setData({
        'type':'income'
      })
    }else if(e.target.dataset.type == 'pay') {
      this.setData({
        color:{
          'income':'',
          'pay':'#faa755'
        }
      })
      this.setData({
        'type':'pay'
      })
    }
  },
  getClassList () {
    // 获取数据库引用
    const db = wx.cloud.database()
    const classificationList = db.collection('classificationList')
    // 获取集合（Promise 风格）
    classificationList.get().then(res => {
      this.setData({
        classificationList: res.data
      })
      console.log(this.data.classificationList)
    })
  },
  onChooseClass(e){
    let curClass = e.currentTarget.dataset.classid
    let iconUrl = e.currentTarget.dataset.iconurl
    this.setData({
      curClass,
      iconUrl
    })
  },
  onSubmit(e){
    // 获取数据库引用
    const db = wx.cloud.database()
    const recordList = db.collection('recordList')
    const time = new Date()
    // const month = date.getMonth() + 1
    // const day = date.getDate()
    recordList.add({
      data: {
        amount:this.data.money,
        classId:this.data.curClass,
        iconUrl:this.data.iconUrl,
        desc:this.data.desc,
        type:this.data.type,
        time
      }
    }).then(res => {
      wx.navigateTo({
        url: '../accounting/index'
      })
      console.log(res) 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClassList()
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