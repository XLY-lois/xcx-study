// components/accountRecord/index.js
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
    recordList:[]
  },
  lifetimes: {
    attached: function() {
      this.getRecordList()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
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
    },
    getRecordList(){
      // 获取数据库引用
      const db = wx.cloud.database()
      const recordList = db.collection('recordList')
      recordList.get().then(res => {
        this.setData({
         recordList: res.data
        })
      })  
   },
  }
})
