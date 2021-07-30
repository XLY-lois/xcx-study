const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
exports.main = async (event, context) => {
  // let recordList = db.collection('recordList').get()
  // console.log(recordList)
  return db.collection('recordList').get()
}