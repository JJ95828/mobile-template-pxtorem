import { defineStore } from 'pinia'
const Store = defineStore('state', () => {
  const state = ref()
  const update = (arg: StateValueType) => {
    state.value = arg
  }
  return { state, update }
})
const createState = () => {
  const state = Store()
  console.log('-----')
  return () => state
}
const stateHandler = createState()

type StateValueType = any
export default (initialValue: StateValueType) => {
  const state = stateHandler()
  state.update(initialValue)
  console.log(state.state)
  return [state.state, state.update]
}
