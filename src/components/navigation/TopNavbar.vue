<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import Hamburger from './Hamburger.vue'
  import Sidebar from './Sidebar.vue'

  const isScrolling = ref(false)
  let scrollTimer = null

  function handleScroll() {
    isScrolling.value = true
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      isScrolling.value = false
    }, 400)
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(scrollTimer)
  })
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300" :class="isScrolling ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/70 dark:border-gray-800/70 shadow-sm' : 'bg-transparent border-transparent'">
    <div class="h-[72px] px-8 sm:px-10 lg:px-14 xl:px-20 flex items-center justify-between">
      <a href="#home" class="inter-logo   text-xl font-bold text-gray-900 dark:text-white"> MarionoSilaban</a>
      <Hamburger />
    </div>
  </nav>
  <Sidebar />
</template>

<style scoped>
  .inter-logo {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
</style>