import { defineStore } from 'pinia'
import API from '@/API/api'
import { TotalKey, DEVID, TotalChannel, isInnerApp } from '@/utils/util'
import { ua } from '@/utils/env'
import { reactive, ref } from 'vue'
import req from '@/API/req'
import { jsonp } from 'vue-jsonp'
import { storage } from '@/utils/index'
import { cityList } from '@/API/config'

/**
 * 大数据统计
 * 事件：（type:7,eventType:2,pageId:页面名,eventName:事件名,spaceId:按钮）
 * 曝光：（type:2,eventType:1,pageId:页面名,eventName:"",spaceId:""）
 * 点击，eventType是传2，type传7    type为7是事件
 * 曝光，eventType是传1，type传2    type为2是进入
 * pageId 页面名
 * eventName 事件名
 * spaceId 点击事件传 按钮1,2,3
 */
export interface ParamsType {
  type: 7 | 2
  eventType: 2 | 1
  /**
   * 页面名称
   */
  pageId?: string
  /**
   * 事件名称
   */
  eventName: string
  /**
   * 点击事件
   */
  spaceId: string
}

export interface ActiveEventsTypes {
  [key: string]: (() => void)[]
}

export interface WarnTypeItemType {
  label: string
  num: number
}
export interface SeasonTempTypeItem extends WarnTypeItemType {
  dayid: string
  temp: number
  key: string
}
type SeasonBase = 'spring' | 'summer' | 'autumn' | 'winter'
export interface SeasonTempType {
  spring: SeasonTempTypeItem
  summer: SeasonTempTypeItem
  autumn: SeasonTempTypeItem
  winter: SeasonTempTypeItem
}
const userInfoDefault = {
  userId: '',
  touristId: '',
  currentLocation: '',
  currentLocationCode: '',
  selectLocationCode: '',
  selectLocation: '',
  ...storage.getItem('info')
}
export type UserInfoTypes = typeof userInfoDefault

/**
 * 节气温度时间
 */
const seasonsTemp = [
  {
    startTime: '20220204',
    endTime: '20220531',
    key: 'spring',
    warnType: [
      { hit: 4, type: 'warn', label: '寒潮' },
      { hit: 5, type: 'warn', label: '大风' },
      { hit: 21, type: 'warn', label: '降温' }
    ],
    coldOrHot: 'cold'
  },
  {
    startTime: '20220601',
    endTime: '20220831',
    key: 'summer',
    warnType: [
      { hit: 7, type: 'warn', label: '高温' },
      { hit: 1, type: 'warn', label: '台风' },
      { hit: 7, type: 'actual', label: '降雨' }
    ],
    coldOrHot: 'hot'
  },
  {
    startTime: '20220831',
    endTime: '20221031',
    key: 'autumn',
    warnType: [
      { hit: 4, type: 'warn', label: '寒潮' },
      { hit: 21, type: 'warn', label: '降温' },
      { hit: [12, 13], type: 'warn', label: '大雾' }
    ],
    coldOrHot: 'cold'
  },
  {
    startTime: '20221101',
    endTime: '20230131',
    key: 'winter',
    /**
     * 预警取得warnType 值，次数最高优先级越高 数值相同时 下标越小优先级越高
     */
    warnType: [
      { hit: [3, 7], type: 'actual', label: '降雨' },
      { hit: [13, 14], type: 'actual', label: '降雪' },
      { hit: 4, type: 'warn', label: '寒潮' },
      { hit: 21, type: 'warn', label: '降温' }
    ],
    /**
     * 取最高温度还是最低温度 cold 最低 hot 最高
     */
    coldOrHot: 'cold'
  }
]
/**
 * 数组求最大值
 * @param ary target
 * @param key ary[key]
 * @returns {{ index: number, max: number }}
 */
const maxValue = (ary: any[], key: string) => {
  let isAlike = true
  let index_ = 0
  let num = 0
  ary.forEach((item: any, index: number) => {
    if (index === 0) {
      num = item[key]
      index_ = index
    } else {
      if (isAlike && num !== item[key]) {
        isAlike = false
      }
      if (item[key] > num) {
        num = item[key]
        index_ = index
      }
    }
  })
  return { index: index_, max: num, isAlike }
}
export const useStore = defineStore('main', () => {
  const isApp = isInnerApp()
  /**
   * 是否已登陆
   */
  const isLogin = ref(true)

  const userInfo = reactive<UserInfoTypes>(userInfoDefault)

  const setLocationData = () => {
    const data = Object.keys(userInfo).reduce((prv: UserInfoTypes, cur) => {
      prv[cur] = userInfo[cur]
      return prv
    }, {})
    storage.setItem('info', data)
  }
  /**
   * 设置用户ID
   * @param val
   */
  const setUserId = (val: UserInfoTypes) => {
    userInfo.userId = val.userId
    userInfo.touristId = val.touristId
    userInfo.currentLocation = val.currentLocation
    userInfo.currentLocationCode = val.currentLocationCode
    setLocationData()
  }
  /**
   * 设置定位城市
   */
  const setCurrentLocation = (val: UserInfoTypes) => {
    userInfo.currentLocation = val.currentLocation || ''
    userInfo.currentLocationCode = val.currentLocationCode || ''
    setLocationData()
  }
  /**
   * 设置选择的城市
   * @param val
   */
  const setSelectLocation = (val: UserInfoTypes) => {
    userInfo.selectLocation = val.selectLocation || ''
    userInfo.selectLocationCode = val.selectLocationCode || ''
    setLocationData()
  }
  /**
   * 单页高度
   */
  const windowHeight = ref()
  const getWindowHeight = () => {
    const height = window.outerHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    if (isApp) {
      windowHeight.value = height
    } else {
      windowHeight.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }
  getWindowHeight()
  document.addEventListener('resize', getWindowHeight)
  /**
   * 当前地址的四季温度
   */
  const currentSeason = ref<SeasonTempType>()
  /**
   * 设置当前地址的四季温度
   */
  const setCurrentSeason = (data: SeasonTempType) => (currentSeason.value = data)
  /**
   * 选择地址的四季温度
   */
  const selectSeason = ref<SeasonTempType>()
  /**
   * 设置当前地址的四季温度
   */
  const setSelectSeason = (data: SeasonTempType) => (selectSeason.value = data)

  /**
   * 当前位置的预警信息统计
   */
  const currentWarnTotalAll = ref<WarnTypeItemType[]>()
  /**
   * 当前位置的预警信息
   */
  const selectWarnTotalAll = ref<WarnTypeItemType[]>()

  /**
   * 大数据统计
   * 事件：（type:7,eventType:2,pageId:页面名,eventName:事件名,spaceId:按钮）
   * 曝光：（type:2,eventType:1,pageId:页面名,eventName:"",spaceId:""）
   * 点击，eventType是传2，type传7    type为7是事件
   * 曝光，eventType是传1，type传2    type为2是进入
   * pageId 页面名
   * eventName 事件名
   * spaceId 点击事件传 按钮1,2,3
   * @param params
   */
  const dataCount = (params: ParamsType) => {
    const pageId = params.pageId || (isApp ? 'ndDNPAGE' : 'ndDWPAGE')
    const data = {
      appKey: TotalKey,
      dc: {
        devNo: DEVID.getDevId(), // 设备唯一id
        osType: 3, // web网页
        ua: ua,
        chl: TotalChannel // 项目名称
      },
      ec: [{ type: params.type, pageId: pageId, eventType: params.eventType, eventName: params.eventName, spaceId: params.spaceId }]
    }

    API.GetTotal(data)
  }
  /**
   * 动画事件流
   */
  const activeEvents: ActiveEventsTypes = {}
  const addActive = (key: string, cb: () => void) => {
    !activeEvents[key] && (activeEvents[key] = [])
    activeEvents[key].push(cb)
  }
  const dispatchActive = (key: string) => {
    activeEvents[key] && activeEvents[key].forEach((v) => v && v())
  }

  /**
   * 获取城市预警信息
   * @param cityCode 城市代码
   * @returns
   */
  const getWarnData = (cityCode: string) => {
    return req('get', '/4.0/', { procCode: 3234, cityCode: cityCode }).then((res) => {
      const { data } = res
      if (data.resultCode === 0 && data.resultInfo === 'OK') {
        return data.data.list
      }
    })
  }
  /**
   * 获取端外当前地址
   */
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      jsonp('https://api.map.baidu.com/location/ip?ak=XgNQS6ubZZoQlluTkF7gdqVOpCnFOmKC&coor=bd09ll&callback=weather.showLocation', {}).then(
        (res: any) => {
          if (res.status === 0) {
            const { address_detail } = res.content
            resolve(address_detail.city_code)
          } else {
            reject('获取位置失败')
          }
        }
      )
    })
  }

  interface GetTempProp {
    startTime: string
    endTime: string
    cityCode: string
  }
  /**
   * 获取 历史温度
   * @param data
   * @returns
   */
  const getTemp = (data: GetTempProp) => {
    return new Promise((resolve, reject) => {
      req('get', '/4.0/', {
        ...data,
        procCode: '3230'
      }).then((res) => {
        const { data } = res
        if (data.resultCode === 0 && data.resultInfo === 'OK') {
          resolve(data.data.weatherData)
          return
        }
        return resolve([])
      })
    })
  }

  /**
   * 获取 历史降水接口
   * @param data
   * @returns
   */
  const getRain = (cityCode: string) => {
    return new Promise((resolve, reject) => {
      req('get', '/4.0/', {
        cityCode,
        procCode: '3236'
      }).then((res) => {
        const { data } = res
        if (data.resultCode === 0 && data.resultInfo === 'OK') {
          resolve(data.data)
          return
        }
        return resolve({})
      })
    })
  }

  const url = import.meta.env.MODE === 'development' ? 'http://192.168.0.122:9095/' : 'https://attribute.zuimeitianqi.com/'
  /**
   * 获取关心次数
   * @returns
   */
  const getOpenNum = () => {
    interface ItemTabProp {
      click: number
      tab: string
    }
    const TabText = {
      '90天': '你对未来天气很是重视',
      我的: '你更喜欢便捷地查看天气哦',
      首页: '你对实况天气更关注呢',
      发现: '你对公益旅行很是偏爱哦'
    }
    return new Promise((resolve, reject) => {
      req('get', `${url}annual/care-weather`, { user_id: userInfo.userId }).then((res) => {
        const { data } = res
        console.log(data)
        let maxIndex = 0
        let max = 0
        if (data.length) {
          data.forEach((item: ItemTabProp, index: number) => {
            if (item.click > max) {
              max = item.click
              maxIndex = index
            }
          })
          resolve({ tabName: data[maxIndex].tab, tabText: TabText[data[maxIndex].tab as keyof typeof TabText], tabNum: data[maxIndex].click })
        } else {
          resolve(null)
        }
      })
    })
  }
  /**
   * 获取浏览页面
   * @returns
   */
  const getBrowsePageNum = () => {
    return new Promise((resolve, reject) => {
      req('get', `${url}annual/view-weather`, { user_id: userInfo.userId }).then((res) => {
        const { data } = res
        console.log(data)
        resolve(data || 0)
      })
    })
  }

  /**
   * 获取从注册到现在多少天
   * @returns
   */
  const getDateNum = () => {
    return new Promise((resolve, reject) => {
      req('get', `${url}annual/user-register`, { user_id: userInfo.userId }).then((res) => {
        const { data } = res
        if (!data) {
          resolve(0)
        }
        const result = Date.now() - data
        resolve(Math.ceil(result / 1000 / 60 / 60 / 24))
      })
    })
  }
  interface ItemType {
    dayid: string
    maxTemp: number
    minTemp: number
  }
  /**
   * 截取时间转化成Date
   * @param val
   * @param isDate
   * @returns
   */
  const getDateStr = (val: string, isDate: boolean | string = true) => {
    const str = [val.substring(0, 4), val.substring(4, 6), val.substring(6)].join('-')
    if (!isDate) return str
    if (isDate && typeof isDate === 'boolean') {
      return new Date(str).getTime()
    }
    return new Date(`${str} ${isDate}`).getTime()
  }
  /**
   * 获取四季温度及预警
   * @param cityCode
   * @returns
   */
  const getCityWeather = (cityCode: string, type: 'CURRENT' | 'SELECT') => {
    if (!cityCode) return
    return new Promise(async (resolve, reject) => {
      type RainSnowType = { cnweatherid_day: number; cnweatherid_night: number; w_date: number; $ref: string }
      interface RainSnowRes {
        rainDay: RainSnowType[]
        snowDay: RainSnowType[]
      }
      const rainOrSnow = await getRain(cityCode).then((res) => {
        const { rainDay = [], snowDay = [] } = res as RainSnowRes
        const [summerTime, winterTime] = seasonsTemp.map((v) => [getDateStr(v['startTime']), getDateStr(v['endTime'], '23:59:59')])
        const getTotal = (arg: RainSnowType[]) => {
          return arg.reduce(
            (prv: { [key: string | number]: any }, cur: RainSnowType) => {
              if (cur.w_date) {
                const itemTime = cur['w_date']
                if (itemTime >= summerTime[0] && itemTime <= summerTime[1]) {
                  !prv['summer'][cur.cnweatherid_day] && (prv['summer'][cur.cnweatherid_day] = [])
                  prv['summer'][cur.cnweatherid_day].push(cur)
                } else if (itemTime >= winterTime[0] && itemTime <= winterTime[1]) {
                  !prv['winter'][cur.cnweatherid_day] && (prv['winter'][cur.cnweatherid_day] = [])
                  prv['winter'][cur.cnweatherid_day].push(cur)
                }
              }
              return prv
            },
            {
              summer: {},
              winter: {}
            }
          )
        }
        return { rain: getTotal(rainDay), snow: getTotal(snowDay) }
      })
      interface WarnTypeItem {
        createTime: string
        warnType: number
        title: string
        cityCode: string
      }
      const warn = await getWarnData(cityCode).then((res: any) => {
        if (res && res.length) {
          const [springTime, summerTime, autumnTime, winterTime] = seasonsTemp.map((v) => [
            getDateStr(v['startTime']),
            getDateStr(v['endTime'], '23:59:59')
          ])
          const typeList = res.reduce(
            (prv: { [key: string | number]: any }, cur: WarnTypeItem) => {
              const itemTime = new Date(cur['createTime']).getTime()
              if (itemTime >= springTime[0] && itemTime <= springTime[1]) {
                !prv['spring'][cur.warnType] && (prv['spring'][cur.warnType] = [])
                prv['spring'][cur.warnType].push(cur)
              } else if (itemTime >= summerTime[0] && itemTime <= summerTime[1]) {
                !prv['summer'][cur.warnType] && (prv['summer'][cur.warnType] = [])
                prv['summer'][cur.warnType].push(cur)
              } else if (itemTime >= autumnTime[0] && itemTime <= autumnTime[1]) {
                !prv['autumn'][cur.warnType] && (prv['autumn'][cur.warnType] = [])
                prv['autumn'][cur.warnType].push(cur)
              } else if (itemTime >= winterTime[0] && itemTime <= winterTime[1]) {
                !prv['winter'][cur.warnType] && (prv['winter'][cur.warnType] = [])
                prv['winter'][cur.warnType].push(cur)
              }
              return prv
            },
            {
              spring: {},
              summer: {},
              autumn: {},
              winter: {}
            }
          )
          const getLen = (val: { [key: number]: any[] }, index: number) => {
            if (val && val[index]) {
              return val[index].length
            }
            return 0
          }
          const result = seasonsTemp.map((v) => {
            const warnList = v.warnType.map((val) => {
              let num = 0
              const data = val.type === 'warn' ? typeList : rainOrSnow // 取实际降雨目标值
              if (typeof val.hit === 'number') {
                num = getLen(data[v.key], val.hit)
              } else {
                val.hit.forEach((item: number) => {
                  num = num + getLen(data[v.key], item)
                })
              }
              return { num, label: val.label }
            })
            const max = maxValue(warnList, 'num')
            if (max.isAlike) {
              return {
                key: v.key,
                ...warnList[0],
                all: warnList
              }
            } else {
              return {
                key: v.key,
                ...warnList[max.index],
                all: warnList
              }
            }
          })
          return result.reduce((prv: { [key: string]: any }, cur) => {
            prv[cur.key] = cur
            return prv
          }, {})
        }
      })
      const result = seasonsTemp.map((v) => {
        return getTemp({
          cityCode: cityCode,
          startTime: v.startTime,
          endTime: v.endTime
        }).then((res: any) => {
          const key = v.coldOrHot === 'cold' ? 'minTemp' : 'maxTemp'
          if (res.length) {
            const getResult = (result: ItemType) => {
              return { dayid: getDateStr(result['dayid'], false) as string, temp: result[key], key: v.key }
            }
            res.sort((a: ItemType, b: ItemType) => {
              if (key === 'minTemp') {
                if (a[key] > b[key]) return 1
                if (a[key] < b[key]) return -1
              } else {
                if (a[key] > b[key]) return -1
                if (a[key] < b[key]) return 1
              }
              return 0
            })
            if (res[0][key] !== res[1][key]) {
              return getResult(res[0])
            } else {
              const alikeValue = res
                .filter((item: ItemType) => item[key] === res[0][key])
                .sort((a: ItemType, b: ItemType) => {
                  const [aTime, bTime] = [getDateStr(a['dayid']), getDateStr(b['dayid'])]
                  if (aTime > bTime) return -1
                  if (aTime < bTime) return 1
                  return 0
                })
              return getResult(alikeValue[0])
            }
          }
        })
      })
      const temps = await Promise.all(result).then((res) => {
        if (res) {
          return res.reduce((prv: { [key: string]: any }, cur) => {
            if (cur) {
              prv[cur.key] = cur
            }
            return prv
          }, {})
        }
      })
      if (temps && warn) {
        const res: SeasonTempType = {} as SeasonTempType
        const warnAll: WarnTypeItemType[] = []
        Object.keys(temps).forEach((v) => {
          res[v as SeasonBase] = { ...temps[v], ...warn[v] }
          warnAll.push(warn[v]['all'])
        })
        if (type === 'CURRENT') {
          setCurrentSeason(res)
          currentWarnTotalAll.value = warnAll
        }
        if (type === 'SELECT') {
          setSelectSeason(res)
          selectWarnTotalAll.value = warnAll
        }
        return resolve(res)
      }
    })
  }

  const getFront = (type: 'CURRENT' | 'SELECT') => {
    const val = type === 'CURRENT' ? currentSeason.value : selectSeason.value
    if (!val) return
    const total = Object.values(val).reduce((prv: { [key: string]: any }, cur: any) => {
      if (!cur.num) return prv
      if (prv[cur.label]) {
        prv[cur.label].num = prv[cur.label].num + (cur.num || 0)
      } else {
        prv[cur.label] = cur
      }
      return prv
    }, {})
    const result = Object.values(total)
    result.sort((a: SeasonTempTypeItem, b: SeasonTempTypeItem) => {
      if (a.num > b.num) return -1
      if (a.num < b.num) return 1
      return 0
    })
    if (result.length > 3) {
      return result.filter((item, index) => index <= 2)
    }
    return result
  }

  const getCity = (value: string) => {
    const provinceObj = () => JSON.parse(JSON.stringify(cityList)).filter((item: any) => item)
    const result = provinceObj()
      .map((item: any) => {
        // if (item.id === 5 && item.id === 24 && item.id === 33) return
        item.cityList = item.cityList.filter((v: any) => {
          return !!v.parentCode.match(value)
        })
        return item
      })
      .filter((v: any) => {
        if (!v) return
        if (!v.cityList.length) return
        return v
      })
    return result
  }
  return {
    setUserId,
    setSelectLocation,
    setCurrentLocation,
    dataCount,
    isLogin,
    userInfo,
    isApp,
    addActive,
    dispatchActive,
    windowHeight,
    getDateNum,
    getCurrentLocation,
    getOpenNum,
    getBrowsePageNum,
    getCityWeather,
    selectSeason,
    currentSeason,
    getFront,
    getCity
  }
})
