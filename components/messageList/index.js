// components/messageList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    messageList: []
  },
  pageLifetimes: {
    show: function() {
      this.getList()
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getList () {
      // wx.getUserProfile({
      //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      //   success: (res) => {
      //     console.log(res)
      //   }
      // })
      // 获取数据库引用
      const db = wx.cloud.database()
      // 获取名为“banner”的集合引用
      const messageList = db.collection('messageList')
      // 获取集合（Promise 风格）
      messageList.get().then(res => {
        this.setData({
          messageList: res.data
        })
        // console.log(this.data.messageList)
      })
    },
    jumpTo(e) {
      let url = e.currentTarget.dataset.url
      wx.navigateTo({
        url: url,
        success: function(res) {
        },
        fail: function(res) {
          console.log(res)
        },
        complete: function(res) {
        },
       })
    }
  }
})
