<template>
  <div
    class="w-full flex justify-between bg-amber-50 text-black rounded-b-2xl py-3 items-center"
  >
    <div class="w-4/12 flex items-center justify-start pl-6">
      <HomeIcon class="w-8 h-8" @click="router.push('/rooms')" />
    </div>
    <div class="w-4/12 h-10 flex justify-center items-center">
      <h1 class="text-2xl">{{ headingText }}</h1>
    </div>
    <div class="w-4/12 flex flex-row items-center justify-between px-6">
      <div class="flex flex-col py-4 px-6">
        <h1 class="text-xl">Пользователь:</h1>
        <p class="text-xl text-gray-600">{{ username }}</p>
      </div>
      <LogOutIcon class="w-8 h-8" @click="signOut(true)" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import LogOutIcon from '@/assets/LogOutIcon.vue'
  import { signOut } from '@/core/use-cases/sign-out'
  import HomeIcon from '@/assets/HomeIcon.vue'
  import { useRouter } from 'vue-router'
  import { fetchSelfData } from '@/core/use-cases/fetch-self-data'
  import { ref } from 'vue'

  defineProps<{
    headingText: string
  }>()
  const username = ref<string>()

  fetchSelfData().then(data => {
    username.value = data.username
  })

  const router = useRouter()
</script>