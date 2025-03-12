<template>
    <div class="relative w-full h-96 bg-cover bg-center" style="background-image: url('https://via.placeholder.com/1200x500');">
      <!-- Sobreposição escura para melhorar a legibilidade do texto -->
      <div class="absolute inset-0 bg-black opacity-40"></div>
      
      <!-- Conteúdo do banner -->
      <div class="absolute left-6 top-1/2 transform -translate-y-1/2">
        <div class="text-white text-3xl sm:text-4xl md:text-5xl font-bold space-y-2">
          <p class="leading-tight">Qualidade</p>
          <p class="leading-tight">e</p>
          <p class="leading-tight">Durabilidade</p>
          <p class="leading-tight">em</p>
          <p class="leading-tight">Madeira</p>
        </div>
      </div>
      
      <!-- Borda inferior dourada -->
      <div class="absolute bottom-0 left-0 w-full h-4 border-b-4 border-gold-gradient"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BannerQualidadeDurabilidade'
  };
  </script>
  
  <style scoped>
  /* Efeito de borda dourada */
  .border-gold-gradient {
    border-image: linear-gradient(90deg, #d4af37, #f1c27d, #d4af37); /* Gradiente dourado */
    border-image-slice: 1;
  }
  </style>
  