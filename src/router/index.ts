/*
 * @Author: NanNan
 * @Date: 2025-09-06 15:06:31
 * @LastEditTime: 2025-09-07 02:05:27
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';
import manageList from '../views/manage/list.vue';
import demoG2 from '../views/demo/G2.vue';

// TS 类型只用 `type` 导入，不会编译到 JS
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/manage/list' },
  {
    path: '/manage/list',
    name: 'manageList',
    component: manageList,
  },
  { path: '/demo/g2', name: 'demoG2', component: demoG2 },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
