<template>
  <div>
    <!-- Banner principal -->
    <div 
      class="relative w-full h-96 flex items-center justify-center text-center px-4"
      :style="{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
    >
      <!-- Sobreposição escura para melhorar a legibilidade do texto -->
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <!-- Texto impactante -->
      <div class="relative z-10 text-white max-w-3xl">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Qualidade e Durabilidade <br>  
          em Cada Detalhe da Madeira
        </h1>
      </div>

      <!-- Borda inferior dourada -->
      <div class="absolute bottom-0 left-0 w-full h-4 border-b-4 border-gold-gradient"></div>
    </div>
  </div>
</template>

<script>
import banner from '@/assets/arquivos/banner.png';

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
