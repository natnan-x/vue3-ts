/*
 * @Author: NanNan
 * @Date: 2025-09-04 14:50:51
 * @LastEditTime: 2025-09-06 04:54:23
 * @Description:
 */
/// <reference types="vite/client" />
// 声明 .vue 文件模块类型
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// SVG 组件声明
declare module '*.svg?component' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
