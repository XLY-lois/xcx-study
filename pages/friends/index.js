// pages/friends/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendsList: [
      {
        name: 'jack',
        desc: '很短的描述',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-71dcef82c8afb85dacd42a995f64f1b5_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627204847&t=919e6d9eec562ffe4efba4fb49be6951'
      },
      {
        name: 'rose',
        desc: '很短的描述',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627204847&t=f2a2b0e71578844b840374b21817f7bf'
      },
      {
        name: 'tony',
        desc: '很短的描述很短的描述很短的描述很短的描述很短的描述很短的描述',
        avatar: 'https://img1.baidu.com/it/u=623994087,1173615898&fm=26&fmt=auto&gp=0.jpg'
      },
      {
        name: 'jackson',
        desc: '很短的描述',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdp.gtimg.cn%2Fdiscuzpic%2F0%2Fdiscuz_x5_gamebbs_qq_com_forum_201306_19_1256219xc797y90heepdbh.jpg%2F0&refer=http%3A%2F%2Fdp.gtimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627204894&t=2765e6e7c1b090619ce529f92c3e2857'
      },
      {
        name: 'jenny',
        desc: '很短的描述很短的描述很短的描述很短的描述很短的描述很短的描述很短的描述',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-8bd5ecff68b6d2ba603d1c5cc2de56f5_hd.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627204894&t=f612f51a6d7efe40f0414350da2d1bb7'
      },
    ]
  },
  jumpTo(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
      success: function(res) {
    
      },
      fail: function(res) {
    
      },
      complete: function(res) {
      },
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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