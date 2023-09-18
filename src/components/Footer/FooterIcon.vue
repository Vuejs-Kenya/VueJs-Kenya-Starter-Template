<script setup lang='ts'>
defineProps<{
  id: number
  icon: string
  link: string
}>()
</script>

<template>
  <a :href="link" target="_blank" class="flex px-4">
    <Icon :icon="icon" class="text-xl text-gray-400 hover:text-white transition-all duration-200 ease-in" />
  </a>
</template>
