import { LocationValueType } from '@/types/index'
//下载app
import { isIOS, ua } from './env'
import ReqHome from '@/API/api'
//高德地图KEY
export const GaoDeKey = 'e7310e7ead3d3648f9fe2fe36a3e5208'
//天气秘钥
export const KEY = '3b0f6a62d72cacdbb818657882d4254b'
//统计KEY
// 上海产业气象H5：9df46802fd04016ca5dc3b906068a06c
// 上海最美APPH5：c4b90623ca8e74c2b653d33c796e59f5
export const TotalKey = 'c4b90623ca8e74c2b653d33c796e59f5'
export const TotalChannel = 'ZM221215' // 项目名
const devFlag = 'ZuiMeiDevId220711' // 设备号
//信息流key 区分开
export const InformationKey = '3b0f6a62d72cacdbb818657882d4254b'
//H5广告配置
export const AdConfig = {
  apikey: '3b0f6a62d72cacdbb818657882d4254b',
  adspaceId: 501,
  appId: 991
}

//数据统计标识
export const pageId = {
  H5: 'JQ01', //默认,
  H5wx1: 'JQ02_01', //公众号入口1
  H5wx2: 'JQ02_02', //公众号入口2
  H5wx3: 'JQ02_03', //短信，短链
  H5wx4: 'JQ02_04', //景区页面跳转
  H5Short: 'JQ06' //H5短临页面
}
/**
 * 时间转换
 * @param {string} timestamp
 * @returns
 */
export const date = (timestamp: string) => {
  if (typeof timestamp == 'string') {
    //兼容IOS获取时间戳出现NAN问题
    timestamp = timestamp.replace(/-/g, '/')
  }
  var date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  return h + m
}
function createDevId() {
  var pasArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-'
  ]
  var password = devFlag
  var pasArrLen = pasArr.length
  for (var i = 0; i < 20; i++) {
    var x = Math.floor(Math.random() * pasArrLen)
    password += pasArr[x]
  }
  return password
}

//生成数据统计所用的用户唯一标识
export const DEVID = {
  getDevId() {
    let result = localStorage.getItem(devFlag)
    if (!result) {
      result = createDevId()
      this.setDevId(result)
    }
    return result
  },
  setDevId(id: any) {
    localStorage.setItem(devFlag, id)
  }
}
/**
 * 获取localStorage     getStore    setStore
 */
export const getStore = (name: string | null) => {
  if (!name) {
    return true
  } else {
    return window.localStorage.getItem(name)
  }
}
/**
 * 存储localStorage
 */
export const setStore = (name: string, content: string | any) => {
  // console.log(name + ':' + content);
  if (!name) {
    return
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export const DownApp = (_tVue: any) => {
  // if (_tVue.$route.query.source == 1) {
  //     console.log("在小程序里面打开")
  //     return;
  // }
  // let apkLink = "";
  // let oriId = _tVue.$store.state.oriId || "05";
  // if(_tVue.$store.state.homeData.mobilelink){
  //     apkLink = _tVue.$store.state.homeData.mobilelink;
  // }else if(_tVue.$store.state.locWeatherData.mobilelink){
  //     apkLink = _tVue.$store.state.locWeatherData.mobilelink;
  // }else{
  //     apkLink = "https://dl.zuimeitianqi.com/zmapp/ZuimeiWeather_43803.apk";
  // };
  // page = page ? page : pageId.H5;
  // if(isWeChatDevTools){
  //   //打开浏览器直接跳转下载
  // //   _tVue.$router.push(_tVue.$route.path + '?oriId='+oriId +'&downapp=true&page='+ page+'&apklink=' + apkLink);
  //   _tVue.$openBrowser.show(_tVue);//提示用户打开浏览器访问
  //     return;
  // }
  var platform = navigator.platform
  var agent = navigator.userAgent
  if (platform.indexOf('iPhone') >= 0) {
    // // _czc.push([ "_trackEvent", "zmtq_h5_download_ios", "最美2021年度天气报告", "zmtq_h5_download_ios", 1, "",]);
    window.location.href = 'https://itunes.apple.com/cn/app/id1117930483'
  } else {
    if (agent.indexOf('MicroMessenger') >= 0) {
      // // _czc.push([ "_trackEvent", "zmtq_h5_wechat_click", "最美2021年度天气报告", "zmtq_h5_wechat_click", 1, "",]);
      _tVue.$openBrowser.show(_tVue) //提示用户打开浏览器访问
    } else {
      // // _czc.push([ "_trackEvent", "zmtq_h5_download_android", "最美2021年度天气报告", "zmtq_h5_download_android", 1, "",]);
      // window.location.href = "https://update.zuimeitianqi.com/2001/weafile/apk/XY_CP_IcmWeather.apk"; // 老版本
      window.location.href = 'https://dl.zuimeitianqi.com/zuimeitianqi/zmapp/XY_CP_IcmWeather.apk' // 新版本
    }
  }

  // LocatHref(apkLink,page,oriId);
}

//跳转方式
export const LocatHref = (link: LocationValueType, page?: LocationValueType, oriId?: LocationValueType) => {
  //下载APP事件推送
  oriId = oriId || '05'
  ReqHome.GetTotal({
    requestType: 'application/json',
    appKey: TotalKey,
    dc: {
      devNo: DEVID.getDevId(),
      osType: 3,
      ua: ua,
      chl: '43803'
    },
    ec: [{ type: 7, pageId: page || pageId.H5, eventType: 2, oriId }]
  })
  if (!isIOS) {
    window.location.href = link ? (link as string) : 'http://dl.zuimeitianqi.com/zmapp/ZuimeiWeather_13800.apk'
  } else {
    window.location.href = 'https://apps.apple.com/cn/app/id1117930483'
  }
}

//信息流 Imei/idfa
function createImei() {
  var pasArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]
  var password = '86'
  var pasArrLen = pasArr.length
  for (var i = 0; i < 13; i++) {
    var x = Math.floor(Math.random() * pasArrLen)
    password += pasArr[x]
  }
  return password
}
export const IMEI_IDFA = {
  getImei() {
    let result = localStorage.getItem('WZZD_IMEI')
    if (!result) {
      result = createImei()
      this.setImei(result)
    }
    return result
  },
  setImei(imei: any) {
    localStorage.setItem('WZZD_IMEI', imei)
  }
}

//获取url后参数
export const getRequest = () => {
  var url = location.search //获取url中"?"符后的字串
  var theRequest: { [key: string]: any } = new Object()
  if (url.indexOf('?') != -1) {
    var str = url.substr(1)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
//延迟加载友盟统计JS
export const lazLoadCnzz = () => {
  window.onload = function () {
    let md = document.createElement('div')
    md.style.display = 'none'
    var cz = document.createElement('script')
    cz.src = 'https://s4.cnzz.com/z_stat.php?id=1279220544&web_id=1279220544'
    md.appendChild(cz)
    document.body.appendChild(md)
  }
}

// 获取连续的三天
export const GetDateStr = (AddDayCount: number) => {
  var dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount) //获取AddDayCount天后的日期
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 //获取当前月份的日期，不足10补0
  var n = dd.getMonth() + 1 < 10 ? dd.getMonth() + 1 : dd.getMonth() + 1 //获取当前月份的日期，不足10不补0
  var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() //获取当前几号，不足10补0
  var d2 = dd.getDate() < 10 ? '' + dd.getDate() : dd.getDate() //获取当前几号，不足10补0
  var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  var w = weeks[dd.getDay()]
  var des = ''
  if (AddDayCount == 1) {
    des = '明天'
  } else if (AddDayCount == 2) {
    des = '后天'
  } else if (AddDayCount == 0) {
    des = '今天'
  } else {
    des = ''
  }
  return { y: y, m: m, d: d, w: w, n: n, d2, des: des }
}

/**
 * 判断当前页面位置是否在app内
 * @returns {boolean} true App中
 */
export const isInnerApp = () => {
  let uaInfo = navigator.userAgent.toLowerCase()
  /**
   *
   * @param {RegExpMatchArray | null} info
   * @param {string} flag
   * @returns {boolean}
   */
  const matchResultIf = (info: RegExpMatchArray | null, flag: string) => {
    if (!info) return false
    return info[0] === flag
  }
  if (isIOS) {
    // ios 中
    return matchResultIf(uaInfo.match(/ZuiMei/i), 'ZuiMei'.toLowerCase())
  } else {
    // 安卓中
    return matchResultIf(uaInfo.match(/zuimeiAndroid/i), 'zuimeiAndroid'.toLowerCase())
  }
}
const getImageBase64 = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height
  const ctx = canvas.getContext('2d')
  ctx?.drawImage(image, 0, 0, image.width, image.height)
  // 获取图片后缀名
  const extension = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase()
  // 某些图片 url 可能没有后缀名，默认是 png
  return canvas.toDataURL('image/' + extension, 1)
}
/**
 * 单张图片下载
 * @param url 图像链接
 * @param downloadName 图片名称
 */
export const downloadImage = (url: string, downloadName: string) => {
  const link = document.createElement('a')
  link.setAttribute('download', downloadName)
  const image = new Image()
  // 添加时间戳，防止浏览器缓存图片
  image.src = url
  // image.src = url + '?timestamp=' + new Date().getTime();
  // 设置 crossOrigin 属性，解决图片跨域报错
  image.setAttribute('crossOrigin', 'Anonymous')
  image.onload = () => {
    link.href = getImageBase64(image)
    //   link.href = image;
    link.click()
  }
}
/*
 * 传入两个字符串，当前版本号：curV；比较版本号：reqV
 * 调用方法举例：Version('5.12.3','5.12.2')，将返回true
 */
export const getVersion = (curV: string, reqV: string) => {
  var arr1 = curV.split('.')
  var arr2 = reqV.split('.')
  //将两个版本号拆成数字
  var minL = Math.min(arr1.length, arr2.length)
  var pos = 0 //当前比较位
  var diff = 0 //当前为位比较是否相等
  //逐个比较如果当前位相等则继续比较下一位
  while (pos < minL) {
    diff = parseInt(arr1[pos]) - parseInt(arr2[pos])
    if (diff != 0) {
      break
    }
    pos++
  }
  if (diff > 0) {
    // 新版本
    return true
  } else if (diff == 0) {
    // 稳定版
    return true
  } else {
    // 旧版本
    return false
  }
}
/**
 * 获取静态资源
 * `../assets/images/${url}`
 * @param {string|string[]} arg
 * @returns
 */
export const getAssetsFile = (arg: string | string[]) => {
  const getAssets = (url: string) => new URL(`../assets/images/${url}`, import.meta.url).href
  if (typeof arg === 'string') return getAssets(arg)
  return arg.map((v) => getAssets(v))
}

/**
 * 获取静态资源
 * `../assets/${url}`
 * @param {string|string[]} arg
 * @returns
 */
export const getAssets = (arg: string | string[]) => {
  const getAssets = (url: string) => new URL(`../assets/${url}`, import.meta.url).href
  if (typeof arg === 'string') return getAssets(arg)
  return arg.map((v) => getAssets(v))
}

/**
 * 自清楚延时器
 * @param {callBack} fn
 * @param {number} time 延时时长 默认0
 */
export const setTimeoutClear = (fn: () => void, time?: number) => {
  const key = setTimeout(() => {
    fn && fn()
    clearTimeout(key)
  }, time || 0)
}

/**
 * 获取数据类型
 * @param {any} val
 * @returns {string}
 */
export const getDataType = (val: any) => Object.prototype.toString.call(val).split(' ')[1].replace(']', '').toLocaleLowerCase()
