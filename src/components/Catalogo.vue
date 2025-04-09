<template>
  <div class="container mx-auto px-4 py-6 max-w-6xl">

    <!-- Breadcrumb navigation -->
    <div class="bg-amber-100 bg-opacity-50 py-2 px-4 md:mb-6 mb-2 rounded">
      <p class="text-gray-700 text-sm">
        <span @click="goToHome" class="cursor-pointer hover:underline"> Início </span> /
        <span @click="reloadPage" class="cursor-pointer hover:underline"> Catálogo  </span>
      </p>
    </div>

    <div class="flex flex-col md:flex-row md:px-4 md:pr-0">

      <!-- Listagem de categorias -->
      <div
        class="flex flex-col space-y-4 mb-6 mr-24 p-4 md:pl-0 rounded h-auto border border-gray-200 md:border-0 w-full md:w-auto">
        <h2 class="text-xl text-gray-700 font-bold whitespace-nowrap text-lg">Categorias</h2>

        <div v-for="group in groupedCategories" :key="group.parent.id">
          <!-- Categoria Pai -->
          <router-link :to="{ path: $route.path, query: { category: group.parent.route } }"
            class="cursor-pointer hover:underline whitespace-nowrap font-medium text-gray-700 text-md">
            <i class="fa fa-bars fa-sm" aria-hidden="true"></i> {{ group.parent.title }}
          </router-link>

          <!-- Categorias Filhas -->
          <div v-for="child in group.children" :key="child.id"
            class="md:pl-6 font-normal md:border-l md:border-l-gray-200 md:ml-1 text-gray-700 text-sm mt-4">
            <router-link :to="{ path: $route.path, query: { category: child.route } }"
              class="cursor-pointer hover:underline whitespace-nowrap">
              <i class="fa fa-sort-asc rotate-90 mr-2" aria-hidden="true"></i> {{ child.title }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Listagem de produtos filtrados -->
      <div class="w-full bg-gray-100 p-4 grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-4">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all" v-for="(product, index) in filteredProducts" :key="index">
          <div class="relative">
            <img :src="product.image" :alt="product.title" class="w-full h-52 object-cover" />
            
            <button @click="openWhatsApp(product)" class="absolute hover:bg-blue-600 top-3 right-3 bg-blue-500 rounded-full text-white text-sm px-4 py-1 rounded"> Saiba Mais
            </button>
          </div>
          <div class="p-5 space-y-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900">{{ product.title }}</h3>

              <p class="text-gray-700 text-sm mt-2">Medidas e demais infomrações após orçamento</p>
            </div>

            <button
               @click="openWhatsApp(product)"
              class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

//assolaho

import img1 from "@/assets/catalogo/assoalho_garapa.jpg";
import img2 from "@/assets/catalogo/assoalho_jatoba.webp";
import img_servico2 from "@/assets/servicos/2.png";
import img_servico4 from "@/assets/servicos/4.png";
import img3 from "@/assets/catalogo/assoalho_sucupira_amarela.jpg";

import img4 from "@/assets/arquivos/6.png";

import img5 from "@/assets/servicos/5.png";



import img6 from "@/assets/servicos/7.png";
import img7 from "@/assets/catalogo/2.png";
import img8 from "@/assets/catalogo/3.png";
import img9 from "@/assets/catalogo/5.png";
import img10 from "@/assets/catalogo/8.png";
import img11 from "@/assets/catalogo/9.png";
import img12 from "@/assets/catalogo/10.png";
import img_servico12 from "@/assets/servicos/12.png";
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
  { title: "Assoalho", image: img_servico4, thickness: "1,8cm", width: "6cm", length: "30cm a 210cm", category_id: 1 },
  { title: "Assoalho", image: img4, thickness: "1,8cm", width: "6cm", length: "30cm a 210cm", category_id: 1 },
  { title: "Assoalho", image: img5, thickness: "1,8cm", width: "6cm", length: "30cm a 210cm", category_id: 1 },
  { title: "Assoalho", image: img_servico2, thickness: "1,8cm", width: "6cm", length: "30cm a 210cm", category_id: 1 },
  

  /// esses itens estão com as categorias erradas e informações erradas, ajustar
  { title: "Painel", image: img6, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 3 },
  { title: "Escada de madeira", image: img26, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 8 },
  { title: "Escada de madeira", image: img27, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 8 },
  { title: "Escada", image: img7, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 8 },
  { title: "Painel", image: img_servico12, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 4 },
  { title: "Revestimento de Banheira", image: img25, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 9 },

  { title: "Tacão", image: img12, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 5 },
  { title: "Tacão Palito", image: img13, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 6 },
  



  { title: "Forro de Madeira Cumaru Extra", image: img23, thickness: ": 2m a 6m réguas longas", width: "10 cm", length: "4,00 m", category_id: 10 },

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
