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
  }
});