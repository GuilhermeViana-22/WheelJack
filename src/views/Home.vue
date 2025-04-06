<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Intrudocao from '@/components/Intrudocao.vue';
import Fundamentos from '@/components/Fundamentos.vue';
// import Servicos from '@/components/Servicos.vue';
import Produtos from '@/components/Produto.vue';
import Footer from '@/components/Footer.vue';
import Informacoes from '@/components/Informacoes.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import Embesed from '@/components/embesed/Embesed.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import Servicos2 from '@/components/Servicos2.vue';
</script>
<template>
  <div class="relative">
 
     <Navbar />
    <Banner />
    
    <div class="relative z-10">
      <Intrudocao />
   
      <Fundamentos />
      <!-- <Servicos /> -->
      <Servicos2 />
      <Produtos />
      <Embesed />
      <Informacoes />
    </div>
    
    <WhatsAppButton />
    <Footer />
  </div>
</template>
