<template>
    <!-- Container principal ocupando toda a tela -->
    <div class="fixed inset-0 z-50 h-screen w-screen md:hidden" v-show="isMenuOpen">
      <!-- Overlay de fundo -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeMenu"></div>
      
      <!-- Conteúdo do menu mobile -->
      <div class="relative h-full w-full flex flex-col">
        <!-- Cabeçalho do menu mobile -->
        <div class="bg-black/90 text-white shadow-xl border-b-4 border-gold-gradient py-3 px-6 flex justify-between items-center">
          <!-- Logo -->
          <div class="logo">
            <img src="../assets/logos/5.png" alt="Arte Nobre Logo" class="logo-img max-h-12 p-1" />
          </div>
  
          <!-- Botão para fechar menu -->
          <button @click="closeMenu" class="text-white focus:outline-none p-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
  
        <!-- Conteúdo rolável do menu -->
        <div class="flex-1 overflow-y-auto bg-gray-900/95 backdrop-blur-sm">
          <ul class="space-y-2 p-4">
            <li v-for="item in menuItems" :key="item.text" class="border-b border-gray-700/50 last:border-0">
              <template v-if="item.text === 'Produtos'">
                <div @click="toggleMobileProducts" class="flex justify-between items-center cursor-pointer py-4 px-3 rounded-lg hover:bg-gray-800/80">
                  <span class="text-lg font-medium">Produtos</span>
                  <svg class="w-5 h-5 transform transition-transform" :class="{'rotate-180': showMobileProducts}"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
                <div v-show="showMobileProducts" class="pl-4 mt-2 space-y-3 border-l-2 border-gold">
                  <template v-for="cat in parentCategories" :key="cat.id">
                    <div class="px-3 py-3 rounded-lg hover:bg-gray-700/80 transition">
                      <router-link
                        :to="`/produtos?category=${cat.route}`"
                        @click="closeMenu"
                        class="block text-base"
                      >
                        {{ cat.title }}
                      </router-link>
                      <div v-if="getChildren(cat.id).length" class="pl-4 mt-2 space-y-2">
                        <div v-for="child in getChildren(cat.id)" :key="child.id">
                          <router-link
                            :to="`/produtos?category=${child.route}`"
                            @click="closeMenu"
                            class="block text-sm py-2 px-3 rounded-lg hover:bg-gray-600/80 transition"
                          >
                            {{ child.title }}
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </template>
  
              <router-link
                v-else-if="item.id"
                to="#"
                @click.prevent="scrollToAndClose(item.id)"
                class="block py-4 px-3 rounded-lg hover:bg-gray-800/80 transition text-lg font-medium"
              >
                {{ item.text }}
              </router-link>
  
              <a
                v-else-if="item.whatsapp"
                :href="item.whatsapp"
                target="_blank"
                class="block py-4 px-3 rounded-lg hover:bg-gray-800/80 transition text-lg font-medium"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
  
          <!-- Botão Contato Mobile -->
          <div class="p-4 sticky bottom-0 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50">
            <a href="https://wa.me/11970419195" target="_blank"
              class="flex justify-center items-center bg-green-500/90 hover:bg-green-600 text-white py-4 px-5 rounded-lg transition text-lg font-medium">
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Botão para abrir menu mobile (fixed) -->
    <button @click="toggleMenu" class="fixed md:hidden z-40 bottom-6 right-6 bg-black/90 text-white p-3 rounded-full shadow-xl focus:outline-none">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isMenuOpen = ref(false);
      const showMobileProducts = ref(false);
      
      const categories = ref([
        { id: 1, title: 'Assoalhos', route: 'Assoalhos' },
        { id: 2, title: 'Painéis', route: 'Paineis' },
        { id: 3, title: 'Painéis Ripados', father_id: 2, route: 'PaineisRipados' },
        { id: 4, title: 'Painéis Demolição', father_id: 2, route: 'PaineisDemolicao' },
        { id: 5, title: 'Tacão', route: 'Tacao' },
        { id: 6, title: 'Taco Palito', route: 'TacoPalito' },
        { id: 7, title: 'Escadas', route: 'Escadas' },
        { id: 8, title: 'Escadas Estruturais', father_id: 7, route: 'EscadasEstruturais' },
        { id: 9, title: 'Revestimentos ', route: 'RevestimentosDeBanheiras' },
        { id: 10, title: 'Forros', route: 'Forros' },
      ]);
  
      const menuItems = [
        { text: "Início", id: "inicio" },
        { text: "Missão", id: "missao" },
        { text: "Serviços", id: "servicos" },
        { text: "Produtos" },
        { text: "Orçamento", whatsapp: "https://wa.me/5511970419195" },
      ];
  
      const parentCategories = categories.value.filter(cat => !cat.father_id);
      const getChildren = (id) => categories.value.filter(cat => cat.father_id === id);
  
      const scrollTo = (sectionId) => {
        if (window.location.pathname !== "/") {
          window.location.href = `/#${sectionId}`;
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
  
      const scrollToAndClose = (sectionId) => {
        scrollTo(sectionId);
        closeMenu();
      };
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
        if (!isMenuOpen.value) {
          showMobileProducts.value = false;
        }
        // Bloquear/desbloquear scroll do body
        document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
      };
  
      const closeMenu = () => {
        isMenuOpen.value = false;
        showMobileProducts.value = false;
        document.body.style.overflow = 'auto';
      };
  
      const toggleMobileProducts = () => {
        showMobileProducts.value = !showMobileProducts.value;
      };
  
      return {
        isMenuOpen,
        showMobileProducts,
        menuItems,
        parentCategories,
        getChildren,
        scrollTo,
        scrollToAndClose,
        toggleMenu,
        toggleMobileProducts,
        closeMenu
      };
    }
  };
  </script>
  
  <style scoped>
  .text-gold {
    color: #d4af37;
  }
  .border-gold {
    border-color: #d4af37;
  }
  .border-gold-gradient {
    border-image: linear-gradient(90deg, #d4af37, #f1c27d, #d4af37);
    border-image-slice: 1;
  }
  .transition {
    transition: all 0.3s ease;
  }
  
  /* Animações para o menu mobile */
  .menu-enter-active,
  .menu-leave-active {
    transition: opacity 0.3s ease;
  }
  .menu-enter-from,
  .menu-leave-to {
    opacity: 0;
  }
  
  /* Melhorias para mobile */
  @media (max-width: 767px) {
    .logo-img {
      max-height: 50px;
    }
  }
  </style>