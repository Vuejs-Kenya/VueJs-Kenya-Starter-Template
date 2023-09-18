<script setup lang='ts'>
const username = ref(null)
const input = ref()

onMounted(() => {
  input.value?.focus()
})
</script>

<template>
  <div class="grid place-items-center space-y-4">
    <input
      ref="input" v-model="username" placeholder="What's your name?"
      class="appearance-none w-64 placeholder-gray-400 focus:outline-none bg-[#1f1f24] text-white border border-[#1d1d20] rounded-md py-2 px-4"
    >
    <router-link :to="`/name/${username}`">
      <button
        type="button" :disabled="!username"
        class="py-1 px-4 text-base disabled:bg-[#2F343b] disabled:cursor-not-allowed text-white bg-[#27272A] rounded-md hover:enabled:bg-[#1f1f22] transition-all duration-200 ease-in"
      >
        Go
      </button>
    </router-link>
  </div>
</template>
