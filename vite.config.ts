/*
 * @Author: NanNan
 * @Date: 2025-09-04 14:50:51
 * @LastEditTime: 2025-09-06 01:36:04
 * @Description:
 */
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
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
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
});
