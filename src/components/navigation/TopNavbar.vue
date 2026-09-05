<script setup>

  import { ref, onMounted, onUnmounted } from 'vue'
  import Hamburger from './Hamburger.vue'
  import Sidebar from './Sidebar.vue'

  const isScrolling = ref(false)
  let scrollTimer = null
  const menuOpen = ref(false)

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

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }

</script>

<template>

  <nav class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300" :class="menuOpen ? 'bg-[#354155] border-transparent' : isScrolling ? 'bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/70 dark:border-gray-800/70 shadow-sm' : 'bg-transparent border-transparent'">
    <div class="h-[72px] px-8 sm:px-10 lg:px-14 xl:px-20 flex items-center justify-between">
      <a href="#home" class="inter-logo text-xl font-bold transition-colors duration-300" :class="menuOpen ? 'text-white' : 'text-gray-900 dark:text-white'"> MarionoSilaban </a>
      <Hamburger :open="menuOpen" @toggle="toggleMenu" :class="menuOpen ? 'text-white' : 'text-gray-900 dark:text-white'"/> 
    </div>
  </nav>
  <Transition name="fullscreen-menu">
    <div v-if="menuOpen" class="fixed inset-0 z-[90] bg-gray-900/80 flex items-center justify-center" @click="menuOpen = false">
        <div class="flex flex-col items-center justify-center" @click.stop>
          <p class="menu-item text-5xl font-bold text-white mb-6" :class="{ 'menu-item-show': menuOpen }" style="--delay: 0.05s"> Menu </p>
          <a href="#home" @click="menuOpen = false" class="menu-item text-xl font-bold text-white mb-4" :class="{ 'menu-item-show': menuOpen }" style="--delay: 0.15s"> Home </a>
          <a href="#about" @click="menuOpen = false" class="menu-item text-xl font-bold text-white mb-4" :class="{ 'menu-item-show': menuOpen }" style="--delay: 0.25s"> About </a>
          <a href="#skills" @click="menuOpen = false" class="menu-item text-xl font-bold text-white mb-4" :class="{ 'menu-item-show': menuOpen }" style="--delay: 0.35s"> Skills </a>
          <a href="#contact" @click="menuOpen = false" class="menu-item text-xl font-bold text-white mb-4" :class="{ 'menu-item-show': menuOpen }" style="--delay: 0.45s"> Contact </a>
      </div>
    </div>
  </Transition>
  <Sidebar />
</template>

<style scoped>
  .inter-logo {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  .fullscreen-menu-enter-active {
    animation: menuOpen 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .fullscreen-menu-leave-active {
    animation: menuClose 0.3s cubic-bezier(0.4, 0, 1, 1) forwards;
  }

  @keyframes menuOpen {
    from {
      clip-path: circle(0px at calc(100% - 40px) 36px);
    }

    to {
      clip-path: circle(150vmax at calc(100% - 40px) 36px);
    }
  }

  @keyframes menuClose {
    from {
      clip-path: circle(150vmax at calc(100% - 40px) 36px);
    }

    to {
      clip-path: circle(0px at calc(100% - 40px) 36px);
    }
  }

  .menu-item {
    opacity: 0;
    transform: translateX(-80px);
  }

  .menu-item-show {
    animation: menuItemIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: var(--delay);
  }

  @keyframes menuItemIn {
    from {
      opacity: 0;
      transform: translateX(-80px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

</style>