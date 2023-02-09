<template>
  <div class="test">111</div>
  <ZMImage src="cat.jpeg" width="200px" height="200px" />
  <van-button type="primary">test button</van-button>
  <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
  <button @click="show = !show">update popup state: {{ JSON.stringify(show) }}</button>
  <ZMPopup v-model:show="show" :is-shade-close="false">
    <div v-for="item in 5">{{ item }}</div>
  </ZMPopup>
</template>
<script lang="ts" setup>
// import { showToast } from 'vant'

const show = ref(false)

// showToast({
//   message: '加载中...',
//   forbidClick: true
// })
</script>
<style lang="less" scoped>
@import url('@/styles/pages/cover.less');
div {
  margin: 20px;
}
</style>
