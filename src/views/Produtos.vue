


<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Catalogo from '@/components/Catalogo.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <header>
    <Navbar />
    <Banner />
    <Catalogo />
    <Footer />
  </header>

  <main>
    <router-view />
  </main>
</template>
