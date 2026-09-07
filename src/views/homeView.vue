<script setup>
    import Navbar from '../components/navigation/TopNavbar.vue'
    import page_satu from '../components/Home.vue'
    import page_dua from '../components/Skills.vue'
    import About_root from '../components/about/About_root.vue'
    import page_empat from '../components/Contact.vue'
    import Footer from '../components/Footer.vue'
    import whatsappButton from '../components/WhatsAppButton.vue'
    import { useFullPageScroll } from '../composables/useFullPageScroll'

    useFullPageScroll()
</script>

<template>
  <div class="overflow-x-hidden">
    <Navbar />

    <main class="fullpage-container">
      <page_satu />
      <About_root />
      <page_dua />
      <page_empat />
    </main>

    <Footer />
  </div>

  <whatsappButton />
</template>