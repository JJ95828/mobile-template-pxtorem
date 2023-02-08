import { isAndroid, isIOS } from '@/utils/env'
type AppType =
  /** 自定义分享 */
  | 'preShare'
  | /** 普通分享 */ 'share'
  | /** 保存图片 */ 'savePic'
  | /** 分享海报图 */ 'shareImage'
  | /** 跳转发现携程页 */ 'showFindXieCheng'
  | /** 跳转我的tab页 */ 'mnio'
export default (type: AppType, data?: any) => {
  function setupWebViewJavascriptBridge(callback: any) {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
  // 自定义分享链接
  // let json = {
  //   type: 'activity',
  //   uiType: 0,
  //   title: '我在最美天气集天气碎片，快来加入吧！',
  //   desc: '集齐6个碎片，拿腾讯视频会员月卡~',
  //   iconUrl: 'http://jq.zuimeitianqi.com/webPage/solarterm/static/holi-jisuipian.png' // shareUrl: "https://www.baidu.com.cn"
  //   // shareUrl: 'http://jq.zuimeitianqi.com/webPage/solarterm/#/' + `videoPage?userId=${userId}&softVer=${softVer}&tourist=${tourist}&source=h5`
  // }
  // 分享海报图
  // let json = {
  //   image: '图片地址',
  //   title: '',
  //   content: ''
  // }
  // 普通分享
  if (type === 'share') {
    return setupWebViewJavascriptBridge(function (bridge: any) {
      bridge.callHandler('share', JSON.stringify(data), function (response: any) {})
    })
  }
  // 自定义分享
  if (type === 'preShare') {
    if (isAndroid) {
      if (window.zmweather_app) {
        window.zmweather_app.onSetShareMessage(JSON.stringify(data))
      }
    } else {
      setupWebViewJavascriptBridge(function (bridge: any) {
        bridge.callHandler('onSetShareMessage', JSON.stringify(data), function (response: any) {})
      })
    }
  }
  //保存图片
  if (type === 'savePic') {
    if (isAndroid) {
      window.zmweather_app.savePic(`http://jq.zuimeitianqi.com/webPage/uupt/images/${data}.png`)
    }
    return setupWebViewJavascriptBridge(function (bridge: any) {
      bridge.callHandler('savePic', data, function (response: any) {})
    })
  }
  //
  if (type === 'shareImage') {
    return setupWebViewJavascriptBridge(function (bridge: any) {
      bridge.callHandler('shareImage', data, function (response: any) {})
    })
  }
  if (type === 'showFindXieCheng') {
    if (isIOS) {
      window.location.href = `router://app/main?tab=2&target_info={"chl":"t53e1f5de58"}`
    } else if (isAndroid) {
      window.zmweather_app.startPage(`router://app/main?tab=2&target_info={"chl":"t53e1f5de58"}`)
    }
  }
  if (type === 'mnio') {
    if (isIOS) {
      window.location.href = 'router://main?table=mine'
    } else if (isAndroid) {
      window.zmweather_app.startPage(`router://app/main?tab=3`)
      // window.zmweather_app.startPage(`router://app/main?table=mine`)
    }
  }
}
