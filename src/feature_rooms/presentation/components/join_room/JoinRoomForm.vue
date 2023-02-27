<template>
  <div
    class="flex flex-col space-y-3 justify-center items-center w-60 text-black"
  >
    <h1 v-if="loading" class="text-white">Loading</h1>
    <form @submit.prevent="joinRoom" class="space-y-3 justify-center" v-else>
      <input
        required
        v-model="store.room_id"
        placeholder="Enter room ID"
        class="w-full h-8 rounded select-none outline-none focus:outline-none active:outline-none px-4 py-2"
      />
      <textarea
        v-model="store.wishlist"
        placeholder="Enter your wishes"
        class="w-full h-16 rounded select-none outline-none focus:outline-none active:outline-none px-4 py-2"
      />
      <button type="submit" class="bg-amber-500 w-full h-10 rounded-full">
        Join room
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { joinRoomRequest } from '@/feature_rooms/data/rooms-model'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const store = reactive({
    room_id: '',
    wishlist: undefined,
  })

  const loading = ref(false)

  const joinRoom = () => {
    loading.value = true
    joinRoomRequest(store)
      .then(data => {
        console.log(data)
        router.push('/rooms')
      })
      .catch(console.log)
  }
</script>