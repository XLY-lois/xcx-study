// components/xingzuo/index.js
// import Toast from '@vant/weapp/dist/toast/toast';

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
    option1: [
      { text: '白羊座', value: '白羊座' },
      { text: '金牛座', value: '金牛座' },
      { text: '双子座', value: '双子座' },
      { text: '巨蟹座', value: '巨蟹座' },
      { text: '狮子座', value: '狮子座' },
      { text: '处女座', value: '处女座' },
      { text: '天秤座', value: '天秤座' },
      { text: '天蝎座', value: '天蝎座' },
      { text: '射手座', value: '射手座' },
      { text: '摩羯座', value: '摩羯座' },
      { text: '水瓶座', value: '水瓶座' },      
      { text: '双鱼座', value: '双鱼座' },
    ],
    option2: [
      { text: '今日', value: 'today' },
      { text: '明日', value: 'tomorrow' },
      { text: '本周', value: 'week' },
    ],
    value1: "白羊座",
    value2: 'today',
    curInfo:{},
    showPicker: false,
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      // this.getInfo()
    },
    hide: function () { },
    resize: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getInfo() {
      console.log(this.data.value2)
      wx.request({
        url: 'http://web.juhe.cn:8080/constellation/getAll', 
        data: {
          consName:this.data.value1,
          type:this.data.value2,  
          key:"469a3543b44d0f17b6a62ad93a36afb1",
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res)=> {
          if(res.data.resultcode === "112") {
            wx.showToast({
              title: '请求超过次数限制',
              icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
              duration: 2000     
            })  
          }
          this.setData({
            curInfo:res.data
          })
        }
      })
      // console.log(`当前值：${value}, 当前索引：${index}`);
    },
    toShowPicker(){
      this.setData({
        showPicker:true
      })
    },
    onClickHide() {
      this.setData({ showPicker: false });
    },
    onSwitch1Change({ detail }) {
      this.setData({ value1: detail });
    },
    onSwitch2Change({ detail }) {
      this.setData({ value2: detail });
    },
  }
})
