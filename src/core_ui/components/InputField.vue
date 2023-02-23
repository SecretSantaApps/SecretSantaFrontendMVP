<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', input: string): void
}>()

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :value="modelValue"
    class="w-full h-8 rounded select-none outline-none focus:outline-none active:outline-none px-4 py-2"
    required
    @change="onInput"
  />
</template>
