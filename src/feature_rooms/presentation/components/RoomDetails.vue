<template>
  <div class="w-2/5 h-4/5 flex flex-col bg-amber-50 rounded-3xl text-black">
    <div v-if="room" class="w-full h-full flex flex-col">
      <div
        class="w-full flex flex-row items-center justify-center py-3 text-2xl"
      >
        <h1>{{ room.room_name }}</h1>
      </div>
      <div class="w-full flex-row items-start justify-items-start px-4">
        <h2>ID комнаты: {{ room.room_id }}</h2>
        <h2 v-if="room.max_price">Цена подарка: {{ room.max_price }}</h2>
        <h2 v-if="room.recipient">
          Ваш получатель подарка: {{ room.recipient }}
        </h2>
      </div>
    </div>
    <div v-else class="flex flex-col w-full h-full items-center justify-center">
      <h1>Loading</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { RoomDetailsModel } from '@/feature_rooms/data/rooms-model'
  import { fetchRoomDetails } from '@/feature_rooms/data/rooms-model'

  const props = defineProps<{
    id: string
  }>()

  const room = ref<RoomDetailsModel>()

  fetchRoomDetails(props.id)
    .then(data => {
      room.value = data
      console.log('Data received')
    })
    .catch(console.log)
</script>