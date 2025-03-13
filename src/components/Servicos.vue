<template>
  <div class="max-w-4xl mx-auto py-12 px-4">
    <!-- Heading com linha dourada -->
    <div class="flex flex-col items-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-black mb-2">Nossos Serviços</h2>
      <div class="h-1 w-full max-w-md bg-amber-500"></div>
    </div>

    <!-- Grid de imagens com Skeleton Loader -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="bg-white rounded-md overflow-hidden shadow-md"
      >
        <!-- Skeleton enquanto a imagem carrega -->
        <div v-if="!image.loaded && !image.error" class="relative w-full h-60 bg-gray-200 animate-pulse">
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

        <!-- Imagem carregada -->
        <img
          v-show="image.loaded && !image.error"
          :src="image.src"
          :alt="'Imagem do Serviço ' + (index + 1)"
          class="w-full h-60 object-cover transition-opacity duration-300"
          :class="{ 'opacity-0': !image.loaded, 'opacity-100': image.loaded }"
          @load="handleImageLoaded(index)"
          @error="handleImageError(index)"
        />

        <!-- Fallback se a imagem falhar -->
        <div v-if="image.error" class="relative w-full h-60 bg-gray-200 animate-pulse">
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

// Importação direta das imagens
import img1 from '../assets/arquivos/1.png';
import img2 from '../assets/arquivos/2.png';
import img3 from '../assets/arquivos/3.png';
import img4 from '../assets/arquivos/4.png';
import img5 from '../assets/arquivos/5.png';
import img6 from '../assets/arquivos/6.png';

// Lista das imagens com status de carregamento
const images = ref([
  { src: img1, loaded: false, error: false },
  { src: img2, loaded: false, error: false },
  { src: img3, loaded: false, error: false },
  { src: img4, loaded: false, error: false },
  { src: img5, loaded: false, error: false },
  { src: img6, loaded: false, error: false }
]);

// Quando a imagem carregar, marca como carregada
const handleImageLoaded = (index) => {
  images.value[index].loaded = true;
  images.value[index].error = false;
};

// Se a imagem falhar, exibe o skeleton
const handleImageError = (index) => {
  images.value[index].error = true;
  images.value[index].loaded = false;
};
</script>

<style>
/* Animação personalizada para skeleton loader */
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
