<script setup>
  import Navbar from '../navigation/TopNavbar.vue'
  import Footer from '../Footer.vue'
</script>

<template>
  <Navbar :showSidebar="false" />
  <section id="about" class="min-h-screen bg-white dark:bg-[#11131c] py-24">
    <div class="mx-auto w-full px-5 sm:px-6 lg:px-10 xl:px-16">
      <h2 id="about-title" class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white"> About Me </h2>
      <div class="about-title-line mt-5 h-[2px] w-[75%] sm:w-[80%] md:w-[85%] lg:w-[90%] bg-black dark:bg-gray-700"></div>
      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
        <div data-aos="fade-right" class="rounded-3xl border border-gray0 dark:border-gray-800 bg-gray-50 dark:bg-[#1b1e28] p-8 sm:p-10 xl:p-12 ">
          <p class="leading-8 text-gray-600 dark:text-gray-300">
            Saya merupakan mahasiswa Teknik Informatika yang memiliki minat pada bidang Front-End Development.
            Saya memiliki pengalaman mengembangkan aplikasi web menggunakan HTML, CSS, JavaScript, Vue.js, Laravel, dan MySQL.
          </p>
          <p class="mt-8 leading-8 text-gray-600 dark:text-gray-300">
            Saya juga memiliki pengalaman sebagai Web Developer Intern, dengan mengembangkan website company profile berbasis CMS menggunakan Vue.js sebagai frontend dan Laravel sebagai backend.
            Selain itu, saya mengembangkan beberapa project pribadi untuk memahami konsep CRUD, REST API, MVC, serta pengelolaan data menggunakan database.
          </p>
          <p class="mt-8 leading-8 text-gray-600 dark:text-gray-300">
            Saat ini saya terus mengembangkan kemampuan terutama dalam JavaScript dan pengembangan aplikasi web, serta terbiasa belajar, bekerja sama dalam tim, dan menyelesaikan masalah dalam proses pengembangan.
          </p>
        </div>
        <div class="mt-10">
          <div class="flex">
            <div class="flex flex-col items-center mr-5">
              <div class="timeline-dot w-4 h-4 rounded-full bg-blue-600 shrink-0"></div>
              <div class="timeline-line w-[2px] h-56 bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div>
              <span class="text-sm font-semibold text-orange-500"> Tahun 2022 – 2026 </span>
              <div class="mt-2 flex items-center gap-3">
                <img src="/src/assets/logo_unindra.png" alt="Logo Universitas Indraprasta PGRI" class="w-9 h-9 object-contain shrink-0"/>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white"> Universitas Indraprasta PGRI </h4>
              </div>
              <p class="mt-2 text-gray-500 dark:text-gray-400"> Mahasiswa Ilmu Komputer / Teknik Informatika</p>
              <p class="mt-1 text-gray-500 dark:text-gray-400"> Semester 7 </p>
              <span class="inline-block mt-3 rounded-md bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400"> • IPK: 3.75 / 4.00 </span>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-5">
              <div class="w-4 h-4 rounded-full bg-gray-400 shrink-0"></div>
            </div>
            <div>
              <span class="text-sm font-semibold text-orange-500"> Tahun 2019 – 2022 </span>
              <div class="mt-2 flex items-center gap-3">
                <img src="/src/assets/logo_sma.png" alt="Logo SMA Negeri 1 Lintongnihuta" class="w-9 h-9 object-contain shrink-0"/>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white"> SMA Negeri 1 Lintongnihuta </h4>
              </div>
              <p class="mt-2 text-gray-500 dark:text-gray-400"> Jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam) </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-center">
      <RouterLink to="/" class="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:bg-[#1b1e28] dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
        <span class="text-lg">←</span>
        <span>Kembali ke Halaman Utama</span>
      </RouterLink>
    </div>
  </section>
  <Footer />
</template>