export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const incrementCount = () => {
    return count.value++
  }

  const decrementCount = () => {
    return count.value--
  }

  return {
    count,
    incrementCount,
    decrementCount,
  }
})
