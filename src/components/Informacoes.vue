<template>
    <div class="max-w-4xl mx-auto py-12 px-4">
      <!-- Heading with gold underline -->
      <div class="flex flex-col items-left mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-2">Informações</h2>
        <hr>
      </div>
  
      <!-- Grid de imagens com Skeleton Loader -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="bg-white rounded-md overflow-hidden shadow-md"
        >
          <!-- Skeleton loader - sempre visível até a imagem carregar -->
          <div v-show="!image.loaded && !image.error" class="relative w-full h-60 bg-gray-200 animate-pulse">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                class="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
  
          <!-- Imagem real - escondida até carregar -->
          <img
            v-show="image.loaded && !image.error"
            :src="image.src"
            :alt="'Imagem do Serviço ' + (index + 1)"
            class="w-full h-60 object-cover transition-opacity duration-300"
            :class="{ 'opacity-0': !image.loaded, 'opacity-100': image.loaded }"
            @load="handleImageLoaded(index)"
            @error="handleImageError(index)"
          />
  
          <!-- Fallback para o skeleton caso a imagem não seja carregada -->
          <div v-show="image.error" class="relative w-full h-60 bg-gray-200 animate-pulse">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                class="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Função para criar o estado de cada imagem
  const createImage = (src) => ({
    src,
    loaded: false,
    error: false
  });
  
  // Definir as imagens com placeholders para carregamento
  const images = ref([
    createImage('https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Imagem+1'),
    createImage('https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Imagem+2'),
    createImage('https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Imagem+3'),
  ]);
  
  // Função chamada quando a imagem é carregada com sucesso
  const handleImageLoaded = (index) => {
    images.value[index].loaded = true;
    images.value[index].error = false;
  };
  
  // Função chamada em caso de erro no carregamento da imagem
  const handleImageError = (index) => {
    images.value[index].error = true;
    images.value[index].loaded = false; // Isso ajuda a manter o skeleton visível em caso de erro
  };
  </script>
  
  <style>
  /* Animação personalizada para o skeleton loading */
  @keyframes skeletonPulse {
    0% {
      background-color: rgba(226, 232, 240, 0.6);
    }
    50% {
      background-color: rgba(226, 232, 240, 0.8);
    }
    100% {
      background-color: rgba(226, 232, 240, 0.6);
    }
  }
  
  .animate-pulse {
    animation: skeletonPulse 1.5s ease-in-out infinite;
  }
  </style>
  