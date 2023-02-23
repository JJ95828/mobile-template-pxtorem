<script lang="ts" setup>
import ZMCalendar from './ZMCalendar/index.vue'
const show = ref(false)

const pending = () => {
  console.log('pending 挂起')
}
const resolve = () => {
  console.log('resolve 获取完成 ')
}
const fallback = () => {
  console.log('fallback 内容展示 ')
}
const ImageRef = ref(null)
const showImageRef = () => {
  console.log('ImageRef: ', ImageRef.value)
}
</script>
<template>
  <p>van-button</p>
  <van-button type="primary">test button</van-button>
  <RouterLink to="/Comp" style="margin-left: 20px">
    <van-button type="primary">to Function Comp</van-button>
  </RouterLink>
  <p>Suspense</p>
  <Suspense @pending="pending" @fallback="fallback" @resolve="resolve">
    <template #default>
      <div>
        <p>van-calendar</p>
        <ZMCalendar></ZMCalendar>
      </div>
    </template>
    <template #fallback>loading...</template>
  </Suspense>

  <p>image</p>
  <van-button @click="showImageRef">show ImageRef</van-button>
  <ZMImage ref="ImageRef" src="cat.jpeg" width="200px" height="200px" />
  <p>popup</p>
  <button @click="show = !show">update popup state: {{ JSON.stringify(show) }}</button>
  <ZMPopup v-model:show="show" :is-shade-close="false">
    <div v-for="item in 5">{{ item }}</div>
  </ZMPopup>
</template>

<style lang="less" scoped>
@import url('@/styles/pages/cover.less');
div {
  margin: 20px;
}
p {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
