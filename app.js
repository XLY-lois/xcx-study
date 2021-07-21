// app.js

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.cloud.init({
      env: "xcx-study-1gfs98ik9fcf0faa",
      traceUser: true
    })
    wx.checkSession({ 
      success () { //登录过期
        return
      },
      fail () {  //登录没过期
          // 登录
          wx.login({
            success: res => {
              wx.cloud.callFunction({
                name:'getOpenid',
                complete:res=>{
                  console.log('云函数获取到的openid:',res)
                  // 获取数据库引用
                  const db = wx.cloud.database()
                  const userList = db.collection('userList')
                  userList.add({
                    data: {
                      openid: res.result.openId,
                    }
                  })
                }
              })
            }
          })
      }
    })
   
  },
  globalData: {
    userInfo: null
  }
})
