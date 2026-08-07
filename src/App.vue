<script setup>
  import Navbar from './components/Navbar.vue'
  import page_satu from './components/Home.vue'
  import page_dua from './components/Skills.vue'
  import page_tiga from './components/About.vue'
  import page_empat from './components/Contact.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <Navbar />
    <page_satu/>
    <page_tiga/>
    <page_dua/>
    <page_empat/>
    <Footer />
  </div>
</template>
