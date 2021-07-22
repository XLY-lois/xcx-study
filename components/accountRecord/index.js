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
    }
  }
})
