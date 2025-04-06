<template>
  <nav class="bg-black text-white py-4 px-6 shadow-lg border-b-8 border-gold-gradient">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Alinhada à Esquerda -->
      <div class="text-xl font-bold text-gold ml-4">Arte Nobre Service</div>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6 flex-grow justify-center relative">
        <li v-for="item in menuItems" :key="item.text" class="relative group">
          <template v-if="item.text === 'Produtos'">
            <details>
              <summary class="cursor-pointer text-white hover:text-gold">Produtos</summary>
              
              <!-- Dropdown -->
              <ul class="absolute hidden group-hover:block bg-black text-white mt-2 py-2 rounded shadow-lg z-50 min-w-[200px] top-4">
                <template v-for="cat in parentCategories" :key="cat.id">
                  <li>
                    <router-link
                      class="block px-4 py-2 hover:bg-gold hover:text-gold transition"
                      :to="`/produtos?category=${cat.route}`"
                    >
                      {{ cat.title }}
                    </router-link>

                    <!-- Subcategorias -->
                    <ul v-if="getChildren(cat.id).length" class="pl-4">
                      <li v-for="child in getChildren(cat.id)" :key="child.id">
                        <router-link
                          class="block px-4 py-1 hover:bg-gold hover:text-gold transition"
                          :to="`/produtos?category=${child.route}`"
                        >
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
            class="hover:text-gold transition"
          >
            {{ item.text }}
          </router-link>

          <router-link
            v-else-if="item.route"
            :to="item.route"
            class="hover:text-gold transition"
          >
            {{ item.text }}
          </router-link>

          <a
            v-else-if="item.whatsapp"
            :href="item.whatsapp"
            target="_blank"
            class="hover:text-gold transition"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>

      <!-- Botão Contato (Aparece no Desktop) -->
      <a href="https://wa.me/11970419195" target="_blank"
        class="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
        Contato
      </a>

      <!-- Botão Mobile -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <span :class="{ 'rotate-90': isMenuOpen }" class="transition-transform">☰</span>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="md:hidden bg-black py-2">
        <ul class="space-y-2 text-center">
          <li v-for="item in menuItems" :key="item.text">
            <template v-if="item.text === 'Produtos'">
              <details>
                <summary class="cursor-pointer py-2 text-white hover:text-gold">Produtos</summary>
                <ul class=" text-left border border-white rounded space-y-2 pt-4 pb-4">
                  <template v-for="cat in parentCategories" :key="cat.id">
                    <li>
                      <router-link
                        class="block py-1 hover:text-gold transition text-center"
                        :to="`/produtos?category=${cat.route}`"
                        @click="isMenuOpen = false"
                      >
                        {{ cat.title }}
                      </router-link>

                      <ul v-if="getChildren(cat.id).length" class="md:pl-4 text-center">
                        <li v-for="child in getChildren(cat.id)" :key="child.id">
                          <router-link
                            class="block py-2 hover:text-gold transition"
                            :to="`/produtos?category=${child.route}`"
                            @click="isMenuOpen = false"
                          >
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
              class="block py-2 hover:text-gold transition"
            >
              {{ item.text }}
            </router-link>

            <router-link
              v-else-if="item.route"
              :to="item.route"
              class="block py-2 hover:text-gold transition"
              @click="isMenuOpen = false"
            >
              {{ item.text }}
            </router-link>

            <a
              v-else-if="item.whatsapp"
              :href="item.whatsapp"
              target="_blank"
              class="block py-2 hover:text-gold transition"
            >
              {{ item.text }}
            </a>
          </li>
          <li>
            <a href="https://wa.me/11970419195" target="_blank"
              class="block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mx-4">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);
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
      { text: "Produtos" }, // agora é tratado como dropdown
      { text: "Orçamento", whatsapp: "https://wa.me/5511970419195" },
    ];

    const parentCategories = categories.value.filter(cat => !cat.father_id);
    const getChildren = (id) => categories.value.filter(cat => cat.father_id === id);

    const scrollTo = (sectionId) => {
      if (window.location.pathname !== "/") {
        window.location.href = "/#" + sectionId;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      isMenuOpen.value = false;
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      menuItems,
      parentCategories,
      getChildren,
      scrollTo,
      toggleMenu
    };
  }
};
</script>

<style scoped>
.text-gold {
  color: #d4af37;
}
.border-gold-gradient {
  border-image: linear-gradient(90deg, #d4af37, #f1c27d, #d4af37);
  border-image-slice: 1;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}
.ml-4 {
  margin-left: 16px;
}
.flex-grow {
  flex-grow: 1;
}
.justify-center {
  justify-content: center;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
