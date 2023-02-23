<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <main class="w-full h-full flex flex-col justify-center items-center">
    <h1>Hello!</h1>
    <button @click="router.push('/login')">Login</button>
  </main>
</template>