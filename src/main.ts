import { Component, createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Router from '@/router'
import '@/styles/index.less'

const app = createApp(App as Component)
app.use(createPinia())
app.use(Router)

app.mount('#root')
