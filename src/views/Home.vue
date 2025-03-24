<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import Intrudocao from '@/components/Intrudocao.vue';
import Fundamentos from '@/components/Fundamentos.vue';
import Servicos from '@/components/Servicos.vue';
import Produtos from '@/components/Produto.vue';
import Footer from '@/components/Footer.vue';
import Informacoes from '@/components/Informacoes.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import Embesed from '@/components/embesed/Embesed.vue';
</script>

<template>
  <header>
    <Navbar />
    
    <Banner />
    <Intrudocao />
    <Fundamentos />
    <Servicos />
    <Produtos />
    <Embesed />
    <Informacoes />
    <WhatsAppButton />
    <Footer />
  </header>

  <main>
    <router-view />
  </main>
</template>
