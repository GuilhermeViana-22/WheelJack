<template>
  <div class="relative w-full h-screen max-h-[80vh] overflow-hidden bg-black">
    <div class="relative w-full h-full">
      <Transition name="fade" mode="out-in">
        <div v-if="images.length > 0" :key="currentImage"
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
          :style="{ backgroundImage: `url(${images[currentImage]})` }"></div>
      </Transition>

      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    </div>

    <div class="absolute inset-0 flex items-center justify-center z-10 pt-[20px] md:pt-0 mt-[70px] md:mt-0">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6 flex justify-start">
        <Transition name="slide-up">
          <div v-if="showContent" class="text-left space-y-6 mt-[-80px] md:mt-0 max-w-4xl sm:max-w-3xl">
            <h1 class="text-5xl text-center md:text-left md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-snug">
              <span class="block mb-2 text-golden-effect">Performance e Potência</span>
              <span class="text-red-500 rounded-lg">Acelerando com Estilo</span>
            </h1>
            <p class="text-base text-center md:text-left sm:text-lg md:text-xl text-white font-medium italic opacity-90">
              Drive Beyond Limits - Superando Expectativas
            </p>
          </div>
        </Transition>
      </div>
    </div>

    <div class="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2 ">
      <button v-for="(image, index) in images" :key="index" @click="setCurrentImage(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentImage === index ? 'bg-red-500 w-6' : 'bg-white bg-opacity-50'"
        aria-label="Ir para slide"></button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import car1 from '@/assets/banner/banner1.png';
import car2 from '@/assets/banner/banner2.png';
import car3 from '@/assets/banner/banner3.png';
import car4 from '@/assets/banner/banner4.png';

export default {
  name: 'AutomotiveBanner',
  setup() {
    const images = ref([car1, car2, car3, car4]);
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
.text-golden-effect{
   font-weight: bolder;
   background-image: linear-gradient(
    to right,
    #ffdf7e 0%,
    #d4af37 20%,
    #ffd700 40%,
    #ffdf7e 60%,
    #d4af37 80%,
    #ffd700 100%
   );
   color:transparent;
   -webkit-background-clip:text;
   background-clip:text;
}
</style>
