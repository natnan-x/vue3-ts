<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="p-4 bg-white shadow">
      <nav class="flex space-x-4">
        <router-link to="/" class="text-blue-500 hover:underline">
          Home
        </router-link>
        <router-link to="/about" class="text-blue-500 hover:underline">
          About
        </router-link>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="p-4 bg-white shadow text-center">
      © 2025 My Vue3 Vite App
    </footer>
  </div>
</template>

<script lang="ts" setup>
// 如果需要全局逻辑或者组合式 API，可在这里写
</script>

<style scoped>
/* 可选自定义样式 */
</style>
