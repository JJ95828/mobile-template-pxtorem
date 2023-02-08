import { createRouter, createWebHashHistory } from 'vue-router'
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
router.beforeEach((to, from, next) => {
  if (whitePath.includes(to.path)) {
    next()
  } else {
    next('/')
  }
})

export default router
