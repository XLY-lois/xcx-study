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
    recordList:[],
    curOpenid:''
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
      this.setData({ //获取当前openid
        curOpenid: wx.getStorageSync("curOpenid")
      })
      console.log("curOpenid:"+wx.getStorageSync("curOpenid"))
      recordList.get().then(res => {
        console.log("res:"+JSON.stringify(res))
        let recordArr = []
        if(res.data.length){
          res.data.forEach(ele =>{
            if(ele._openid === this.data.curOpenid){
              recordArr.push(ele)
            }
          })
        }
        this.setData({
          recordList:recordArr
        })
        console.log("list:"+JSON.stringify(this.data.recordList))
      })
   },
  }
})
