


<script setup>
import Navbar from '@/components/Navbar.vue';
import BannerCatalogo from '@/components/BannerCatalogo.vue';
import Catalogo from '@/components/Catalogo.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <header>
    <Navbar />
    <BannerCatalogo />
    <Catalogo />
    <Footer />
  </header>

  <main>
    <router-view />
  </main>
</template>
