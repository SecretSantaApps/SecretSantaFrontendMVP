<template>
  <div class="flex flex-col items-center justify-center space-y-3">
    <span v-if="error">{{ error.value }}</span>
    <form
      class="flex flex-col items-center justify-center space-y-3 w-48 text-black"
      @submit.prevent="
        signUp(
          state.email,
          state.password,
          state.confirmPassword,
          state.username,
        )
      "
    >
      <InputField
        type="email"
        autocomplete="none"
        v-model="state.email"
        placeholder="Enter email"
      />
      <InputField
        type="password"
        autocomplete="new-password"
        v-model="state.password"
        placeholder="Enter password"
      />
      <InputField
        type="password"
        autocomplete="new-password"
        v-model="state.confirmPassword"
        placeholder="Confirm password"
      />
      <InputField v-model="state.username" placeholder="Enter username" />
      <button type="submit" class="bg-amber-500 w-full h-10 rounded-full">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import InputField from '@/core_ui/components/InputField.vue'
  import { reactive, ref } from 'vue'
  import { useAuth } from '@/feature_auth/stores/auth-store'

  const { signUpViaEmail } = useAuth()

  const state = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  })

  const error = ref()

  const signUp = (
    email: string,
    password: string,
    confirmPassword: string,
    username: string,
  ) => {
    if (password !== confirmPassword) {
      error.value = 'Password dont match'
      state.email = ''
      state.password = ''
      state.confirmPassword = ''
      state.username = ''
      return
    }
    signUpViaEmail(email, password, username)
  }
</script>