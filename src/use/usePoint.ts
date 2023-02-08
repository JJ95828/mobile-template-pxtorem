import { useStore } from '@/store'
export default () => {
  const store = useStore()
  const clickCode = [
    'ndHmBtn',
    'ndMsgBtn',
    'ndSLCity',
    'ndSpYCH',
    'ndSpMDH',
    'ndSpYH',
    'ndSpCCL',
    'ndSpCYS',
    'ndSpCJZ',
    'ndSpCCF',
    'ndSpCQM',
    'ndSpCGY',
    'ndSmGGSW',
    'ndSmGWYJ',
    'ndSmBSSD',
    'ndSmLX',
    'ndSmXM',
    'ndSmMZ',
    'ndSmSZ',
    'ndSmXS',
    'ndSmDS',
    'ndAtVoLQ',
    'ndAtVoCS',
    'ndAtVoBL',
    'ndAtVoQF',
    'ndAtVoHL',
    'ndAtVoSJ',
    'ndAtYXHW',
    'ndAtJQSY',
    'ndAtLQ',
    'ndAtCS',
    'ndAtBL',
    'ndAtQF',
    'ndAtHL',
    'ndAtSJ',
    'ndWtVoLD',
    'ndWtVoXX',
    'ndWtVoDX',
    'ndWtVoDZ',
    'ndWtVoXH',
    'ndWtVoDH',
    'ndWtLDJB',
    'ndWtLD',
    'ndWtXX',
    'ndWtDX',
    'ndWtDZ',
    'ndWtXH',
    'ndWtDH',
    'ndUsTlFX',
    'ndUsTlWD',
    'ndShAg',
    'ndShGHYCQ',
    'ndDWXZCS',
    'ndDWBN'
  ]
  /**
   * 点击事件 上传记录埋点数据
   * @param e
   */
  const clickHandler = (e: MouseEvent) => {
    if (e.target) {
      const data = (e.target as HTMLElement)?.dataset
      if (data.zmwcode && clickCode.includes(data.zmwcode)) {
        store.dataCount({ type: 7, eventType: 2, eventName: data.zmwcode, spaceId: data.zmwcode })
      }
    }
  }

  document.addEventListener('click', clickHandler)
}
