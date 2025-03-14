<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Privacidade from '@/components/Privacidade.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <header>
    <Navbar />
    <Banner />
    <Privacidade />
    <Footer />
  </header>

  <main>
    <router-view />
  </main>
</template>
