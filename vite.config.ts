import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import viteCompression from 'vite-plugin-compression'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import progress from 'vite-plugin-progress' // 打包进度条
import legacy from '@vitejs/plugin-legacy'
import Inspect from 'vite-plugin-inspect'
import pxtorem from './vite-plugin-pxtorem'
// https://vitejs.dev/config/
const config = (type: string) => {
  const isAnalyse = type === 'analyse'
  return {
    base: './', // 根路径
    publicDir: 'public',
    server: {
      /**
       * 使用axios('/4.0/你的路径').then(res => console.log(res))
       */
      // cors: true,
      // proxy: {
      //   '/4.0': {
      //     target: 'https://wea.zuimeitianqi.com/zmWeatherServer/4.0/',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/4.0/, '')
      //   }
      // }
    },
    plugins: [
      Inspect({
        build: true,
        outputDir: '.vite-inspect'
      }),
      vue(),
      vueJsx(),
      pxtorem({ ignore: [] }),
      progress(), // 打包进度条
      legacy({
        // 处理 import.meta <script nomodule>
        targets: ['defaults', 'not IE 11']
      }),
      /**
       * 自动导入.vue 组件
       * 效果为：如 Components文件夹下的组件，我们可以直接使用并有相应的TS语法提示，而不需要手动的去 import CompName from '路径'
       */
      Components({
        dts: 'src/components.d.ts',
        resolvers: [VantResolver()],
        include: [/\.vue$/, /\.vue\?vue/, /\.(jsx|tsx)$/, /\.md$/]
      }),
      /**
       * 自动导入
       * 效果为：如 ref方法我们可以直接使用并有相应的TS语法提示，而不需要手动的去 import { ref } from 'vue'
       */
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-imports.d.ts'
      }),
      /**
       * 拆包
       */
      splitVendorChunkPlugin(), // 设置拆包
      isAnalyse &&
        visualizer({
          // 设置打包分析
          emitFile: false,
          filename: 'starts.html',
          open: true
        }),
      viteCompression({
        // 设置压缩文件 生成.gz
        verbose: true,
        threshold: 1024,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    optimizedeps: {
      esbuildoptions: {
        target: 'es2015'
      }
    },
    CSS: {
      devSourcemap: true // 本地开发启用sourcemap
    },
    build: {
      outDir: 'dist', // 输出文件夹
      target: 'es2015', // 打包目标
      assetsDir: 'assets', // 指定静态资源放置路径
      assetsInlineLimit: 4096 // 4kb 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    }
    // esbuild: {
    //   // jsxFactory: 'h',
    //   // jsxFragment: 'Fragment',
    //   // jsxInject: "import { h, ref } from 'vue'"
    // }
  }
}
export default defineConfig(({ command, mode, ssrBuild }) => {
  return config(mode)
})
