import { isAndroid, isIOS } from '@/utils/env'
type Callback = (userId: string | null) => void
/**
 * 最美天气App端内 调用登录
 * @param fn 登录成功的回调
 * @returns
 */
export const Login = (fn: Callback) => {
  const global = window
  global['loginSuccess'] = fn
  if (isAndroid) {
    return global['zmweather_app'].login()
  }
  if (isIOS) {
    setupWebViewJavascriptBridge(function (bridge: any) {
      bridge.callHandler('login', '', function (response: any) {})
    })
    function setupWebViewJavascriptBridge(callback: any) {
      if (global.WebViewJavascriptBridge) {
        return callback(global.WebViewJavascriptBridge)
      }
      if (global.WVJBCallbacks) {
        return global.WVJBCallbacks.push(callback)
      }
      global['WVJBCallbacks'] = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'https://__bridge_loaded__'
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    }
  }
}
