import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import "normalize.css"
import '@/styles/main.scss'
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
