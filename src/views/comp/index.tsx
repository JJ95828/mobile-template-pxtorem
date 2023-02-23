import FunComp from "./FunComp/index"
import { getCurrentInstance } from 'vue'
import { Button } from "vant/es"
// import useState from '@/use/useState'

function useReducer(reducer: (val: any, val1?: any) => any, initialValue: any) {
  const state = ref(0)
  let hook = initialValue
  const display = (action: any) => {
    hook = reducer(action)
    console.log(state, hook);
    state.value++
  }
  return [hook, display]
}


export default function Comp() {
  const [total, updateTotal] = useReducer(x => x + 1, 0)
  // let total = 0
  // const updateTotal = (num: number) => {
  //     total = num
  // }
  console.log(getCurrentInstance());
 
  console.log(total);
  return  <div>
      <div>函数式组件</div>
      {/* <Button onClick={() => refresh(false)}>hide FunComp</Button> */}
      {/* <Button onClick={() => refresh(true)}>show FunComp</Button> */}
    <Button onClick={() => updateTotal(total)}>{ total }</Button>
      {/* {state.value && <FunComp state={state.value} name={`${name.value}${nameSuffix.value}`} updateName={updateName} />} */}
  </div>
}