<template>
  <div
    class="flex flex-row w-full justify-between items-center text-black px-10 py-5 bg-amber-50 rounded-full"
  >
    <div class="flex flex-col space-y-2">
      <h2 class="text-3xl">{{ room.room_name }}</h2>
      <h3 class="text-gray-500">{{ room.members_count }} участников</h3>
    </div>
    <div class="px-4 py-2 rounded-full text-white" :class="gameState.color">
      {{ gameState.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { RoomModel } from '@/feature_rooms/data/rooms-model'
  import { computed } from 'vue'

  const props = defineProps<{
    room: RoomModel
  }>()

  const gameState = computed(() => ({
    text: props.room.game_started ? 'Игра началась' : 'Ожидаем игроков',
    color: props.room.game_started ? 'bg-green-600' : 'bg-rose-400',
  }))
</script>