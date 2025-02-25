// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
import '@/assets/js/custom.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartLine, faCalendarAlt, faFileInvoiceDollar, faWallet, faChartPie, faBell, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChartLine, faCalendarAlt, faFileInvoiceDollar, faWallet, faChartPie, faBell, faLock);


const app = createApp(App)

app.use(router)

app.mount('#app')
