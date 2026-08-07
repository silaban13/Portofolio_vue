<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Typed from 'typed.js'

let typed

onMounted(() => {
  typed = new Typed('#typing', {
    strings: [
      'Web Developer',
      'Front-End Developer',
      'Full Stack Developer'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  })
})

onBeforeUnmount(() => {
  typed.destroy()
})
</script>

<template>
  <section class="min-h-screen flex items-center bg-white dark:bg-[#11131c]" style="padding-top:clamp(7rem,10vw,11rem);">
    <div class="mx-auto w-full px-5 sm:px-6 lg:px-10 xl:px-16">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between" style="gap:clamp(3rem,6vw,6rem);">
        <div class="w-full lg:w-[55%] xl:w-[58%]">
          <p class="font-semibold uppercase tracking-[0.3em] text-blue-500" style="font-size:clamp(.75rem,1vw,.95rem);"> Hi, I'm </p>
        <h1 class="font-black leading-none tracking-[-0.03em] text-gray-900 dark:text-white" style="font-size: clamp(3rem, 5vw, 5rem);"> Mariono Silaban</h1>
          <h2
class="font-bold text-blue-600"
style="font-size:clamp(1.5rem,3vw,2.4rem)"
><span id="typing"></span> </h2>
          <p class="text-gray-500 dark:text-gray-400 leading-8 max-w-xl" style="margin-top:clamp(1.5rem,3vw,2rem); font-size:clamp(1rem,1.2vw,1.15rem);">
            Saya membangun website modern, responsif, dan cepat
            menggunakan Vue.js, Laravel, Node.js, serta teknologi web
            terbaru untuk menghasilkan pengalaman pengguna yang
            profesional dan mudah digunakan.
          </p>
          <div class="flex flex-wrap" style="margin-top:clamp(2rem,4vw,3rem); gap:clamp(1rem,2vw,1.5rem);">
            <a href="#projects" class=" group inline-flex items-center gap-4 rounded-full border border-gray-300 bg-white py-2 pl-7 pr-2 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600">
              <span>View Projects</span>

              <span
class="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-blue-600
text-white
transition-all   
duration-300
group-hover:bg-white
group-hover:text-blue-600
"> → </span>

            </a> 
            <a href="#contact" class="rounded-full border border-gray-300 px-8 py-4 font-semibold text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"> Contact Me </a>
          </div>
        </div>
        <div class="w-full lg:w-[45%] xl:w-[42%] flex flex-col items-center lg:items-end">
         <img
  src="../assets/FOTO.png"
  alt="Mariono Silaban"
  class="hero-photo object-cover
         w-[340px]
         lg:w-[380px]
         xl:w-[430px]"
  style="height: clamp(420px, 42vw, 520px);"
/>
          <div class="flex justify-center"
          style="
            width:clamp(300px,30vw,430px);
            margin-top:clamp(1.2rem,2vw,1.8rem);
            gap:clamp(1rem,2vw,1.5rem);
          ">
            <img src="../assets/nodejs.png" class="size-12 transition hover:scale-110" />
            <img src="../assets/atom.png" class="size-12 transition hover:scale-110" />
            <img src="../assets/document.png" class="size-12 transition hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>