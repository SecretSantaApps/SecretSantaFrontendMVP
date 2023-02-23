<template>
  <main class="w-full h-full items-center justify-center flex flex-col">
    <RoomDetails :id="id" />
  </main>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import RoomDetails from '@/feature_rooms/presentation/components/RoomDetails.vue'

  const route = useRoute()
  const id = route.params.id.toString()
</script>