<template>
  <!-- Container principal com posição fixa e z-index alto -->
  <div class="absolute w-full z-50 top-0 flex justify-center px-4 pt-4">
    <!-- Navbar com opacidade e efeito flutuante -->
    <nav class="bg-black/70 backdrop-blur-sm text-white py-3 px-6 shadow-xl rounded-lg border-b-4 border-gold-gradient max-w-6xl w-full transition-all duration-300 hover:bg-black/95">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="text-xl font-bold text-gold">Arte Nobre Service</div>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex space-x-6">
          <li v-for="item in menuItems" :key="item.text" class="relative group">
            <template v-if="item.text === 'Produtos'">
              <!-- Dropdown Produtos -->
              <details class="relative">
                <summary class="cursor-pointer hover:text-gold transition flex items-center">
                  Produtos
                  <svg class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <ul class="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-black/95 text-white py-2 rounded-lg shadow-2xl z-50 min-w-[200px] border border-gray-700 backdrop-blur-sm">
                  <template v-for="cat in parentCategories" :key="cat.id">
                    <li class="px-4 py-2 hover:bg-gray-800/80 transition">
                      <router-link :to="`/produtos?category=${cat.route}`" class="block">
                        {{ cat.title }}
                      </router-link>
                      <!-- Subcategorias -->
                      <ul v-if="getChildren(cat.id).length" class="pl-3 mt-1 border-l-2 border-gold">
                        <li v-for="child in getChildren(cat.id)" :key="child.id" 
                            class="px-2 py-1 hover:bg-gray-700/80 transition">
                          <router-link :to="`/produtos?category=${child.route}`" class="block text-sm">
                            {{ child.title }}
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </template>
                </ul>
              </details>
            </template>

            <router-link
              v-else-if="item.id"
              to="#"
              @click.prevent="scrollTo(item.id)"
              class="hover:text-gold transition px-2 py-1"
            >
              {{ item.text }}
            </router-link>

            <a
              v-else-if="item.whatsapp"
              :href="item.whatsapp"
              target="_blank"
              class="hover:text-gold transition px-2 py-1"
            >
              {{ item.text }}
            </a>
          </li>
        </ul>

        <!-- Botão Contato Desktop -->
        <a href="https://wa.me/11970419195" target="_blank"
          class="hidden md:flex items-center bg-green-500/90 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition ml-4">
          <span>Contato</span>
        </a>

        <!-- Botão Mobile -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div v-show="isMenuOpen" class="md:hidden bg-gray-900/95 mt-3 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 ease-in-out">
        <ul class="space-y-3">
          <li v-for="item in menuItems" :key="item.text">
            <template v-if="item.text === 'Produtos'">
              <div @click="toggleMobileProducts" class="flex justify-between items-center cursor-pointer py-2 px-2 rounded hover:bg-gray-800/80">
                <span>Produtos</span>
                <svg class="w-4 h-4 transform transition-transform" :class="{'rotate-180': showMobileProducts}" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
              <div v-show="showMobileProducts" class="pl-4 mt-2 space-y-2 border-l-2 border-gold">
                <template v-for="cat in parentCategories" :key="cat.id">
                  <div class="px-2 py-1 rounded hover:bg-gray-700/80 transition">
                    <router-link
                      :to="`/produtos?category=${cat.route}`"
                      @click="closeMenu"
                      class="block"
                    >
                      {{ cat.title }}
                    </router-link>
                    <!-- Subcategorias Mobile -->
                    <div v-if="getChildren(cat.id).length" class="pl-4 mt-1 space-y-1">
                      <div v-for="child in getChildren(cat.id)" :key="child.id">
                        <router-link
                          :to="`/produtos?category=${child.route}`"
                          @click="closeMenu"
                          class="block text-sm py-1 px-2 rounded hover:bg-gray-600/80 transition"
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
              class="block py-2 px-2 rounded hover:bg-gray-800/80 transition"
            >
              {{ item.text }}
            </router-link>

            <a
              v-else-if="item.whatsapp"
              :href="item.whatsapp"
              target="_blank"
              class="block py-2 px-2 rounded hover:bg-gray-800/80 transition"
            >
              {{ item.text }}
            </a>
          </li>
          <li class="pt-2">
            <a href="https://wa.me/11970419195" target="_blank"
              class="flex justify-center items-center bg-green-500/90 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
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
      { id: 9, title: 'Revestimentos de Banheiras', route: 'RevestimentosDeBanheiras' },
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
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
      showMobileProducts.value = false;
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
/* Cores personalizadas */
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

/* Transições */
.transition {
  transition: all 0.3s ease;
}

/* Sombra e efeito flutuante */
.shadow-xl {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Container principal */
.max-w-6xl {
  max-width: 72rem;
}

/* Menu mobile animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
}
</style>