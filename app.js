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
      success () { //登录没过期
        console.log("success")
      },
      fail () {  //登录过期
          console.log("fail")
          let time = new Date()
          wx.login({
            success: res => {
              wx.cloud.callFunction({
                name:'getOpenid',
                complete:res=>{
                  const curOpenid = res.result.openId
                  wx.setStorage({ //本地存储openid
                    key:"curOpenid",
                    data:curOpenid
                  })
                  // 获取数据库引用
                  const db = wx.cloud.database()
                  const userList = db.collection('userList')
                  userList.get().then(res => {
                    let userArr = res.data
                    if(userArr.length>0){
                      userArr.forEach(ele => {
                        if(ele.openid === curOpenid) { //用户打开过小程序
                          console.log("ele.openid === curOpenid")
                        }else{ //将用户的openid 加到到用户表
                          console.log("ele.openid != curOpenid")
                          userList.add({
                            data: {
                              openid: curOpenid,
                              time
                            }
                          })
                        }
                      })
                    }else{
                      userList.add({
                        data: {
                          openid: curOpenid,
                          time
                        }
                      })
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
