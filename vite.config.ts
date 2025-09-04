/*
 * @Author: NanNan
 * @Date: 2025-09-04 14:50:51
 * @LastEditTime: 2025-09-05 01:07:22
 * @Description:
 */
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    checker({
      // typescript: true,
      vueTsc: true, // 开启 vue-tsc 类型检查
      overlay: true, // 浏览器 overlay 显示错误
    }),
  ],
});
