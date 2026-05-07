<template>
  <div v-if="loading" class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-100 transition-all duration-700">
    <h1 class="animate-pulse text-5xl font-light tracking-[6px] text-black">  M | S </h1>
    <div class="mt-8 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
    <div class="mt-8 h-[4px] w-56 overflow-hidden rounded-full bg-gray-300">
      <div class="loading-bar h-full bg-black"></div>
    </div>
    <p class="mt-6 animate-pulse text-sm tracking-[4px] text-gray-600"> LOADING PORTFOLIO </p>
  </div>
  <div v-else>
    <section class="nav">
      <Disclosure as="nav" class="relative bg-white" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <!-- Mobile Button -->
            <div class="flex items-center sm:hidden">
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
                <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true"/>
                <XMarkIcon v-else class="block size-6" aria-hidden="true"/>
              </DisclosureButton>
            </div>
            <h1 class="relative left-0 text-2xl font-bold text-black sm:left-10 sm:text-3xl lg:left-[80px]"> M | S </h1>
            <!-- Desktop Menu -->
            <div class="hidden sm:block">
              <div class="flex space-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[ item.current ? 'bg-gray-900 text-red-500 border-blue-500' : 'text-gray-700 border-transparent hover:border-blue-500 hover:text-blue-500', 'rounded-md px-3 py-2 text-2xl font-medium border-b-2 transition duration-200' ]">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="open" class="fixed inset-0 z-40 flex items-center justify-center bg-black/40 sm:hidden">
          <DisclosurePanel class="w-80 h-80 bg-white p-6 shadow-2xl">
            <div class="mb-6 text-center">
              <h2 class="text-2xl font-bold text-black"> Menu </h2>
            </div>
            <div class="flex flex-col space-y-4">
              <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[ item.current ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100', 'rounded-xl px-4 py-3 text-center text-lg font-medium transition duration-200' ]">
                {{ item.name }}
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </section>
    <section class="min-h-screen bg-white flex items-center">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
          <div class="max-w-2xl">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900"> Hi, nama saya Mariono Silaban </h1>
            <p class="mt-6 text-lg leading-relaxed text-gray-600">
              Saya seorang full-stack web developer yang fokus
              pada pembuatan website modern, responsif, dan
              fungsional. Saya memiliki pengalaman menggunakan
              Node.js untuk membangun backend yang aman dan
              scalable, serta senang mempelajari teknologi baru
              dan mengembangkan solusi digital yang bermanfaat.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <button class="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"> Unduh CV </button>
              <button class="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-700" > Hubungi Saya</button>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img src="../assets/FOTO.png" alt="My foto" class="h-[390px] w-[320px] object-cover shadow-2xl"/>
            <div class="mt-6 flex gap-6">
              <img src="../assets/nodejs.png" alt="Icon NodeJS" class="size-12 transition hover:scale-110"/>
              <img src="../assets/atom.png" alt="Icon Atom" class="size-12 transition hover:scale-110"/>
              <img src="../assets/document.png" alt="Icon Vue" class="size-12 transition hover:scale-110"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-6 py-16">
      <div class="sm:ml-10 lg:ml-[130px]">
        <p class="text-2xl font-bold text-black sm:text-3xl"> Projects </p>
      </div>
      <div class="mx-auto mt-5 w-full max-w-[1050px] border-2 border-black"></div>
      <div class="card mt-10 flex flex-wrap justify-center gap-10 lg:gap-16">
        <div class="transition duration-300 hover:-translate-y-2">
          <p class="mb-4 text-lg font-semibold text-black sm:text-xl"> 01 Example Project </p>
          <img src="../assets/example_satu.png" class="h-[400px] w-[260px] object-cover shadow-lg sm:h-[500px] sm:w-[300px]" alt="Example Project 1">
        </div>
        <div class="transition duration-300 hover:-translate-y-2">
          <p class="mb-4 text-lg font-semibold text-black sm:text-xl"> 02 Example Project </p>
          <img src="../assets/example_dua.png" class="h-[400px] w-[260px] object-cover shadow-lg sm:h-[500px] sm:w-[300px]" alt="Example Project 2">
        </div>
        <div class="transition duration-300 hover:-translate-y-2">
          <p class="mb-4 text-lg font-semibold text-black sm:text-xl"> 03 Example Project </p>
          <img src="../assets/example_tiga.png" class="h-[400px] w-[260px] object-cover shadow-lg sm:h-[500px] sm:w-[300px]" alt="Example Project 3">
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

  const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'About', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

  const loading = ref(true)
  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 2500)
  })

</script>
<style>
  .loading-bar {
    width: 40%;
    animation: loading 1.5s infinite ease-in-out;
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(250%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
</style>