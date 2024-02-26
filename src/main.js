import '@/assets/styles/main.scss'
import { createApp } from 'vue'
import pinia from '@/store/index.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
