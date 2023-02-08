<template>
  <div class="test">111</div>
  <ZMImage src="cat.jpeg" width="2rem" height="2rem" />
  <ZMImage src="cat.jpeg" width="200px" height="200px" />
  <button @click="show = !show">update popup state: {{ JSON.stringify(show) }}</button>
  <ZMPopup v-model:show="show" :is-shade-close="false">
    <div v-for="item in 5">{{ item }}</div>
  </ZMPopup>
</template>
<script lang="ts" setup>
const show = ref(false)
</script>
<style lang="less" scoped>
@import url('@/styles/pages/cover.less');
div {
  margin: 20px;
}
</style>
