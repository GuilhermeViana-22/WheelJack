<template>
  <nav class="bg-black text-white py-4 px-6 shadow-lg border-b-8 border-gold-gradient">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold text-gold">Arte Nobre Service</div>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="item in menuItems" :key="item.text">
          <a
            v-if="item.id"
            href="#"
            @click.prevent="scrollTo(item.id)"
            class="hover:text-gold transition"
          >
            {{ item.text }}
          </a>
          <a
            v-else-if="item.route"
            :href="item.route"
            class="hover:text-gold transition"
          >
            {{ item.text }}
          </a>
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
      <a href="#" class="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
        Contato
      </a>

      <!-- Botão Mobile -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <span :class="{ 'rotate-90': isMenuOpen }" class="transition-transform">☰</span>
      </button>
    </div>

    <!-- Transição do Dropdown Mobile -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="md:hidden bg-black py-2">
        <ul class="space-y-2 text-center">
          <li v-for="item in menuItems" :key="item.text">
            <a
              v-if="item.id"
              href="#"
              @click.prevent="scrollTo(item.id)"
              class="block py-2 hover:text-gold transition"
            >
              {{ item.text }}
            </a>
            <a
              v-else-if="item.route"
              :href="item.route"
              class="block py-2 hover:text-gold transition"
            >
              {{ item.text }}
            </a>
            <a
              v-else-if="item.whatsapp"
              :href="item.whatsapp"
              target="_blank"
              class="block py-2 hover:text-gold transition"
            >
              {{ item.text }}
            </a>
          </li>
          <!-- Botão Contato (Aparece SOMENTE no Mobile) -->
          <li>
            <a href="#" class="block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mx-4">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { text: "Início", id: "inicio" },
        { text: "Missão", id: "missao" },
        { text: "Serviços", id: "servicos" },
        { text: "Produtos", route: "/produtos" }, // Redireciona para a rota /produtos
        { text: "Orçamento", whatsapp: "https://wa.me/SEUNUMERO" }, // Link do WhatsApp
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        this.isMenuOpen = false; // Fecha o menu no mobile após clicar
      }
    }
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

/* Transições do menu */
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
