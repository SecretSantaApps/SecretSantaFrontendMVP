<script setup lang="ts">
  import LoginForm from '@/feature_auth/presentation/login/LoginForm.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <main
    class="w-full h-full items-center justify-center flex flex-col space-y-3"
  >
    <LoginForm />
    <button @click="router.push('/signup')" class="text-white">
      Зарегистрироваться
    </button>
  </main>
</template>