<template>
  <div class="container mx-auto px-4 py-8 max-w-7xl">

    <!-- Breadcrumb navigation -->
    <nav class="bg-amber-100 bg-opacity-60 px-5 py-3 rounded mb-8 text-sm text-gray-800">
      <span @click="goToHome" class="cursor-pointer hover:underline">Início</span>
      <span class="mx-2">/</span>
      <span @click="reloadPage" class="cursor-pointer hover:underline">Catálogo de Produtos</span>
    </nav>

    <div class="flex flex-col md:flex-row gap-8">
      
      <!-- Sidebar: Categorias -->
      <aside class="w-full md:w-1/4 bg-white border border-gray-200 rounded-xl p-5 shadow space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Categorias</h2>

        <div v-for="group in groupedCategories" :key="group.parent.id">
          <div v-if="group.children.length > 0">
            <details class="mb-3">
              <summary class="cursor-pointer flex items-center gap-2 text-gray-700 font-medium hover:underline">
                <i class="fa fa-folder text-yellow-500"></i> {{ group.parent.title }}
              </summary>
              <div class="ml-5 mt-2 space-y-1">
                <router-link
                  v-for="child in group.children"
                  :key="child.id"
                  :to="{ path: $route.path, query: { category: child.route } }"
                  class="flex items-center text-sm text-gray-600 hover:text-blue-600 transition">
                  <i class="fa fa-file text-blue-400 mr-1"></i> {{ child.title }}
                </router-link>
              </div>
            </details>
          </div>
          <div v-else>
            <router-link
              :to="{ path: $route.path, query: { category: group.parent.route } }"
              class="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 mb-2 transition">
              <i class="fa fa-link text-green-500"></i> {{ group.parent.title }}
            </router-link>
          </div>
        </div>
      </aside>

      <!-- Produtos -->
      <section class="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden">
          
          <!-- Imagem + botão flutuante -->
          <div class="relative">
            <img :src="product.image" :alt="product.title" class="w-full h-52 object-cover rounded-t-2xl" />
            <button
              @click="openWhatsApp(product)"
              class="absolute top-3 right-3 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition px-3 py-1 text-xs rounded-full font-medium">
              Saiba Mais
            </button>
          </div>

          <!-- Info do produto -->
          <div class="p-5 flex flex-col gap-2 flex-1">
            <h3 class="text-lg font-bold text-gray-800">{{ product.title }}</h3>
            <div class="text-sm text-gray-600 leading-snug">
              <p><strong>Espessura:</strong> {{ product.thickness }}</p>
              <p><strong>Largura:</strong> {{ product.width }}</p>
              <p><strong>Comprimento:</strong> {{ product.length }}</p>
            </div>

            <button
              @click="openWhatsApp(product)"
              class="mt-auto bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-md text-sm font-semibold w-full">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import img1 from "@/assets/catalogo/assoalho_garapa.jpg";
import img2 from "@/assets/catalogo/assoalho_jatoba.webp";
import img3 from "@/assets/catalogo/assoalho_sucupira_amarela.jpg";
import img4 from "@/assets/arquivos/6.png";
import img5 from "@/assets/catalogo/forro.jpg";

import img6 from "@/assets/catalogo/1.png";
import img7 from "@/assets/catalogo/2.png";
import img8 from "@/assets/catalogo/3.png";
import img9 from "@/assets/catalogo/5.png";
import img10 from "@/assets/catalogo/8.png";
import img11 from "@/assets/catalogo/9.png";
import img12 from "@/assets/catalogo/10.png";
import img13 from "@/assets/servicos/16.png";
import img14 from "@/assets/catalogo/12.png";
import img15 from "@/assets/catalogo/14.png";
import img23 from "@/assets/servicos/23.png";
import img25 from "@/assets/servicos/25.png";
//escadas
import img26 from "@/assets/servicos/13.png";
import img27 from "@/assets/servicos/11.png";

const router = useRouter();
const route = useRoute();

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

const products = ref([
  { title: "Assoalho Garapa Extra", image: img1, thickness: "5,5cm", width: "5,5cm", length: "5,5cm", category_id: 1 },
  { title: "Assoalho Jatobá Extra", image: img2, thickness: "15cm", width: "15cm", length: "2cm a 15cm", category_id: 1 },
  { title: "Assoalho Sucupira Amarela Extra 10cm Curto", image: img3, thickness: "10cm", width: "10cm", length: "3cm a 10cm", category_id: 1 },
  { title: "Assoalho de Cumarú Envernizado 6cm TG4", image: img4, thickness: "1,8cm", width: "6cm", length: "30cm a 210cm", category_id: 1 },
  { title: "Forro de Madeira Cumaru Extra", image: img23, thickness: ": 2m a 6m réguas longas", width: "10 cm", length: "4,00 m", category_id: 10 },

  /// esses itens estão com as categorias erradas e informações erradas, ajustar
  { title: "Painel", image: img6, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 3 },
  { title: "Escada de madeira", image: img26, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 8 },
  { title: "Escada de madeira", image: img27, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 8 },
  { title: "Escada", image: img7, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 8 },
  { title: "Painel", image: img8, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 4 },
  { title: "Revestimento de Banheira", image: img9, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 9 },
  { title: "Assoalho", image: img10, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 1 },
  { title: "Assoalho", image: img11, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 1 },
  { title: "Tacão", image: img12, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 5 },
  { title: "Tacão Palito", image: img13, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 6 },
  
  { title: "Assoalho", image: img14, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 1 },
  { title: "Assoalho", image: img15, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 1 }
]);

// Agrupa as categorias
const groupedCategories = computed(() => {
  return categories.value
    .filter(cat => !cat.father_id) // pegar apenas os pais
    .map(parent => {
      const children = categories.value.filter(child => child.father_id === parent.id);
      return {
        parent,
        children
      };
    });
});

// Filtrar produtos com base na categoria selecionada
const filteredProducts = computed(() => {
  const categoryQuery = route.query.category;
  if (!categoryQuery) return products.value; // sem filtro = todos os produtos

  // Encontrar a categoria correspondente à rota atual
  const selectedCategory = categories.value.find(cat => cat.route === categoryQuery);
  if (!selectedCategory) return [];

  // Coletar os IDs relevantes: da categoria pai e de seus filhos
  const selectedCategoryId = selectedCategory.id;
  const childCategoryIds = categories.value
    .filter(cat => cat.father_id === selectedCategoryId)
    .map(cat => cat.id);

  // Incluir também o próprio ID da categoria (caso tenha produtos diretos)
  const validCategoryIds = [selectedCategoryId, ...childCategoryIds];

  // Retornar os produtos cujo category_id seja um dos válidos
  return products.value.filter(product => validCategoryIds.includes(product.category_id));
});

const reloadPage = () => {
  location.reload();
};

const goToHome = () => {
  if (route.path === "/") {
    location.reload();
  } else {
    router.push("/");
  }
};

const openWhatsApp = (product) => {
  const phone = "5511970419195"; // Substitua pelo número correto
  const message = `Olá, gostaria de saber mais sobre o produto: ${product.title}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
</script>

<style>
/* Estilos personalizados, se necessário */
</style>
