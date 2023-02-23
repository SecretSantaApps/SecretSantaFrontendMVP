<template>
  <div></div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { RoomDetailsModel } from '@/feature_rooms/data/rooms-model'
  import { fetchRoomDetails } from '@/feature_rooms/data/rooms-model'

  const props = defineProps<{
    id: string
  }>()

  const res = ref<RoomDetailsModel>()

  fetchRoomDetails(props.id)
    .then(data => {
      res.value = data
    })
    .catch(console.log)
  watch(res, data => console.log(data))
</script>