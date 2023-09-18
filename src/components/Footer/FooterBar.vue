<script setup lang='ts'>
const socialIcons = [
  {
    id: 1,
    icon: 'mdi:twitter',
    link: 'https://twitter.com/kenyavue',

  },

  {
    id: 2,
    icon: 'mdi:github',
    link: 'https://github.com/Vuejs-Kenya',
  },

  {
    id: 3,
    icon: 'fa6-brands:linkedin',
    link: 'https://www.linkedin.com/company/vuejskenya/',
  },

  {
    id: 4,
    icon: 'akar-icons:youtube-fill',
    link: 'https://www.youtube.com/@vuejskenya',
  },
]
</script>

<template>
  <div class="my-6">
    <div
      class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-800 before:mr-4 after:flex-[1_1_0%] after:border-t after:border-gray-800 after:ml-4"
    >
      <img
        src="https://vuejs-kenya.netlify.app/_nuxt/vuejskenyalogo.77f7db40.svg" alt="Vue Js Kenya Logo"
        class="w-10 h-10"
      >
    </div>

    <div class="flex justify-center items-center md:flex md:justify-end">
      <FooterIcon
        v-for="{ id, link, icon } in socialIcons"
        :id="id"
        :key="id"
        :link="link"
        :icon="icon"
      />
    </div>
  </div>
</template>
