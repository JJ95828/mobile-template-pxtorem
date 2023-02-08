import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { storage } from '@/utils/index'
export interface ActiveEventsTypes {
  [key: string]: (() => void)[]
}

export const useStore = defineStore('main', () => {
  /**
   * 单页高度
   */
  const windowHeight = ref()
  const getWindowHeight = () => {
    const height = window.outerHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    windowHeight.value = height
  }
  getWindowHeight()
  document.addEventListener('resize', getWindowHeight)
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

  return {
    addActive,
    dispatchActive,
    windowHeight
  }
})
