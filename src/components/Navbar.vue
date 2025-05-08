<template>
  <!-- Container principal -->
  <div class="absolute w-full z-50 top-[2vh] flex justify-center px-4">
    <!-- Navbar com estilo moderno -->
    <nav class="bg-black/70 backdrop-blur-sm text-white shadow-xl rounded-lg border-b-4 border-red-gradient max-w-7xl w-full transition-all duration-300 hover:bg-black/95 px-6">
      <div class="flex justify-between items-center p-4">
        <!-- Logo -->
        <div class="logo">
            FUEL
        </div>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex space-x-6 items-center">
          <li v-for="item in menuItems" :key="item.text" class="relative group">
            <template v-if="item.text === 'Veículos'">
              <!-- Dropdown Veículos -->
              <details class="relative">
                <summary class="cursor-pointer hover:text-red-400 transition flex items-center px-3 py-2">
                  Veículos
                  <svg class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <ul class="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black/95 text-white rounded-lg shadow-2xl z-50 min-w-[200px] border border-gray-700 backdrop-blur-sm p-2">
                  <template v-for="cat in vehicleCategories" :key="cat.id">
                    <li class="px-3 py-2 hover:bg-gray-800/80 transition rounded">
                      <router-link :to="`/veiculos?category=${cat.route}`" class="block">
                        {{ cat.title }}
                      </router-link>
                      <ul v-if="getChildren(cat.id).length" class="pl-3 mt-1 border-l-2 border-red-400">
                        <li v-for="child in getChildren(cat.id)" :key="child.id"
                            class="px-2 py-1 hover:bg-gray-700/80 transition text-sm rounded">
                          <router-link :to="`/veiculos?category=${child.route}`" class="block">
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
              class="hover:text-red-400 transition px-3 py-2 rounded"
            >
              {{ item.text }}
            </router-link>

            <a
              v-else-if="item.whatsapp"
              :href="item.whatsapp"
              target="_blank"
              class="hover:text-red-400 transition px-3 py-2 rounded"
            >
              {{ item.text }}
            </a>
          </li>
        </ul>

        <!-- Botão Vender Veículo Desktop -->
        <a href="/anunciar-veiculo"
          class="hidden md:flex items-center bg-red-500/90 hover:bg-red-600 text-white px-4 py-2 rounded-md transition ml-3 text-sm">
          Vender meu veículo
        </a>

        <!-- Botão Mobile -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div v-show="isMenuOpen" class="md:hidden mt-3 rounded-lg px-4 py-4 transition-all duration-300 ease-in-out">
        <ul class="space-y-3">
          <li v-for="item in menuItems" :key="item.text">
            <template v-if="item.text === 'Veículos'">
              <div @click="toggleMobileVehicles" class="flex justify-between items-center cursor-pointer py-2 px-3 rounded hover:bg-gray-800/80">
                <span>Veículos</span>
                <svg class="w-4 h-4 transform transition-transform" :class="{'rotate-180': showMobileVehicles}"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
              <div v-show="showMobileVehicles" class="pl-4 mt-2 space-y-2 border-l-2 border-red-400">
                <template v-for="cat in vehicleCategories" :key="cat.id">
                  <div class="px-3 py-2 rounded hover:bg-gray-700/80 transition">
                    <router-link
                      :to="`/veiculos?category=${cat.route}`"
                      @click="closeMenu"
                      class="block"
                    >
                      {{ cat.title }}
                    </router-link>
                    <div v-if="getChildren(cat.id).length" class="pl-4 mt-2 space-y-2">
                      <div v-for="child in getChildren(cat.id)" :key="child.id">
                        <router-link
                          :to="`/veiculos?category=${child.route}`"
                          @click="closeMenu"
                          class="block text-sm py-2 px-3 rounded hover:bg-gray-600/80 transition"
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
              class="block py-2 px-3 rounded hover:bg-gray-800/80 transition"
            >
              {{ item.text }}
            </router-link>

            <a
              v-else-if="item.whatsapp"
              :href="item.whatsapp"
              target="_blank"
              class="block py-2 px-3 rounded hover:bg-gray-800/80 transition"
            >
              {{ item.text }}
            </a>
          </li>
          <li class="pt-3">
            <a href="/anunciar-veiculo"
              class="flex justify-center items-center bg-red-500/90 hover:bg-red-600 text-white py-3 px-5 rounded-lg transition">
              Vender meu veículo
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
    const showMobileVehicles = ref(false);
    
    const vehicleCategories = ref([
      { id: 1, title: 'Carros', route: 'carros' },
      { id: 2, title: 'Motos', route: 'motos' },
      { id: 3, title: 'Caminhões', route: 'caminhoes' },
      { id: 4, title: 'SUV', father_id: 1, route: 'suv' },
      { id: 5, title: 'Hatch', father_id: 1, route: 'hatch' },
      { id: 6, title: 'Sedan', father_id: 1, route: 'sedan' },
      { id: 7, title: 'Esportivos', father_id: 1, route: 'esportivos' },
      { id: 8, title: 'Custom', father_id: 2, route: 'custom' },
      { id: 9, title: 'Esportiva', father_id: 2, route: 'esportiva' },
      { id: 10, title: 'Carga', father_id: 3, route: 'carga' },
    ]);

    const menuItems = [
      { text: "Início", id: "inicio" },
      { text: "Sobre Nós", id: "sobre" },
      { text: "Serviços", id: "servicos" },
      { text: "Veículos" },
      { text: "Financiamento", whatsapp: "https://wa.me/5511970419195" },
    ];

    const parentCategories = vehicleCategories.value.filter(cat => !cat.father_id);
    const getChildren = (id) => vehicleCategories.value.filter(cat => cat.father_id === id);

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
        showMobileVehicles.value = false;
      }
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
      showMobileVehicles.value = false;
    };

    const toggleMobileVehicles = () => {
      showMobileVehicles.value = !showMobileVehicles.value;
    };

    return {
      isMenuOpen,
      showMobileVehicles,
      menuItems,
      vehicleCategories,
      parentCategories,
      getChildren,
      scrollTo,
      scrollToAndClose,
      toggleMenu,
      toggleMobileVehicles,
      closeMenu
    };
  }
};
</script>

<style scoped>
.text-red-400 {
  color: #f63b3b;
}
.border-red-400 {
  border-color: #f63b3b;
}
.border-red-gradient {
  border-image: linear-gradient(90deg, #f63b3b, #f63b3b, #f63b3b);
  border-image-slice: 1;
}
.transition {
  transition: all 0.3s ease;
}

/* Adicionado para garantir que o conteúdo principal não fique escondido atrás do navbar */
@media (max-width: 767px) {
  body {
    padding-top: 70px; /* Ajuste este valor conforme a altura do seu navbar mobile */
  }
}
</style>