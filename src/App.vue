<template>
  <div class="flex flex-col h-screen">
    <!-- 顶部导航 -->
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
        <a-divider type="vertical" style="margin: 0 20px" />
        <a
          type="link"
          target="_blank"
          :href="mailtoHref"
          rel="noopener"
          class="flex items-center text-sm font-bold text-gray-600"
        >
          <MailOutlined style="color: #4a5565" class="mr-2" />
          NATNAN0405@163.COM
        </a>
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

    <!-- 主体 -->
    <div class="flex-1 flex overflow-hidden">
      <!-- 侧边栏 -->
      <div
        :class="state.collapsed ? 'w-20' : 'w-64'"
        class="shadow-md transition-all duration-300 flex flex-col pt-1"
      >
        <SidebarMenu :collapsed="state.collapsed" />
        <div class="flex-shrink-0 pb-3 text-center">
          <a-divider style="margin: 12px 0" />
          <a-button type="primary" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="state.collapsed" />
            <MenuFoldOutlined v-else />
          </a-button>
        </div>
      </div>

      <!-- 内容区域 -->
      <main class="flex-1 overflow-auto" style="background: #f1f4f6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { RouterView } from 'vue-router';
import SidebarMenu from './components/layout/SidebarMenu.vue';
import LogoIcon from './assets/logo.svg?component';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';

const state = reactive({
  collapsed: false,
});

const to = 'natnan0405@163.com';
const subject = '您好，我是xxx';
const body = '请描述你的问题...';

const mailtoHref = computed(
  () =>
    `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
);

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
};
</script>
