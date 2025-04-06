<template>
  <div class="relative w-full h-screen max-h-[80vh] overflow-hidden">
    <!-- Carrossel de imagens de fundo -->
    <div class="relative w-full h-full">
      <Transition name="fade" mode="out-in">
        <div 
          v-if="images.length > 0"
          :key="currentImage"
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          :style="{ backgroundImage: `url(${images[currentImage]})` }"
        ></div>
      </Transition>

      <!-- Overlay com gradiente preto de baixo pra cima -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
    </div>

    <!-- Conteúdo do banner -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div class="container mx-auto px-6 md:px-12 lg:px-24 flex justify-start">
        <Transition name="slide-up">
          <div v-if="showContent" class="text-left space-y-6 max-w-4xl">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              <span class="block mb-2">Qualidade e Durabilidade</span>
              <span class="text-gold-400">em Cada Detalhe da Madeira</span>
            </h1>

            <p class="text-xl md:text-2xl text-white font-medium italic opacity-90">
              Arte Nobre Service - Conectando Tradição e Inovação
            </p>

            <div class="pt-6">
              <button class="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Conheça Nossos Produtos
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Indicadores do carrossel -->
    <div class="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        @click="setCurrentImage(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentImage === index ? 'bg-gold-500 w-6' : 'bg-white bg-opacity-50'"
        aria-label="Ir para slide"
      ></button>
    </div>

    <!-- Borda decorativa -->
    <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Importações estáticas das imagens (ajuste os caminhos conforme sua estrutura)
import banner1 from '@/assets/banner/banner1.png';
import banner2 from '@/assets/banner/banner2.png';
import banner3 from '@/assets/banner/banner3.png';
import banner4 from '@/assets/banner/banner4.png';

export default {
  name: 'AdvancedBanner',
  setup() {
    const images = ref([banner1, banner2, banner3, banner4]);
    const currentImage = ref(0);
    const showContent = ref(false);
    let interval = null;

    const nextImage = () => {
      currentImage.value = (currentImage.value + 1) % images.value.length;
    };

    const setCurrentImage = (index) => {
      currentImage.value = index;
      resetInterval();
    };

    const resetInterval = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(nextImage, 10000);
    };

    onMounted(() => {
      showContent.value = true;
      resetInterval();
    });

    onBeforeUnmount(() => {
      if (interval) clearInterval(interval);
    });

    return {
      images,
      currentImage,
      showContent,
      setCurrentImage,
    };
  },
};
</script>

<style scoped>
/* Efeitos de transição */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 1s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Cores personalizadas */
.text-gold-400 {
  color: #d4af37;
}
.bg-gold-500 {
  background-color: #d4af37;
}
.bg-gold-600 {
  background-color: #b8972e;
}
</style>