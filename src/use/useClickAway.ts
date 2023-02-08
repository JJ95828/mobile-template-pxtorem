import { Ref, unref, watch, ref } from 'vue'
export default (target: Element | Ref<Element | null>, listener: EventListener) => {
  const onClick = (event: Event) => {
    const targets = Array.isArray(target) ? target : [target]
    const isClick = targets.every((value) => {
      const ele = unref(value)
      console.log(ele)
      return ele && !ele.contains(event.target as Node)
    })
    if (!isClick) {
      listener(event)
    }
  }
  document.addEventListener('click', onClick)
  // const weekMap = new WeakMap()
  // weekMap.set('ele', target)
  // watch(
  //   () => target,
  //   (val) => {
  //     if (!val) document.removeEventListener('click', onClick)
  //   }
  // )
}
