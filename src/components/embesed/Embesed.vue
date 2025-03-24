<template>
    <div class="max-w-7xl mx-auto px-4 py-16">
      <section class="carousel-container">
        <div class="overflow-hidden">
          <div class="flex animate-marquee space-x-10">
            <img
              v-for="(brand, index) in brands"
              :key="'left-' + index"
              :src="brand.image"
              :alt="brand.name"
              class="brand-logo"
            />
            <img
              v-for="(brand, index) in brands"
              :key="'right-' + index"
              :src="brand.image"
              :alt="brand.name"
              class="brand-logo"
            />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brands: [
          { name: "Marca 1", image: new URL('@/assets/marcas/marca1.png', import.meta.url).href },
          { name: "Marca 2", image: new URL('@/assets/marcas/marca2.png', import.meta.url).href },
          { name: "Marca 3", image: new URL('@/assets/marcas/marca3.png', import.meta.url).href },
          { name: "Marca 4", image: new URL('@/assets/marcas/marca4.jpg', import.meta.url).href },
          { name: "Marca 5", image: new URL('@/assets/marcas/marca5.png', import.meta.url).href },
          { name: "Marca 6", image: new URL('@/assets/marcas/marca6.png', import.meta.url).href },
      
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: white;
  }
  
  .brand-logo {
    width: 150px;
    height: 100px;
    object-fit: contain;
  }
  
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  </style>
  