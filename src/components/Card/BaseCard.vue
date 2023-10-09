<script setup lang="ts">
defineProps<{
  link: string
  color: string
  title: string
}>()
const card = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)
</script>

<template>
  <div
    ref="card" :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="border-gradient group relative w-72 rounded-xl before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl h-80 lg:p-16"
  >
    <a :href="link" target="_blank">
      <div
        class="absolute inset-0 icon rounded-[11px] grid place-items-center bg-[#202023] p-4 transition-colors duration-300 group-hover:bg-[#27272a]"
      >
        <div class="relative grid p-4 place-items-center">
          <div class="grid place-items-center">
            <slot name="icon" />
          </div>

          <div>
            <div class="mt-5">
              <h1 class="text-2xl font-medium text-white ">
                {{ title }}
              </h1>
            </div>

            <div class="mt-3 text-sm font-light leading-6 text-white/70">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.border-gradient::before {
  background: radial-gradient(300px circle at var(--x) var(--y),
      #1cd1c6 0,
      v-bind(color) 50%,
      transparent 100%);
}
</style>
