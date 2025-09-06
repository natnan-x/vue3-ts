<template>
  <a-menu
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    mode="inline"
    theme="light"
    :inline-collapsed="collapsed"
    :items="items"
    style="border: 0px"
    class="flex-1"
    @update:openKeys="(val:any) => $emit('update:openKeys', val)"
    @update:selectedKeys="(val:any) => $emit('update:selectedKeys', val)"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, h, ref, watch } from 'vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

import { AppstoreOutlined, FolderOutlined } from '@ant-design/icons-vue';
const route = useRoute();
const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

defineProps<{
  collapsed: boolean;
}>();

defineEmits(['update:openKeys', 'update:selectedKeys']);

const items: MenuProps['items'] = [
  {
    key: '/manage',
    icon: () => h(AppstoreOutlined),
    label: '管理',
    children: [{ key: '/manage/list', label: '客户管理' }],
  },
  {
    key: '/demo',
    icon: () => h(FolderOutlined),
    label: 'Demo Page',
    children: [{ key: '/demo/g2', label: 'G2' }],
  },
];

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
  if (e?.key) {
    router.push(String(e.key)); // 保证类型是 string
  }
};

function getParentKeys(path: string): string[] {
  const segments = path.split('/').filter(Boolean); // 去掉空段
  const parents: string[] = [];
  for (let i = 0; i < segments.length - 1; i++) {
    parents.push('/' + segments.slice(0, i + 1).join('/'));
  }
  return parents;
}

watch(
  () => route.path,
  (path) => {
    const p = String(path || '/'); // 保证为字符串
    selectedKeys.value = [p];
    openKeys.value = getParentKeys(p);
    console.log(getParentKeys(p));
  },
  { immediate: true }
);
</script>
