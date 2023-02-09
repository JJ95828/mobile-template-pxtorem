<template>
  <p style="font-size: 20px; padding: 20px">屏幕大于750px：根字体100px;小于等于750px：跟字体13.333333333vw</p>
  <div style="border: 1px solid #eee; padding: 20px">
    <p style="font-size: 20px">rem</p>
    <div class="test">111</div>
    <ZMImage src="cat.jpeg" width="2rem" height="2rem" />
    <ZMImage src="cat.jpeg" width="200" height="200" />
  </div>
  <div style="border: 1px solid #eee; padding: 20px">
    <p style="font-size: 20px">px</p>
    <ZMImage src="cat.jpeg" width="200Px" height="200Px" />
    <div class="test1">111</div>
    <button @click="show = !show">update popup state: {{ JSON.stringify(show) }}</button>
    <ZMPopup v-model:show="show" :is-shade-close="false">
      <div v-for="item in 5">{{ item }}</div>
    </ZMPopup>
  </div>
</template>
<script lang="ts" setup>
const show = ref(false)
</script>
<style lang="less" scoped>
@import url('@/styles/pages/cover.less');
div {
  margin: 20px;
}
.test1 {
  background: springgreen;
  font-size: 28px; // no rem
  margin: 20px; // no rem
}
</style>
