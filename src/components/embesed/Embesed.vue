<template>
  <div class="max-w-7xl mx-auto px-4 py-16 bg-white">
    <!-- Título ajustado conforme seu pedido -->
    <div class="flex flex-col items-center mb-16 relative">
  <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">Nossas Referências</span>
  <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
    <span class="relative">
      Marcas que Utilizamos
      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#183614] mt-3"></span>
    </span>
  </h2>
  <p class="mt-6 text-gray-600 max-w-3xl text-center">
    Trabalhamos com marcas reconhecidas pela excelência e durabilidade. Cada projeto é construído com materiais e tecnologias que garantem o melhor resultado.
    De tintas premium a ferramentas profissionais, cada detalhe reflete o nosso compromisso com a qualidade.
  </p>
</div>

    <!-- Carrossel com a estrutura original de imagens -->
    <div class="relative overflow-hidden py-6">
      <div class="flex animate-marquee space-x-16">
        <img
          v-for="(brand, index) in brands"
          :key="'first-' + index"
          :src="brand.image"
          :alt="brand.name"
          class="brand-logo flex-shrink-0"
          loading="lazy"
        />
        <!-- Duplicação para efeito contínuo -->
        <img
          v-for="(brand, index) in brands"
          :key="'first-duplicate-' + index"
          :src="brand.image"
          :alt="brand.name"
          class="brand-logo flex-shrink-0"
          loading="lazy"
        />
      </div>
    </div>
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
/* Animação principal mantida */
.animate-marquee {
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Estilização das marcas - versão mais limpa */
.brand-logo {
  width: 150px;
  height: 80px;
  object-fit: contain;
  filter: grayscale(30%) opacity(90%);
  transition: all 0.3s ease;
}

.brand-logo:hover {
  filter: grayscale(0%) opacity(100%);
  transform: scale(1.05);
}

/* Responsividade */
@media (max-width: 768px) {
  .brand-logo {
    width: 120px;
    height: 60px;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>