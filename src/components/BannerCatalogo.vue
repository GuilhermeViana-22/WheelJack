<template>
  <div class="relative w-full h-screen max-h-[80vh] overflow-hidden bg-black">
    <!-- Carrossel de imagens de fundo -->
    <div class="relative w-full h-full">
      <Transition name="fade" mode="out-in">
        <div v-if="images.length > 0" :key="currentImage"
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          :style="{ backgroundImage: `url(${images[currentImage]})` }"></div>
      </Transition>

      <!-- Overlay com gradiente preto mais suave -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    </div>

    <!-- Conteúdo do banner -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-start">
        <Transition name="slide-up">
          <div v-if="showContent" class="text-left space-y-6 max-w-4xl">
            <h1 class="text-5xl text-center md:text-left sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-snug">
              <span class="block mb-2 text-golden-effect">Catálogo de produtos</span>
              <span class="text-amber-300 rounded-lg text-golden-effect">Conheça nossos produtos</span>
            </h1>



          </div>
        </Transition>
      </div>
    </div>

    <!-- Indicadores do carrossel -->
    <div class="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
      <button v-for="(image, index) in images" :key="index" @click="setCurrentImage(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentImage === index ? 'bg-amber-500 w-6' : 'bg-white bg-opacity-50'"
        aria-label="Ir para slide"></button>
    </div>

    <!-- Borda decorativa -->
    <div class="gold-polish-line">aaaaaaaaaa</div>
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
.gold-polish-line {
  height: 40px;
  width: 100%;
  background: linear-gradient(to right,
      rgba(255, 255, 255, 0) 0%,
      #f5e78d 15%,
      #fff9d6 25%,
      #fff 50%,
      #fff9d6 75%,
      #f5e78d 85%,
      rgba(255, 255, 255, 0) 100%);
  border-radius: 9999px;
  opacity: 1;
}

/* Efeitos de transição suavizados */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Garante que o fundo nunca fique cinza */
.bg-black {
  background-color: #000;
}

.text-golden-effect{
   font-weight: bolder;
   background-image: linear-gradient(
	to right,
	#f6f2c0 0,
       	#cb9b51 22%, 
	#f6e27a 45%,
	#f6f2c0 50%,
	#f6e27a 55%,
	#cb9b51 78%,
	#f6e27a 100%
	);
   color:transparent;
   -webkit-background-clip:text;
   background-clip:text;
}
</style>