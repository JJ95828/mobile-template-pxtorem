// ssr support
export const inBrowser = typeof window !== 'undefined'
export const ua = inBrowser && navigator.userAgent.toLowerCase()
export const isWeChatDevTools = () => {
  if (!ua) return
  const res = ua.match(/micromessenger/i)
  if (!res) return
  return res[0] === 'micromessenger'
}
export const isAndroid = ua && (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1 || ua.indexOf('android') > 0) //安卓
export const isIOS = ua && /(iPhone|iPad|iPod|iOS)/i.test(ua) //ios终端
