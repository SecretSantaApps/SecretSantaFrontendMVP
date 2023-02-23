<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    @apply bg-gray-800 h-full text-cyan-50;
  }

  body {
    @apply min-h-full;
  }
</style>