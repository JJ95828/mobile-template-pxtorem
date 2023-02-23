import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/cover/index.vue')
    },
    {
      path: '/Comp',
      name: 'Comp',
      component: () => import('@/views/comp/index')
    }
  ]
})

export default router
