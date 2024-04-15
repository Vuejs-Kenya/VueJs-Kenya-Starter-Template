<template>
  <div class="flex items-center justify-center pt-10">
    <div class="grid space-y-10 place-items-center">
      <div class="text-center">
        <div class="grid my-4 place-items-center">
          <img
            src="https://github.com/Vuejs-Kenya.png" alt="VueJs Kenya Logo"
            class="w-20 h-20 rounded-lg"
          >
        </div>
        <h1 class="text-xl font-semibold text-white lg:text-5xl">
          Welcome To VueJs Kenya Starter Template!
        </h1>
      </div>

      <div class="pt-6">
        <InputComponent />
      </div>

      <div class="grid pt-10 place-items-center">
        <h1 class="text-4xl text-white">
          Features
        </h1>
      </div>

      <div>
        <Cards />
      </div>
    </div>
  </div>
</template>
