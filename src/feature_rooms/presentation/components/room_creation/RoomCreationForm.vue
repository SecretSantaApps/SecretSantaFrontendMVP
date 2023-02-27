<template>
  <div
    class="flex flex-col space-y-3 justify-center items-center w-60 text-black"
  >
    <h1 v-if="loading" class="text-white text-2xl">Loading</h1>
    <form @submit.prevent="createRoom" class="space-y-3 justify-center" v-else>
      <input
        required
        v-model="store.room_name"
        placeholder="Enter room name"
        class="w-full h-8 rounded select-none outline-none focus:outline-none active:outline-none px-4 py-2"
      />
<!--      <div
        class="flex flex-row outline-2 outline-amber-500 space-x-4 justify-center items-center"
      >
        <input type="checkbox" v-model="store.playable_owner" class="w-4 h-4" />
        <p class="text-white">Room owner is also player</p>
      </div>-->
      <textarea
        v-model="store.wishlist"
        placeholder="Enter your wishes"
        class="w-full h-16 rounded select-none outline-none focus:outline-none active:outline-none px-4 py-2"
      />
      <input
        placeholder="Enter gift price (optional)"
        v-model="store.max_price"
        class="w-full h-8 rounded select-none outline-none focus:outline-none active:outline-none px-4 py-2"
      />

      <button type="submit" class="bg-amber-500 w-full h-10 rounded-full">
        Create room
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { createRoomRequest } from '@/feature_rooms/data/rooms-model'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const store = reactive({
    room_name: '',
    playable_owner: true,
    wishlist: '',
    max_price: undefined,
  })

  const loading = ref(false)

  const createRoom = () => {
    loading.value = true
    createRoomRequest(store)
      .then(data => {
        console.log(data)
        router.push('/rooms')
      })
      .catch(error => {
        console.log(error)
        loading.value = false
      })
  }
</script>