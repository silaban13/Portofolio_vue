<script setup>
</script>
<template> 
  <section id="about" class="fullpage-section flex flex-col bg-white dark:bg-[#11131c] pt-[110px] md:pt-[100px] lg:pt-[90px]">
    <div class="mx-auto w-full px-6 sm:px-10 md:px-24 lg:px-28 xl:px-36">
      <h2 class="text-center md:text-left text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white"> Tentang Saya </h2>
      <div class="mt-5 mx-auto md:mx-0 h-[2px] w-[82%] sm:w-[87%] md:w-[92%] lg:w-[97%] bg-black dark:bg-gray-700"></div>
    </div>
    <div class="mx-auto w-full flex-1 flex items-center pt-8 sm:pt-10 md:pt-0 px-6 sm:px-10 md:px-24 lg:px-28 xl:px-36">
      <div class="flex w-full flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0 lg:gap-[clamp(3rem,6vw,6rem)]">
        <div class="w-full md:w-[58%] lg:w-[55%] xl:w-[58%] flex flex-col items-center md:items-start text-center md:text-left">
          <p data-scroll-animation class="scroll-left scroll-stagger-4 text-gray-500 dark:text-gray-400 leading-8 max-w-none md:max-w-none lg:max-w-xl text-center md:text-left" style="margin-top:clamp(1.8rem,2.8vw,2.3rem); font-size:clamp(.75rem,1vw,.95rem);">
            Pengantar singkat tentang perjalanan saya sebagai seorang
            Front-End Developer yang berfokus pada pengembangan website modern,
            responsif, dan interaktif.
          </p>
          <RouterLink to="/about-explanation"  class="inline-flex items-center rounded-full border border-gray-300 bg-white font-semibold text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-gray-900" style="margin-top:clamp(1.8rem,3vw,2.5rem); gap:clamp(0.5rem,0.8vw,0.75rem); padding-top:clamp(0.35rem,0.5vw,0.375rem); padding-bottom:clamp(0.35rem,0.5vw,0.375rem); padding-left:clamp(1rem,1.8vw,1.5rem); padding-right:clamp(0.35rem,0.5vw,0.375rem); font-size:clamp(0.75rem,1.1vw,0.875rem);">
            <span>Baca Selengkapnya</span>
            <span class="flex items-center justify-center rounded-full bg-gray-600 text-white" style="width:clamp(2rem,3.5vw,2.25rem); height:clamp(2rem,3.5vw,2.25rem);"> → </span>
          </RouterLink>
        </div>
        <div class="w-full md:w-[42%] lg:w-[45%] xl:w-[42%] flex justify-center items-center">
          <img src="/src/assets/FOTO_tiga.jpeg" alt="Mariono Silaban" class="object-cover w-[195px] sm:w-[200px] md:w-[180px] lg:w-[220px] xl:w-[240px] h-[195px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[320px] shadow-sm" />
        </div>
      </div>
    </div>
  </section>
</template>

