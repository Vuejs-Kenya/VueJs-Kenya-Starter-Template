import { createApp } from 'vue'
import '@/assets/style/tailwind.css'

import { routes } from 'vue-router/auto/routes'

import { setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'

const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(),
})

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
