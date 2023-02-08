import { createRouter, createWebHashHistory } from 'vue-router'
import { LocatHref } from '@/utils/util'
import { isWeChatDevTools } from '@/utils/env'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/cover/index.vue')
    }
  ]
})
const whitePath = ['/']
//判断路由下是否有下载参数
router.beforeEach((to, from, next) => {
  //带有downapp 跳转下载
  if (to.query.downapp) {
    if (to.path != from.path || !isWeChatDevTools) {
      LocatHref(to.query.apklink, to.query.page, to.query.oriId)
      return
    }
  } else if (to.path.indexOf('downapp') > -1) {
    LocatHref(to.path.split('&apklink=')[1])
    return
  } else {
    if (whitePath.includes(to.path)) {
      next()
    } else {
      next('/')
    }
  }
})

export default router
