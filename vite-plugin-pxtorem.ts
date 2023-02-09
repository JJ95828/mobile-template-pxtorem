import fs from 'node:fs'
import path from 'node:path'

interface OptionsType {
  /**
   * 忽略转换的px为rem的文件名称
   * 例：index.less index.css
   */
  ignore?: string[] | RegExp[] | (string | RegExp)[]
}
interface AliasType {
  /**
   * 别名
   */
  target: string
  /**
   * 真正的值
   */
  value: string | { find: string | RegExp; replacement: string; customResolver?: any }
}

/**
 * 转化px值为rem
 * @param param0
 * @returns
 */
export default function pxToREM({ ignore = [] }: OptionsType = {}) {
  /**
   * 忽略文件
   */
  const ignoreTests = [].concat(/\.(js|ts|mjs|cjs)/, ignore).map((v) => (isRegExp(v) ? v : new RegExp(`${v}`)))

  /**
   * 匹配px
   */
  const regExgPx = /[0-9]+(\.)?(0-9+)?px(([\n\s\S;\r\f]+)?((\/\*\*|\/\/)(\s+)no(\s+)rem(\*\/)?))?/g

  /**
   * px to rem
   */
  const transform = pxToRemHandler()
  /**
   * 转换函数
   * @param target
   * @returns
   */
  function transformHandler(target: string | undefined) {
    if (!target) return
    return target.replace(regExgPx, (arg) => {
      if (arg.includes('no rem')) {
        return arg
      }
      return transform(arg.split('px')[0])
    })
  }

  function compileFile(val: string, id?: string | undefined) {
    return {
      code: val,
      map: null
    }
  }

  let config = null

  let alias: AliasType[] | null = null
  /**
   * 转换正确的路径
   * @param str
   * @returns
   */
  const transformImportUrl = (str: string) => {
    if (str.includes('/**') || str.includes('//')) return
    let url = str.match(/('|")(.+)('|")/)
    if (url && url[0]) return url[0].replace(/('|")/g, '')
    return ''
  }
  /**
   * 获取css code
   */
  const getStyleCode = getStyleCodePipe()

  return {
    name: 'vite-plugin-pxtorem',
    enforce: 'pre',
    config(conf) {
      config = conf
      if (conf?.resolve?.alias) {
        let aliasAry = []
        if (isArray(conf.resolve.alias)) {
          /**
           * 未处理当前情况
           */
          aliasAry = conf.resolve.alias.map((item: any) => ({ target: item.replacement, value: item }))
        } else {
          aliasAry = Object.keys(conf.resolve.alias).map((target: string) => ({ target, value: conf.resolve.alias[target] }))
        }
        alias = aliasAry
      }
    },
    async transform(val: string, id: string) {
      if (ignoreTests.find((reg) => reg.test(id))) return compileFile(val, id)
      /**
       * 直接匹配sheet文件
       * .vue的css 会在这解析
       */
      if (/\.(less|css|scss)/.test(id)) {
        if (!val) return
        /**
         * 不处理.vue内的@import url
         */
        if (!isVueFile(id) && val.includes('@import')) {
          val = val.replace(/(\/\*\*|\/\/)?(.+)?\@import(url\((\'|\"))?(.+)((\'|\")\))?\;/g, (target) => {
            let url: string = transformImportUrl(target)
            if (!url) return target
            let isReplace = false
            alias.forEach((item: AliasType) => {
              if (url.includes(item.target) && typeof item.value === 'string') {
                isReplace = true
                url = (url as string).replace(item.target, item.value)
              }
            })
            const fullPath = [].concat(!isReplace ? removeNextPath(id) : '').concat(url)
            /**
             * 不处理忽略文件
             */
            if (ignoreTests.find((reg) => reg.test(fullPath))) return target
            return `/** ${target}*/\n${transformHandler(getStyleCode(fullPath))}`
          })
        }
        return compileFile(transformHandler(val), id)
      }
      /**
       * 单文件组件的<template>内的style。以及style代码解析转换
       */
      if (isVueFile(id)) {
        return compileFile(
          val
            .replace(/\<template(\s+.)?\>([.\n\s\S]+)\<\/template\>/, (v: string) => {
              return v.replace(/style\=".+(\n+)?"/g, (target) => {
                console.log(`\nstyle: `, target, `\n`)
                return transformHandler(target)
              })
            })
            .replace(/<style(\s\S.+)?>([.\n\s\S]+)<\/style>/, (v: string) => transformHandler(v))
        )
      }
      return compileFile(val, id)
    }
  }
}

/**
 * 管道工具函数
 * @param func
 * @returns
 */
function pipe(...func: any[]) {
  return (arg: string | number | any[]) => func.reduce((prv, cur) => cur(prv), arg)
}
/**
 * 是否为数组
 * @param value
 * @returns
 */
function isArray(value: any) {
  return Array.isArray(value)
}

/**
 * 是否为正则
 * @param str
 * @returns
 */
function isRegExp(str: string | RegExp) {
  return str instanceof RegExp
}
/**
 * 字符串忽略最后一个斜杠内容
 * @param url
 * @returns
 */
function removeNextPath(url: string) {
  return url
    .split('/')
    .filter((val: string, index, arg) => index !== arg.length - 1)
    .join('/')
}

/**
 * px => rem 逻辑
 */
function pxToRemHandler() {
  const toNumber = (str: string | number) => {
    if (!!+str) {
      return +str
    }
    return 0
  }
  const computed = (value: number) => value / 100
  const toREM = (val: string | number) => `${val}rem`
  return pipe(toNumber, computed, toREM)
}
/**
 * 处理获取import url sheet code
 * @returns
 */
function getStyleCodePipe() {
  const getPath = (url: string[]) => path.join(...url)
  const getCss = (url: string) => fs.readFileSync(url, 'utf8')
  return pipe(getPath, getCss)
}
/**
 * 是否为.vue文件
 * @param str
 * @returns
 */
function isVueFile(str: string) {
  return /\.(vue)$/.test(str)
}
