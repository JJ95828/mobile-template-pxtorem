/**
 * created 2022-11-16
 * plop 官方文档 https://plopjs.com/documentation/#getting-started
 */
module.exports = (plop) => {
  plop.setWelcomeMessage('请选择需要创建的模式：')

  const template = `<template>

</template>
<script lang="ts" setup>
  import { ref } from 'vue'
</script>
<style lang="less" scoped></style>
`

  plop.setGenerator('组件', {
    description: '创建一个组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件的名称（必填）',
        validate(val) {
          if (/^[a-z][a-zA-Z]{2,20}$/.test(val)) return true
          return '文件名格式为小驼峰, 至少2-20个字符'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{name}}/index.vue',
        template: template
      }
    ]
  })
  plop.setGenerator('页面', {
    description: '创建一个页面',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入页面的名称（必填）',
        validate(val) {
          if (/^[a-z][a-zA-Z]{2,20}$/.test(val)) return true
          return '文件名格式为小驼峰, 至少2-20个字符'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/views/{{name}}/index.vue',
        template: template
      }
    ]
  })
}
