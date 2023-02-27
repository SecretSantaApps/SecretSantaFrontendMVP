<template>
  <Header heading-text="Подробнее о комнате"/>
  <div class="w-full h-full items-center justify-center flex flex-col">
    <RoomDetails :id="id" />
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import RoomDetails from '@/feature_rooms/presentation/components/room_details/RoomDetails.vue'
  import Header from "@/core_ui/components/Header.vue";

  const route = useRoute()
  const id = route.params.id.toString()
</script>