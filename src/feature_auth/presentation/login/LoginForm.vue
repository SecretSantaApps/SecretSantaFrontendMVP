<script setup lang="ts">
  import InputField from '@/core_ui/components/InputField.vue'
  import { useAuth } from '@/feature_auth/stores/auth-store'
  import { reactive } from 'vue'

  const { loginViaEmail } = useAuth()

  const store = reactive({
    login: '',
    password: '',
  })
</script>

<template>
  <form
    class="flex flex-col space-y-3 justify-center w-48 text-black"
    @submit.prevent="loginViaEmail(store.login, store.password)"
  >
    <InputField type="email" v-model="store.login" placeholder="Enter email" />
    <InputField
      type="password"
      v-model="store.password"
      placeholder="Enter password"
    />
    <button type="submit" class="bg-amber-500 w-full h-10 rounded-full">
      Login
    </button>
  </form>
</template>