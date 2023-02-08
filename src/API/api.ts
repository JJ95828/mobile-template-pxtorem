import req from './req'

type DataParams = {
  [key: string | number]: any
}
export type Params = null | DataParams | any

export default {
  //信息流广告/新闻
  GetInformation: (params: Params) => req('get', `https://info.zuimeitianqi.com/infoFlowServer/infoflowFilter`, params),
  //获取天气详情
  GetWeatherData: (params: Params) => req('get', 'https://pub.zuimeitianqi.com/pubDataServer/getweatherpub', params),
  //数据统计https://log.zuimeitianqi.com/zmLogServer/feedback
  GetTotal: (params: Params) =>
    req(
      'post',
      process.env.NODE_ENV != 'production' ? 'https://t.zuimeitianqi.com/zmLogServer/feedback' : 'https://log.zuimeitianqi.com/zmLogServer/feedback',
      params
    ), // 线上
  //H5广告
  GetAdv: (params: Params) => req('post', 'https://ad.zuimeitianqi.com/AdvertisServer/adserverThirdfilter/', params),
  //H5广告事件上报
  WinNotice: (url: string) => req('get', url),
  WinNoticePost: (url: string, params: Params) => req('post', url, params),
  //获取微信的签名
  // GetSign:params => req("get","https://jq.droibaas.com/api/scenic/getSignPackage",params), // 证书过期了
  GetSign: (params: Params) => req('get', 'http://124.70.209.190:8081/api/scenic/getSignPackage', params),
  //获取景区公告
  GetNotice: () => req('get', 'https://b2b.wuzhizhou.com/info/api/info/listInfoContentByMenuCode?menuCode=notice&corpCode=cgb2cfxs')
}
