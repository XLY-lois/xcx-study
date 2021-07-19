// components/dairyList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  pageLifetimes: {
    show: function() {
      this.getList()
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    dairyList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getList () {
      // 获取数据库引用
      const db = wx.cloud.database()
      // 获取名为“banner”的集合引用
      const messageList = db.collection('dairyList')
      // 获取集合（Promise 风格）
      messageList.get().then(res => {
        this.setData({
          dairyList: res.data
        })
        console.log(this.data.dairyList)
      })
    },
  }
})
