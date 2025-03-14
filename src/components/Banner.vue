<template>
  <div>
    <!-- Banner principal -->
    <div 
      class="relative w-full h-[60vh] flex items-center justify-center text-center px-4"
      :style="{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
    >
      <!-- Texto impactante e slogan -->
      <div class="relative z-10 text-white max-w-3xl space-y-4">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Qualidade e Durabilidade <br>  
          em Cada Detalhe da Madeira
        </h1>
        <!-- Slogan pequeno -->
        <p class="text-lg sm:text-xl font-medium italic">Arte Nobre Service - Conectando Tradição e Inovação</p>
      </div>

      <!-- Borda inferior dourada -->
      <div class="absolute bottom-0 left-0 w-full h-4 border-b-8 border-gold-gradient"></div>
    </div>
  </div>
</template>

<script>
import banner from '@/assets/arquivos/assoalho.png';

export default {
  name: 'BannerQualidadeDurabilidade',
  data() {
    return {
      banner,
    };
  }
};
</script>

<style scoped>
/* Efeito de borda dourada */
.border-gold-gradient {
  border-image: linear-gradient(90deg, #d4af37, #f1c27d, #d4af37);
  border-image-slice: 1;
}
</style>
