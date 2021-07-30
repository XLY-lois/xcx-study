
//此函式用来把存储中的icon的url写入数据库中
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')


cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  // collection 上的 get 方法会返回一个 Promise，因此云函数会在数据库异步取完数据后返回结果
  let res = db.collection('classificationList').get()

  return res
}