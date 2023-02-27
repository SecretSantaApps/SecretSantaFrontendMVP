<template>
  <div
    class="w-full flex justify-between bg-amber-50 text-black rounded-b-2xl py-3"
  >
    <div class="w-1/12 flex items-center justify-center">
      <HomeIcon class="w-8 h-8" @click="router.push('/rooms')" />
    </div>
    <div class="w-10/12 h-10 flex justify-center items-center">
      <h1 class="text-2xl">{{ headingText }}</h1>
    </div>
    <div class="w-1/12 flex items-center justify-center">
      <LogOutIcon class="w-8 h-8" @click="signOut(true)" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import LogOutIcon from '@/assets/LogOutIcon.vue'
  import { signOut } from '@/core/use-cases/sign-out'
  import HomeIcon from '@/assets/HomeIcon.vue'
  import { useRouter } from 'vue-router'

  defineProps<{
    headingText: string
  }>()

  const router = useRouter()
</script>