/*
 * @Author: NanNan
 * @Date: 2025-09-04 13:03:33
 * @LastEditTime: 2025-09-04 13:38:27
 * @Description: 
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
