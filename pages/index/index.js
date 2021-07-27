Page({
  data: {
    active: 0,
    totalMoney: 123
  },
  tabChange(event) {
    // console.log(event.detail.name)
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },
  changeParent(event){
    this.setData({
      totalMoney: event.detail
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
  },
});