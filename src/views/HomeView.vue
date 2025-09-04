<!--
 * @Author: NanNan
 * @Date: 2025-09-04 15:04:31
 * @LastEditTime: 2025-09-05 02:57:08
 * @Description: 
-->
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Home Page</h1>
    <router-link to="/about" class="text-blue-500 underline">
      Go to About
    </router-link>
  </div>
</template>

<script lang="ts" setup>
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // Jack
</script>
