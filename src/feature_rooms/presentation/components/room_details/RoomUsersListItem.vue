<template>
  <div
    class="w-full py-3 px-6 flex flex-row justify-between items-center bg-amber-400 rounded-xl"
  >
    <div class="flex flex-col">
      <h1 class="text-xl">{{ user.username }}</h1>
      <h2 v-if="hasWishes">Список желаний: {{ user.wishlist }}</h2>
      <h2 v-show="exists(user.accepted)" class="text-rose-500 text-xl">
        {{ user.accepted ? 'В игре' : 'Ожидает подтверждения' }}
      </h2>
    </div>
    <div class="flex flex-col items-center justify-center px-4 space-y-1">
      <button
        v-show="hasAcceptButton"
        class="p-1 rounded-full bg-amber-50 text-green-600"
        @click="emit('accept')"
      >
        Принять
      </button>
      <button
        v-show="hasAcceptButton"
        class="p-1 rounded-full bg-amber-50 text-rose-600"
        @click="emit('decline')"
      >
        Отклонить
      </button>

      <button
        v-show="!hasAcceptButton && hasKickButton"
        class="p-1 rounded-full bg-amber-50 text-rose-600"
        @click="emit('kick')"
      >
        Исключить
      </button>
    </div>
    <div>
      <img
        class="w-12 h-12 object-cover rounded-full flex-shrink-0"
        :src="avatarUrl(user.avatar)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { UserRoomInfo } from '@/feature_rooms/data/rooms-model'
  import { avatarUrl } from '@/core/utils/AvatarURL'
  import { ref } from 'vue'
  import { exists } from "@/core/utils/exists";

  const props = defineProps<{
    user: UserRoomInfo
    hasAcceptButton: boolean
    hasKickButton: boolean
  }>()

  const emit = defineEmits<{
    (e: 'accept'): void
    (e: 'decline'): void
    (e: 'kick'): void
  }>()

  const hasWishes = ref(props.user.wishlist?.length ?? 0 > 0)
</script>