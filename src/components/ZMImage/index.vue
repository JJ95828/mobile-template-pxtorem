<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getAssetsFile } from '@/utils/util'
interface PropsType {
  /**
   * 图片路径 为src/assets/images/${你的路径}
   */
  src: string
  /**
   * 图片 宽度
   * 默认 100%
   */
  width?: number | string
  /**
   * 图片 高度
   * 默认 100%
   */
  height?: number | string
  /**
   * 图片展示方式
   * 同object-fit
   */
  fit?: 'cover' | 'contain' | 'unset' | 'fill' | 'none' | 'scale-down'
  /**
   * 图片展示位置
   * 值 同 object-position的值
   *
   */
  position?: string
  /**
   * 弧度
   */
  radius?: string | number
  /**
   * 是否为圆形
   */
  isRound?: boolean
  /**
   * 是否为block
   */
  isBlock?: boolean
  code?: string
  dataZmwcode?: string
}
const props = withDefaults(defineProps<PropsType>(), {
  fit: 'cover',
  width: '100%',
  height: '100%',
  position: 'center',
  isBlock: true,
  radius: 0
})
const src = ref<string>()
if (!props.src) {
  console.error(`src is not setting`)
} else {
  watchEffect(() => {
    src.value = getAssetsFile(props.src) as string
  })
  src.value = getAssetsFile(props.src) as string
}
const type = (val: string | number) => {
  if (typeof val === 'string') {
    return val
  }
  return `${val / 100}rem`
}
</script>
<template>
  <div
    class="zm-image"
    :style="{
      display: props.isBlock ? 'block' : 'inline-block',
      width: type(props.width),
      height: type(props.height)
    }"
  >
    <img
      :src="src"
      :style="{ 'object-fit': props.fit, 'object-position': props.position, 'border-radius': (props.isRound && '50%') || type(props.radius) }"
      :data-zmwcode="props.code || props.dataZmwcode"
      alt=""
    />
  </div>
</template>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
</style>
