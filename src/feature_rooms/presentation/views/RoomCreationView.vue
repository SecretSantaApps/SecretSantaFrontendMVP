<template>
  <Header heading-text="Создание комнаты" />
  <main
    class="w-full h-full items-center justify-center flex flex-col space-y-3"
  >
    <RoomCreationForm />
  </main>
</template>

<script setup lang="ts">
  import RoomCreationForm from '@/feature_rooms/presentation/components/room_creation/RoomCreationForm.vue'
  import Header from '@/core_ui/components/Header.vue'
</script>