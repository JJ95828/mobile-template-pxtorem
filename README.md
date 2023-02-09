# mobile-template-pxtorem
```
  vite3 + vue3 + ts + pinia + jsx + vite-plugin-pxtorem
```
## 安装运行
```
  # yarn or npm i
  安装依赖
  
  # yarn dev or npm run dev
  运行项目

  # yarn build or npm run build
  打包输出文件默认 dist

  # yarn build:al or npm run build:al
  打包分析 自动生成并打开 依赖分析图 生成的文件为starts.html

  # yarn pre or npm run pre
  预览项目

  # yarn plop or npm run plop
  生成 vue3 模版组件

```

## 项目自动格式化
```
  使用eslint + prettier

  vscode 安装 prettier、ESlint插件
  推荐安装 Volar 插件 vue3代码提示
```

## 移动端兼容处理

```
  vw + rem适配方案
  兼容适配 web 端，max-width: 750px

  编写页面
  1. 设置蓝湖设计图为750px
  2. 正常开发直接使用相应数值。
  通过使用vite-plugin-pxtorem插件把px转换为rem。
  忽略转换:  // no rem 或 /** no rem */ 或 20px => 20PX
  示例： 设计图 字体大小 28px，font-sze: 28px; 转换后：font-sze: 0.28rem;
```
## GIT commit 提交规范(推荐):

```text
   * feature：新功能
   * update：更新某功能
   * fixbug：修补某功能的bug
   * build：发布prod, testing
   * refactor：重构某个功能
   * optimize: 优化构建工具或运行时性能
   * style：仅样式改动
   * docs：仅文档新增/改动
   * chore：构建过程或辅助工具的变动
   * format: 格式变动
   * init: 初始化
```

## 一些重要事项
```
 1. 引用静态文件使用getAssetsFile() 方法
 import { getAssetsFile } from '@/utils/util'
 getAssetsFile() 返回链接地址 url string

```

## 其他

```
  components.d.ts 文件为自动生成文件勿提交git
  auto-imports.d.ts 文件为自动生成文件勿提交git
```
