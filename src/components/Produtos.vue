<template>
  <div class="max-w-4xl mx-auto py-12 px-4">
    <!-- Heading with gold underline -->
     <div class="flex flex-col items-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-2">Nossos Produtos</h2>
        <div class="h-1 w-full max-w-md bg-amber-500"></div>
      </div>

    <!-- Product cards grid with responsive spacing -->
    <div class="space-y-6">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="bg-white rounded-md p-4 md:p-6 shadow-md flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start"
      >
        <!-- Product image with skeleton loading state -->
        <div class="shrink-0 relative w-[200px] h-[150px]">
          <!-- Skeleton loader - always show until image is loaded -->
          <div 
            v-show="!product.imageLoaded" 
            class="absolute inset-0 rounded-md bg-gray-200 animate-pulse"
          >
            <div class="h-full w-full flex items-center justify-center">
              <svg 
                v-if="product.imageError" 
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
          
          <!-- Actual image - hidden until loaded -->
          <img
            :src="product.image"
            :alt="product.title"
            class="rounded-md object-cover w-full h-full transition-opacity duration-300"
            :class="{ 'opacity-0': !product.imageLoaded, 'opacity-100': product.imageLoaded }"
            @load="handleImageLoaded(product.id)"
            @error="handleImageError(product.id)"
          />
        </div>
        
        <!-- Product details -->
        <div class="flex-1 space-y-2 text-center md:text-left">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-gray-700">{{ product.description }}</p>
          <p class="text-gray-600 text-sm">{{ product.dimensions }}</p>
        </div>
        
        <!-- Request quote button -->
        <div class="shrink-0 self-center md:self-end mt-3 md:mt-0">
          <button class="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-4 py-2 rounded transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>

    <!-- See models button at the bottom -->
    <div class="flex justify-center mt-10">
      <button class="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2 rounded transition-colors">
        Veja os modelos
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Função para criar um produto com estado de carregamento padrão
const createProduct = (id, title, description, dimensions, image) => {
  return {
    id,
    title,
    description,
    dimensions,
    image,
    imageLoaded: false,
    imageError: false
  };
};

// Sample product data - all start with imageLoaded: false
const products = ref([
  createProduct(
    1,
    "Assoalho TG4 e Assoalho Tradicional",
    "Piso de tábuas com comprimentos variados e encaixe macho e fêmea",
    "Taco de Tauari: 7cm x 21cm",
    "/placeholder.svg?height=150&width=200"
  ),
  createProduct(
    2,
    "Assoalho TG4 e Assoalho Tradicional",
    "Piso de tábuas com comprimentos variados e encaixe macho e fêmea",
    "Taco de Tauari: 7cm x 21cm",
    "/placeholder.svg?height=150&width=200"
  ),
  createProduct(
    3,
    "Assoalho TG4 e Assoalho Tradicional",
    "Piso de tábuas com comprimentos variados e encaixe macho e fêmea",
    "Taco de Tauari: 7cm x 21cm",
     "/placeholder.svg?height=150&width=200"
  ),
]);

// Handle successful image load
const handleImageLoaded = (productId) => {
  const product = products.value.find(p => p.id === productId);
  if (product) {
    product.imageLoaded = true;
    product.imageError = false;
  }
};

// Handle image loading error
const handleImageError = (productId) => {
  const product = products.value.find(p => p.id === productId);
  if (product) {
    product.imageError = true;
    // We keep imageLoaded as false so the skeleton remains visible
  }
};

// Para demonstração - forçar alguns erros de carregamento
onMounted(() => {
  // Simular erro na segunda imagem após 2 segundos
  setTimeout(() => {
    if (products.value[1]) {
      // Forçar um erro na segunda imagem alterando a URL para uma inválida
      products.value[1].image = "invalid-url.jpg";
    }
  }, 2000);
  
  // Para demonstração, podemos também forçar o carregamento da terceira imagem
  // para mostrar como funciona quando a imagem carrega normalmente
  setTimeout(() => {
    if (products.value[2]) {
      handleImageLoaded(products.value[2].id);
    }
  }, 3000);
});
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