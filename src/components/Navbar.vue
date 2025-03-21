<template>
  <nav class="bg-black text-white py-4 px-6 shadow-lg border-b-8 border-gold-gradient">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Alinhada à Esquerda -->
      <div class="text-xl font-bold text-gold ml-4">Arte Nobre Service</div>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6 flex-grow justify-center">
        <li v-for="item in menuItems" :key="item.text">
          <router-link
            v-if="item.id"
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
      <a 
  href="https://wa.me/11970419195" 
  target="_blank" 
  class="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
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
            <router-link
              v-if="item.id"
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
        { text: "Início", route: "/" },
        { text: "Missão", id: "/" },
        { text: "Serviços", id: "/" },
        { text: "Produtos", route: "/produtos" }, // Redireciona para a rota /produtos
        { text: "Orçamento", whatsapp: "https://wa.me/11970419195" }, // Link do WhatsApp
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

/* Ajuste para garantir que a logo e o menu fiquem bem distribuídos */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}

.ml-4 {
  margin-left: 16px; /* Ajusta o espaçamento da logo à esquerda */
}

.flex-grow {
  flex-grow: 1; /* Faz o menu ocupar o máximo de espaço disponível */
}

.justify-center {
  justify-content: center; /* Centraliza os itens do menu no desktop */
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
