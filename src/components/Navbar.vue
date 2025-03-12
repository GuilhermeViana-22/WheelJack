<template>
    <nav class="bg-black text-white py-4 px-6 shadow-lg border-b-8 border-gold-gradient">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="text-xl font-bold text-gold">Arte Nobre Service</div>
  
        <!-- Menu Desktop -->
        <ul class="hidden md:flex space-x-6">
          <li v-for="item in menuItems" :key="item.text">
            <a :href="item.link" class="hover:text-gold transition">{{ item.text }}</a>
          </li>
        </ul>
  
        <!-- Botão Contato (Aparece no Desktop) -->
        <a href="#" class="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Contato
        </a>
  
        <!-- Botão Mobile -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
          <span :class="{ 'rotate-90': isMenuOpen }" class="transition-transform">☰</span>
        </button>
      </div>
  
      <!-- Dropdown Mobile -->
      <div v-show="isMenuOpen" class="md:hidden bg-black py-2">
        <ul class="space-y-2 text-center">
          <li v-for="item in menuItems" :key="item.text">
            <a :href="item.link" class="block py-2 hover:text-gold transition">{{ item.text }}</a>
          </li>
          <!-- Botão Contato (Aparece SOMENTE no Mobile) -->
          <li>
            <a href="#" class="block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mx-4">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        menuItems: [
          { text: "Início", link: "#" },
          { text: "Missão", link: "#" },
          { text: "Serviços", link: "#" },
          { text: "Produtos", link: "#" },
          { text: "Orçamento", link: "#" },
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .text-gold {
    color: #d4af37; /* Cor dourada */
  }
  
  .border-gold-gradient {
    border-image: linear-gradient(90deg, #d4af37, #f1c27d, #d4af37); /* Gradiente dourado */
    border-image-slice: 1;
  }
  </style>
  