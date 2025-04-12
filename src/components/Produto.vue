<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Cabeçalho Elegante -->
    <div class="flex flex-col items-center mb-16 relative">
      <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">Nossas Criações</span>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        <span class="relative">
          Produtos em Madeira Nobre
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#183614] mt-3"></span>
        </span>
      </h2>
      <p class="mt-6 text-gray-600 max-w-3xl text-center">
        Peças artesanais que combinam tradição e inovação para ambientes sofisticados
      </p>
    </div>

    <!-- Grid de Produtos Moderno -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <!-- Container da Imagem com Efeito -->
        <div class="relative h-64 overflow-hidden">
          <!-- Imagem Principal -->
          <img
            :src="product.image"
            :alt="product.title"
            :title="product.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          <!-- Overlay de Detalhes -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div class="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white text-sm">{{ product.dimensions }}</p>
            </div>
          </div>
        </div>

        <!-- Detalhes do Produto -->
        <div class="p-6 space-y-3">
          <h3 class="text-xl font-bold text-gray-900">{{ product.title }}</h3>
          <div class="min-h-[100px] max-h-[100px] overflow-y-auto">
            <p class="text-gray-600">{{ product.description }}</p>
          </div>

          <!-- Botão de Ação -->
          <button 
            @click="openModal(product)"
            class="mt-4 w-full bg-[#183614] hover:bg-[#6e451d] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Elegante -->
    <transition name="fade">
      <div v-if="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
        
        <div class="relative bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div class="h-48 bg-gray-100 overflow-hidden">
            <img 
              :src="selectedProduct?.image" 
              :alt="selectedProduct?.title" 
              :title="selectedProduct?.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-6 space-y-4">
            <h3 class="text-2xl font-bold text-gray-900">{{ selectedProduct?.title }}</h3>
            <p class="text-gray-700">{{ selectedProduct?.description }}</p>
            <p class="text-sm text-gray-500">{{ selectedProduct?.dimensions }}</p>

            <div class="mt-6 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                <input
                  v-model="userName"
                  type="text"
                  placeholder="Nome completo"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6e451d] focus:border-[#6e451d] outline-none transition"
                  :class="{'border-red-500': nameError}"
                />
                <p v-if="nameError" class="mt-1 text-sm text-red-600">Por favor, insira seu nome</p>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Seu E-mail</label>
                <input
                  v-model="userEmail"
                  type="email"
                  placeholder="seu@email.com"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6e451d] focus:border-[#6e451d] outline-none transition"
                  :class="{'border-red-500': emailError}"
                />
                <p v-if="emailError" class="mt-1 text-sm text-red-600">Por favor, insira um e-mail válido</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                @click="closeModal"
                class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Voltar
              </button>
              <button 
                @click="sendToWhatsApp"
                class="flex-1 bg-[#183614] hover:bg-[#6e451d] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Enviar para WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '../assets/catalogo/espacos/25.png'
import img2 from '@/assets/catalogo/paineis/6.png';
import img3 from '@/assets/catalogo/tacos/3.jpeg';    
   

const products = ref([
  {
    id: 1,
    title: 'Revestimentos',
    description: "Elevamos o padrão de espaços como spas, ofurôs e áreas de relaxamento com acabamentos em madeira nobre, trazendo mais conforto, estilo e funcionalidade ao seu ambiente. Cada detalhe é pensado para transformar o seu cotidiano em uma experiência de bem-estar.",
    dimensions: "",
    image: img1
  },
  {
    id: 2,
    title: "Painel Ripado",
    description: "Com linhas contínuas e acabamento impecável, os painéis ripados da Arte Nobre Service elevam a estética e o aconchego dos ambientes com um toque moderno e sofisticado.",
    dimensions: "",
    image: img2
  },
  {
    id: 3,
    title: "Tacos",
    description: "Cada peça é escolhida e montada manualmente, garantindo um padrão único de qualidade. Ideal para quem busca exclusividade e a beleza dos detalhes em pisos que contam histórias.",
    dimensions: "",
    image: img3
  }
]);

const modalOpen = ref(false);
const selectedProduct = ref(null);
const userName = ref('');
const userEmail = ref('');
const nameError = ref(false);
const emailError = ref(false);

const openModal = (product) => {
  selectedProduct.value = product;
  modalOpen.value = true;
  userName.value = '';
  userEmail.value = '';
  nameError.value = false;
  emailError.value = false;
};

const closeModal = () => {
  modalOpen.value = false;
};

const validateForm = () => {
  nameError.value = !userName.value.trim();
  emailError.value = !userEmail.value.trim() || !/^\S+@\S+\.\S+$/.test(userEmail.value);
  return !nameError.value && !emailError.value;
};

const sendToWhatsApp = () => {
  if (!validateForm()) return;

  const phone = "5511970419195";
  const message = `👋 Olá, sou ${userName.value}, gostaria de saber mais sobre:\n\n*${selectedProduct.value.title}*\n${selectedProduct.value.description}\nDimensões: ${selectedProduct.value.dimensions}\n\nE-mail: ${userEmail.value}\n\n👷‍♂️💬 Arte Nobre Service`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
  closeModal();
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.group:hover img {
  transform: scale(1.05);
}
</style>
