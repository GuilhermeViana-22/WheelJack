


<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Título principal com sublinhado dourado -->
    <div class="flex flex-col items-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-black mb-2">Nossos Produtos</h2>
      <div class="h-1 w-full max-w-md bg-amber-500"></div>
    </div>

    <!-- Grid de produtos -->
    <div class="space-y-6">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="bg-white rounded-md p-4 md:p-6 shadow-md flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start"
      >
        <!-- Imagem do produto -->
        <div class="shrink-0 relative w-[200px] h-[150px]">
          <img
            :src="product.image"
            :alt="product.title"
            class="rounded-md object-cover w-full h-full"
          />
        </div>
        
        <!-- Detalhes do produto -->
        <div class="flex-1 space-y-2 text-center md:text-left">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-gray-700">{{ product.description }}</p>
          <p class="text-gray-600 text-sm">{{ product.dimensions }}</p>
        </div>
        
        <!-- Botão de abrir o modal -->
        <div class="shrink-0 self-center md:self-end mt-3 md:mt-0">
          <button 
            @click="openModal(product)" 
            class="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-4 py-2 rounded transition-colors"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 class="text-xl font-semibold">{{ selectedProduct.title }}</h2>
        <p>{{ selectedProduct.description }}</p>
        <p>{{ selectedProduct.dimensions }}</p>
        
        <!-- Formulário para nome e e-mail -->
        <div class="mt-4">
          <input
            v-model="userName"
            type="text"
            placeholder="Seu Nome"
            class="w-full p-2 border rounded-md mb-2"
            :class="{'border-red-500': nameError}"
          />
          <input
            v-model="userEmail"
            type="email"
            placeholder="Seu E-mail"
            class="w-full p-2 border rounded-md mb-2"
            :class="{'border-red-500': emailError}"
          />
          <div v-if="nameError" class="text-red-500 text-sm">Nome é obrigatório.</div>
          <div v-if="emailError" class="text-red-500 text-sm">E-mail é obrigatório.</div>
        </div>
        
        <!-- Botões -->
        <div class="flex justify-between mt-4">
          <button @click="closeModal" class="bg-gray-500 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded">
            Fechar
          </button>
          <button @click="sendToWhatsApp" class="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-4 py-2 rounded">
            Enviar para WhatsApp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Importando imagens locais da pasta assets
import img1 from '@/assets/arquivos/1.png';
import img2 from '@/assets/arquivos/6.png';
import img3 from '@/assets/arquivos/3.png';

const createProduct = (id, title, description, dimensions, image) => ({
  id,
  title,
  description,
  dimensions,
  image,
  imageLoaded: false,
  imageError: false
});

// Lista de produtos com imagens importadas
const products = ref([
  createProduct(1, "Assoalho TG4 e Assoalho Tradicional", "Piso de tábuas com comprimentos variados e encaixe macho e fêmea", "Taco de Tauari: 7cm x 21cm", img1),
  createProduct(2, "Assoalho TG4 e Assoalho Tradicional", "Piso de tábuas com comprimentos variados e encaixe macho e fêmea", "Taco de Tauari: 7cm x 21cm", img2),
  createProduct(3, "Assoalho TG4 e Assoalho Tradicional", "Piso de tábuas com comprimentos variados e encaixe macho e fêmea", "Taco de Tauari: 7cm x 21cm", img3),
]);

// Dados do modal
const modalOpen = ref(false);
const selectedProduct = ref(null);
const userName = ref('');
const userEmail = ref('');
const nameError = ref(false);
const emailError = ref(false);

// Abrir o modal
const openModal = (product) => {
  selectedProduct.value = product;
  modalOpen.value = true;
  userName.value = '';
  userEmail.value = '';
  nameError.value = false;
  emailError.value = false;
};

// Fechar o modal
const closeModal = () => {
  modalOpen.value = false;
};

// Validar campos
const validateFields = () => {
  nameError.value = !userName.value.trim();
  emailError.value = !userEmail.value.trim();
  return !(nameError.value || emailError.value);
};

// Gerar link para WhatsApp
const generateWhatsAppLink = () => {
  if (!validateFields()) return;

  const phone = "5511954509504"; // Número com DDD (Brasil = 55)
  const message = `👋 Olá, sou ${userName.value}, gostaria de saber mais sobre o produto: ${selectedProduct.value.title}.\n\nDescrição: ${selectedProduct.value.description}\nDimensões: ${selectedProduct.value.dimensions}\nEmail: ${userEmail.value}\n\n👷‍♂️💬 Arte Nobre Service - Atendimento ao cliente`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// Enviar para o WhatsApp
const sendToWhatsApp = () => {
  if (validateFields()) {
    const link = generateWhatsAppLink();
    window.location.href = link;
  }
};
</script>

<style scoped>
/* Estilo para o fundo do modal */
.bg-black.bg-opacity-50 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}
</style>
