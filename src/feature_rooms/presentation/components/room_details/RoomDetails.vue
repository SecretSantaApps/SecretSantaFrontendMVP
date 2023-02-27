<template>
  <div class="w-3/5 h-4/5 flex flex-col bg-amber-50 rounded-3xl text-black">
    <div v-if="room" class="w-full h-full flex flex-col">
      <div v-if="!isLoading">
        <div
          class="w-full flex flex-row items-center justify-center py-3 text-2xl px-4"
        >
          <div class="w-1/12" />
          <h1 class="w-11/12 flex flex-row justify-center items-center">
            {{ room.room_name }}
          </h1>
          <div class="w-1/12 flex flex-row justify-center items-center">
            <DeleteIcon class="w-8 h-8" @click="deleteRoom" />
          </div>
        </div>
        <div class="w-full flex-row items-start justify-items-start px-4">
          <h2>ID комнаты: {{ room.room_id }}</h2>
          <h2 v-if="room.max_price">Цена подарка: {{ room.max_price }}</h2>
          <h2 v-if="room.recipient">
            Ваш получатель подарка: {{ room.recipient }}
          </h2>
        </div>
        <div
          class="px-4 pt-5 flex flex-col justify-center items-center space-y-3"
        >
          <h1 class="text-xl">Игроки</h1>
          <RoomUsersListItem
            v-for="user in room.users"
            :user="user"
            :has-accept-button="isAdmin && !user.accepted"
            :key="user.user_id"
            v-on:accept="acceptUser(user.user_id)"
            v-on:decline="kickUser(user.user_id)"
          />
        </div>
      </div>
      <div
        v-else
        class="flex flex-col w-full h-full items-center justify-center"
      >
        <h1 class="text-2xl">Loading</h1>
      </div>
    </div>
    <div v-else class="flex flex-col w-full h-full items-center justify-center">
      <h1 class="text-2xl">Loading</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { RoomDetailsModel } from '@/feature_rooms/data/rooms-model'
  import {
    acceptUserRequest,
    deleteRoomRequest,
    fetchRoomDetails,
    kickUserRequest,
  } from '@/feature_rooms/data/rooms-model'
  import RoomUsersListItem from '@/feature_rooms/presentation/components/room_details/RoomUsersListItem.vue'
  import { getSelfId } from '@/core/use-cases/get-self-id'
  import DeleteIcon from '@/assets/DeleteIcon.vue'
  import { useRouter } from 'vue-router'

  const props = defineProps<{
    id: string
  }>()

  const router = useRouter()

  const room = ref<RoomDetailsModel>()

  const isLoading = ref(false)

  const isAdmin = ref(false)

  const fetchDetails = () => {
    isLoading.value = true
    fetchRoomDetails(props.id)
      .then(data => {
        getSelfId().then(id => {
          if (id === data.owner_id) {
            isAdmin.value = true
          }
        })
        room.value = data
        isLoading.value = false
      })
      .catch(console.log)
  }

  fetchDetails()

  const acceptUser = (id: string) => {
    isLoading.value = true
    acceptUserRequest(room.value?.room_id!, id)
      .then(() => {
        fetchDetails()
      })
      .catch(console.log)
  }

  const kickUser = (id: string) => {
    isLoading.value = true
    kickUserRequest(room.value?.room_id!, id)
      .then(() => {
        fetchDetails()
      })
      .catch(console.log)
  }

  const deleteRoom = () => {
    isLoading.value = true
    deleteRoomRequest(room.value?.room_id!)
      .then(() => {
        router.push('/rooms')
      })
      .catch(console.log)
  }
</script>