/// <reference types="vite/client" />

declare module '*.vue' {
  import type { ComponentOptions, DefineComponent, ComponentOptionsBase } from 'vue'
  const component: DefineComponent<{}, {}, any> | DefineComponent<> | ComponentOptions['setup'] | ComponentOptionsBase
  export default component
}
declare interface Window {
  title: any
  zmweather_app: any
  WVJBCallbacks: any
  WebViewJavascriptBridge: any
  loginSuccess: any
}
