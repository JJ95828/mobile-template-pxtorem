<script lang="ts" setup>
const awaitHandler = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111)
    }, 2000)
  })
}
let total = 0
const click = async () => {
  const result = await awaitHandler()

  total++
  if (total > 2) {
    // console.log(a)
  }
  console.log(result)
}
await click()
</script>
<template>
  <van-button @click="click">Reset</van-button>
  <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
</template>
