<template>
  <header class="w-full flex justify-center items-center">
    <h1>Rooms list</h1>
  </header>
  <div
    class="w-full h-full flex flex-col space-y-10 items-center justify-center"
  >
    <RoomListItem
      v-if="rooms"
      v-for="room in rooms"
      :key="room.room_name"
      :room="room"
      @click="showDetails(room.room_id)"
    />
    <h1 v-else>Loading rooms</h1>
  </div>
</template>

<script setup lang="ts">
  import RoomListItem from '@/feature_rooms/presentation/components/RoomListItem.vue'
  import {
    fetchRoomsList,
    type RoomModel,
  } from '@/feature_rooms/data/rooms-model'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const rooms = ref<RoomModel[]>()

  const showDetails = (id: string) => {
    router.push(`/room/${id}`)
  }

  fetchRoomsList()
    .then(data => {
      rooms.value = data
    })
    .catch(console.log)
</script>