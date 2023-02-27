<template>
  <Header heading-text="Присоединиться к комнате" />
  <main
    class="w-full h-full items-center justify-center flex flex-col space-y-3"
  >
    <JoinRoomForm />
  </main>
</template>

<script setup lang="ts">
  import Header from '@/core_ui/components/Header.vue'
  import JoinRoomForm from '@/feature_rooms/presentation/components/join_room/JoinRoomForm.vue'
</script>