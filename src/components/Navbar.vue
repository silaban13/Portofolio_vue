<template>
  <section class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <Disclosure as="nav" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-6">
        <div class="h-20 flex items-center justify-between">
          <h1 class="text-2xl font-bold text-black dark:text-white"> Mariono <span class="text-blue-600">Silaban</span> </h1>
          <div class="hidden lg:flex items-center gap-10">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="relative font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">  {{ item.name }} </a>
          </div>
          <div class="hidden lg:flex items-center gap-4">
            <button type="button" @click="toggleTheme" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition">
              <img :src="theme === 'light' ? lightIcon : darkIcon" :alt="theme" class="w-5 h-5">
            </button>
            <a href="https://github.com/USERNAME" target="_blank" class="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">  Github </a>
            <a href="/cv.pdf" download class="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"> Download CV
              <ArrowDownTrayIcon class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"/>
            </a>
          </div>
          <div class="relative z-[60] flex items-center lg:hidden">
            <DisclosureButton class="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-white" >
              <Bars3Icon v-if="!open" class="w-7 h-7"/>
              <XMarkIcon v-else class="w-7 h-7" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel class="fixed inset-0 z-50 lg:hidden">
        <div class="flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8">
          <div class="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[450px] bg-white dark:bg-gray-900 shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-700 animate-[zoomIn_.25s_ease]">
            <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"> Menu </h2>
            <div class="space-y-3 sm:space-y-4">
              <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="block rounded-2xl py-3 sm:py-4 text-base sm:text-lg font-medium text-center text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"> {{ item.name }} </DisclosureButton>
            </div>
            <hr class="my-8 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <span class="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200"> Tema </span>
              <button type="button" @click="toggleTheme" class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition duration-300">
                <img :src="theme === 'light' ? lightIcon : darkIcon" class=" w-5 h-5 sm:w-6 sm:h-6">
              </button>
            </div>
            <a href="/cv.pdf" download class="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2">
              <span>Download CV</span>
              <ArrowDownTrayIcon class="w-5 h-5" />
            </a>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </section>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
  import lightIcon from "@/assets/darker.png"
  import darkIcon from "@/assets/night-mode.png"

  const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Skills', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

  const loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
      loading.value = false
      }, 2500)
  })

  const theme = ref("light")

  onMounted(() => {
    const saved = localStorage.getItem("theme") || "light"
    theme.value = saved

    if (saved === "dark") {
      document.documentElement.classList.add("dark")
    }
  })

  function toggleTheme() {
    if (theme.value === "light") {
      theme.value = "dark"
      document.documentElement.classList.add("dark")
    } else {
      theme.value = "light"
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("theme", theme.value)
  }

</script>

<style scoped>

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

</style>

