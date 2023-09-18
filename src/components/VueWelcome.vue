<template>
  <div class="flex justify-center items-center pt-10">
    <div class="grid place-items-center space-y-10">
      <div class="text-center">
        <div class="my-4 grid place-items-center">
          <img
            src="https://vuejs-kenya.netlify.app/_nuxt/vuejskenyalogo.77f7db40.svg" alt="Vue Js Kenya Logo"
            class="w-20 h-20"
          >
        </div>
        <h1 class="text-xl font-semibold text-white lg:text-5xl">
          Welcome To VueJs Kenya Starter Template!
        </h1>
      </div>

      <div class="pt-6">
        <InputComponent />
      </div>

      <div class="grid place-items-center pt-10">
        <h1 class="text-white text-4xl">
          Features
        </h1>
      </div>

      <div>
        <Cards />
      </div>
    </div>
  </div>
</template>
