<template>
  <div class="flex flex-col w-full">
    <Header heading-text="Список комнат" />
    <div class="flex flex-row w-full justify-center space-x-4 py-6">
      <button class="p-4 bg-amber-500 rounded-full text-black" @click="router.push('/room/create')">
        Создать комнату
      </button>
      <button class="p-4 bg-amber-500 rounded-full text-black" @click="router.push('/room/join')">
        Присоединиться к комнате
      </button>
    </div>
  </div>

  <div
    class="w-full h-full flex flex-col space-y-10 items-center pt-16"
  >
    <RoomListItem
      v-if="rooms"
      v-for="room in rooms"
      :key="room.room_name"
      :room="room"
      @click="room.accepted && showDetails(room.room_id)"
    />
    <h1 v-else>Loading rooms</h1>
  </div>
</template>

<script setup lang="ts">
  import RoomListItem from '@/feature_rooms/presentation/components/rooms_list/RoomListItem.vue'
  import {
    fetchRoomsList,
    type RoomModel,
  } from '@/feature_rooms/data/rooms-model'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from '@/core_ui/components/Header.vue'

  const router = useRouter()

  const rooms = ref<RoomModel[]>()

  const showDetails = (id: string) => {
    router.push(`/room/${id}`)
  }

  fetchRoomsList()
    .then(data => {
      rooms.value = data
      console.log(data)
    })
    .catch(console.log)
</script>