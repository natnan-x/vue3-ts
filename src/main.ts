/*
 * @Author: NanNan
 * @Date: 2025-09-04 14:50:51
 * @LastEditTime: 2025-09-06 01:38:30
 * @Description:
 */
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'ant-design-vue/dist/reset.css';

import './style.css'; // Tailwind

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
