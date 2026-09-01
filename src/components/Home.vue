<script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  import Typed from 'typed.js'
  import { useScrollAnimation } from '@/composables/useScrollAnimation'

  let typed

  useScrollAnimation()

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
  <section id="home" class="min-h-screen flex items-center bg-white dark:bg-[#11131c]">
    <div class="mx-auto w-full px-6 sm:px-10 md:px-24 lg:px-28 xl:px-36">
      <div class="flex flex-col-reverse md:flex-row items-start justify-between gap-3 lg:gap-[clamp(3rem,6vw,6rem)]">
        <div data-scroll-animation class="w-full md:w-[52%] lg:w-[55%] xl:w-[58%] translate-y-[100px] md:translate-y-[55px] lg:translate-y-[45px]">
          <p class="font-semibold uppercase tracking-[0.3em] text-blue-500 mb-3" style="font-size:clamp(.75rem,1vw,.95rem);"> Hi, I'm </p>
          <h1 class="font-black leading-none tracking-[-0.03em] text-gray-900 dark:text-white whitespace-nowrap" style="font-size:clamp(2.5rem,5vw,5rem);"> Mariono Silaban </h1>
          <h2 class="font-medium text-blue-600" style="font-size:clamp(1.25rem,2.5vw,2rem); margin-top:0.4rem;"> <span id="typing"></span> </h2>
          <p class="text-gray-500 dark:text-gray-400 leading-8 max-w-xl" style=" margin-top:clamp(1.8rem,2.8vw,2.3rem); font-size:clamp(1rem,1.2vw,1.15rem);">
            Saya seorang Front-End Developer yang berfokus pada pengembangan website
            modern, responsif, dan interaktif. Saya merancang dan membangun antarmuka
            yang fungsional dengan memperhatikan pengalaman pengguna, performa, serta
            tampilan yang profesional dan mudah digunakan.
          </p>
          <div class="flex flex-wrap" style=" margin-top:clamp(1.8rem,3vw,2.5rem); gap:clamp(1rem,2vw,1.5rem);">
            <a href="https://github.com/silaban13" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white py-1.5 pl-6 pr-1.5 font-semibold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600">
              <span>View Projects</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 group-hover:bg-white group-hover:text-blue-600"> → </span>
            </a>
            <a href="#contact" class="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"> Contact Me </a>
          </div>
        </div>
        <div data-scroll-animation class="w-full lg:w-[45%] xl:w-[42%] flex flex-col items-center translate-y-[85px]" style="transition-delay:180ms;">
          <img src="../assets/FOTO_dua.jpeg" alt="Mariono Silaban" class="object-cover w-[180px] sm:w-[190px] md:w-[180px] lg:w-[220px] xl:w-[240px] h-[260px] sm:h-[270px] md:h-[250px] lg:h-[300px] xl:h-[320px] rounded-full md:rounded-t-[120px] md:rounded-b-none shadow-sm"/>
          <div class="hidden md:flex items-center justify-center mt-3" style="gap:clamp(1rem,2vw,1.8rem);">
            <img src="../assets/nodejs.png" class="w-8 h-8 object-contain transition hover:scale-110" alt="Node.js"/>
            <div class="flex w-9 h-9 items-center justify-center rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 dark:bg-white">
              <img src="../assets/atom.png" alt="React" class="w-6 h-6 object-contain"/>
            </div>
            <img src="../assets/document.png" class="w-8 h-8 object-contain transition hover:scale-110" alt="Web"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  
</style>