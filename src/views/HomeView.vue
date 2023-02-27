<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { checkSignedIn } from '@/core/use-cases/check-signed-in'

  const router = useRouter()

  if (checkSignedIn()) {
    window.location.href = '/rooms'
  }
</script>

<template>
  <main class="w-full h-full flex flex-col justify-center items-center space-y-10">
    <h1 class="text-2xl">Hello!</h1>
    <button @click="router.push('/login')">Login</button>
  </main>
</template>