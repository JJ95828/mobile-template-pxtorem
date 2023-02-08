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

// 获取连续的三天
export const GetDateStr = (AddDayCount: number = 0) => {
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
 * 获取图片静态资源
 * `../assets/images/${url}`
 * @param {string|string[]} arg
 * @returns
 */
export const getAssetsFile = (...arg: string[]) => getAssets(arg.map((v) => `images/${v}`))

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
 * 自清除延时器
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
 * 获取数据类型 返回 例：string file
 * @param {any} val
 * @returns {string}
 */
export const getDataType = (val: any) => Object.prototype.toString.call(val).split(' ')[1].replace(']', '').toLocaleLowerCase()
