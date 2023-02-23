import { defineStore } from 'pinia'

export default defineStore('state', (...arg) => {
  console.log(arg)
  let initialValue = 0
  const value = ref(initialValue)
  const update = (arg: any) => {
    value.value = arg
  }
  return [value, update]
})
