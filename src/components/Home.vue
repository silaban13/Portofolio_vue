<template>
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
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]
</script>