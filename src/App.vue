<!--
 * @Author: NanNan
 * @Date: 2025-09-04 14:50:51
 * @LastEditTime: 2025-09-06 05:13:29
 * @Description: 
-->
<template>
  <div class="min-h-screen flex flex-col h-screen">
    <div
      class="h-[64px] shadow-md flex px-6 items-center relative z-10 justify-between"
    >
      <div class="flex items-center">
        <LogoIcon width="24" height="24" fill="black" />
        <span
          class="ml-2 font-medium overflow-hidden whitespace-nowrap transition-all duration-300"
          :class="
            state.collapsed ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'
          "
        >
          Digital Nomad
        </span>
      </div>
      <div class="flex justify-end items-center">
        <a-switch
          v-model:checked="state.theme_value"
          checked-children="dark"
          un-checked-children="light"
        />
        <a-divider type="vertical" style="margin: 0 20px" />
        <div class="flex items-center">
          <MailOutlined style="color: #4a5565" />
          <span class="ml-2 text-sm font-bold text-gray-600">
            NATNAN0405@163.COM
          </span>
        </div>
        <a-divider type="vertical" style="margin: 0 20px" />
        <div class="flex items-center">
          <a-avatar
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            style="background-color: #4a5565"
          />
          <span class="ml-2 font-bold">Nat Nan</span>
        </div>
      </div>
    </div>
    <!-- 侧边栏 -->
    <div class="flex-1 flex">
      <div
        :class="state.collapsed ? 'w-20' : 'w-64'"
        class="shadow-md transition-all duration-300 flex flex-col pt-1"
      >
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          theme="light"
          :inline-collapsed="state.collapsed"
          :items="items"
          style="border: 0px"
          class="flex-1"
        />
        <div class="flex-shrink-0 pb-3 text-center">
          <a-divider style="margin: 12px 0" />
          <a-button type="primary" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
          </a-button>
        </div>
      </div>
      <main class="flex-1 p-4">
        <RouterView />
      </main>
    </div>
    <!-- 内容部分 -->
  </div>
</template>

<script lang="ts" setup>
// 如果需要全局逻辑或者组合式 API，可在这里写
import LogoIcon from './assets/logo.svg?component';

import { reactive, watch, h } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AreaChartOutlined,
  MailOutlined,
  DesktopOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
  theme_value: false,
});
const items = reactive([
  {
    key: '1',
    icon: () => h(AreaChartOutlined),
    label: '工作台',
    title: '工作台',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: '任务',
    title: '任务',
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
</script>

<style scoped>
/* 可选自定义样式 */
</style>
