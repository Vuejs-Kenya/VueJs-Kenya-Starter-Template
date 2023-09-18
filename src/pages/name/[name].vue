<script setup lang='ts'>
const route = useRoute('/name/[name]')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div class="grid place-items-center space-y-4">
      <h1 class="text-white text-2xl">
        Welcome : {{ route.params.name }}
      </h1>
      <button class="py-2 px-4 text-base text-white bg-[#27272A] rounded-md hover:bg-[#1f1f22] transition-all duration-200 ease-in">
        <router-link to="/">
          Go back home
        </router-link>
      </button>
    </div>
  </div>
</template>
