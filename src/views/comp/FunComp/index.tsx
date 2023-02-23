
import { SetupContext, defineComponent } from "vue";
import type { PropType } from 'vue'
interface PropsTypes {
  state: boolean
  name: string
  updateName: (val: string) => string
}

export default defineComponent({
  name: 'FunComp',
  props: {
    state: { required: true, type: Boolean },
    name: { required: true, type: String },
    updateName: { required: true, type: Function as PropType<(val: string) => string>}
  },
    
  setup(props, { slots }) {
    const nameBefore = ref(0)

    const Test = (props: PropsTypes, { slots }: SetupContext) => {
      const ctxName = () => {
        const name = props.updateName((Math.random() * 10000000).toString())
        console.log(name);
        nameBefore.value++
        console.log(nameBefore.value);
      }
      
      return <div style={{margin: '20px' }}>
        <p>name: {props.name} <button onClick={ctxName}>update name</button></p>
        <p>nameBefore: { nameBefore.value }</p>
        <p>state: {JSON.stringify(props.state)}</p>
        {slots.default && slots.default() }
      </div>
    }
    const TestRef = ref(null)
    console.log('TestRef: ', TestRef)
    return () => (<Test ref={TestRef} {...props}>{slots.default && slots.default() }</Test>)
  }
})