// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
import '@/assets/js/custom.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
