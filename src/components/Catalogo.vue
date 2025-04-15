<template>
  <div class="container mx-auto px-2 py-2 max-w-7xl">

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
      <div class="w-full bg-gray-100 p-4 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 grid-cols-1 gap-4">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group" v-for="(product, index) in filteredProducts" :key="index">
          <div class="relative">
            <img :src="product.image" :alt="product.title" class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
            
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

// ======================
// IMPORTAÇÃO DE IMAGENS
// Organizadas por tipo de produto conforme estrutura de pastas
// ======================

// Assoalhos
import assoalhoGarapa from "@/assets/catalogo/assoalhos/assoalho_garapa.jpg";
import assoalhoJatoba from "@/assets/catalogo/assoalhos/assoalho_jatoba.webp";
import assoalhoSucupira from "@/assets/catalogo/assoalhos/assoalho_sucupira.jpg";
import assoalho1 from "@/assets/catalogo/assoalhos/1.jpeg";
import assoalho4 from "@/assets/catalogo/assoalhos/4.png";
import assoalho18 from "@/assets/catalogo/assoalhos/18.png";
import assoalho19 from "@/assets/catalogo/assoalhos/19.png";
import assoalho23 from "@/assets/catalogo/assoalhos/23.png";
import assoalho24 from "@/assets/catalogo/assoalhos/32.png";
import assoalho25 from "@/assets/catalogo/assoalhos/33.png";

// Tacos
import taco1jpeg from "@/assets/catalogo/tacos/27.png";
import taco1png from "@/assets/catalogo/tacos/1.png";
import taco2jpeg from "@/assets/catalogo/tacos/28.png";
import taco2png from "@/assets/catalogo/tacos/2.png";
import taco3jpeg from "@/assets/catalogo/tacos/30.png";
import taco3png from "@/assets/catalogo/tacos/3.png";
import taco4jpeg from "@/assets/catalogo/tacos/4.jpeg";
import taco5jpeg from "@/assets/catalogo/tacos/5.jpeg";
import taco5png from "@/assets/catalogo/tacos/5.png";

import taco9png from "@/assets/catalogo/tacos/9.png";
import taco10png from "@/assets/catalogo/tacos/10.png";

import taco12png from "@/assets/catalogo/tacos/31.png";

import taco15png from "@/assets/catalogo/tacos/15.png";
import taco16png from "@/assets/catalogo/tacos/16.png";
import taco17png from "@/assets/catalogo/tacos/17.png";

// Painéis
import painel1 from "@/assets/catalogo/paineis/1.png";
import painel3 from "@/assets/catalogo/paineis/3.png";
import painel6 from "@/assets/catalogo/paineis/6.png";
import painel7 from "@/assets/catalogo/paineis/7.png";
import painel12 from "@/assets/catalogo/paineis/12.png";

// Painéis Ripados
import painelRipado1 from "@/assets/catalogo/paineis/1.png";
import painelRipado2 from "@/assets/catalogo/paineis/3.png";

// Painéis Demolição
import painelDemolicao1 from "@/assets/catalogo/paineis/6.png";
import painelDemolicao2 from "@/assets/catalogo/paineis/7.png";

// Escadas
import escada1 from "@/assets/catalogo/escadas/1.jpeg";
import escada2 from "@/assets/catalogo/escadas/2.png";


import escada10 from "@/assets/catalogo/escadas/28.png";
import escada11 from "@/assets/catalogo/escadas/11.png";
import escada13 from "@/assets/catalogo/escadas/13.png";
import escada27 from "@/assets/catalogo/escadas/27.png";

// Forros
import forro21 from "@/assets/catalogo/forros/21.png";

// Revestimentos
import revestimento5 from "@/assets/catalogo/espacos/5.png";
import revestimento25 from "@/assets/catalogo/espacos/25.png";

// Decks (antigos pergolados)
import deck1 from "@/assets/catalogo/deck/1.jpeg";
import deck2 from "@/assets/catalogo/deck/2.jpeg";
import deck25 from "@/assets/catalogo/deck/25.png";
import deck26 from "@/assets/catalogo/deck/26.png";

const router = useRouter();
const route = useRoute();

// ======================
// CATEGORIAS
// Refletindo a estrutura de pastas
// ======================
const categories = ref([
  { id: 1, title: 'Assoalhos', route: 'Assoalhos' },
  { id: 2, title: 'Tacos', route: 'Tacos' },
  { id: 3, title: 'Paineis', route: 'Paineis' },

  { id: 5, title: 'Paineis Ripados', father_id: 3, route: 'PaineisDemolicao' },
  { id: 6, title: 'Escadas', route: 'Escadas' },
  { id: 7, title: 'Revestimentos', route: 'Revestimentos' },
  { id: 8, title: 'Forros', route: 'Forros' },
  { id: 9, title: 'Decks', route: 'Decks' },  // Alterado de Pergolados para Decks
]);

// ======================
// PRODUTOS
// Organizados por categoria com informações completas
// ======================
const products = ref([
  // ASSOALHOS
  { 
    title: "Modelo Assoalho ", 
    image: assoalhoGarapa, 
    description: "Assoalho em madeira Garapa de alta qualidade, peças selecionadas",
    dimensions: "5,5cm x 5,5cm x comprimentos variados",
    woodType: "Garapa",
    finish: "Natural",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalhoJatoba, 
    description: "Assoalho em Jatobá com excelente durabilidade",
    dimensions: "15cm x 15cm x 2cm-15cm",
    woodType: "Jatobá",
    finish: "Natural",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalhoSucupira, 
    description: "Assoalho em Sucupira Amarela, tons quentes e marcantes",
    dimensions: "10cm x 10cm x 3cm-10cm",
    woodType: "Sucupira Amarela",
    finish: "Natural",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalho1, 
    description: "Assoalho em madeira nobre com acabamento premium",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Ipê",
    finish: "Envernizado",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalho4, 
    description: "Assoalho em madeira resistente para alto tráfego",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Cumarú",
    finish: "Envernizado",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalho18, 
    description: "Assoalho rústico com acabamento natural",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Garapa",
    finish: "Natural",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalho19, 
    description: "Assoalho premium para ambientes sofisticados",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Jatobá",
    finish: "Polido",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalho23, 
    description: "Assoalho com tratamento especial para áreas externas",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Cumarú",
    finish: "Impermeabilizado",
    category_id: 1 
  },
  { 
    title: "Modelo Assoalho ", 
    image: assoalho24, 
    description: "Assoalho com tratamento especial para áreas externas",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Cumarú",
    finish: "Impermeabilizado",
    category_id: 1 
  },

  { 
    title: "Modelo Assoalho ", 
    image: assoalho25, 
    description: "Assoalho com tratamento especial para áreas externas",
    dimensions: "6cm x 1,8cm x 30cm-210cm",
    woodType: "Cumarú",
    finish: "Impermeabilizado",
    category_id: 1 
  },

  // TACOS
  { 
    title: "Modelo Taco", 
    image: taco1jpeg, 
    description: "Taco em madeira maciça para pisos resistentes",
    dimensions: "4cm x 12cm x comprimentos variados",
    woodType: "Ipê",
    finish: "Lixado",
    category_id: 2 
  },
  { 
    title: "Modelo Taco", 
    image: taco1png, 
    description: "Taco em madeira nobre com acabamento diferenciado",
    dimensions: "4cm x 12cm x comprimentos variados",
    woodType: "Cumarú",
    finish: "Envernizado",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco2jpeg, 
    description: "Taco padrão para instalação profissional",
    dimensions: "3cm x 10cm x comprimentos variados",
    woodType: "Garapa",
    finish: "Natural",
    category_id: 2 
  },
  { 
    title: "Modelo Taco", 
    image: taco2png, 
    description: "Taco com tratamento especial para durabilidade",
    dimensions: "3cm x 10cm x comprimentos variados",
    woodType: "Ipê",
    finish: "Impermeabilizado",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco3jpeg, 
    description: "Taco em madeira de demolição, aspecto rústico",
    dimensions: "5cm x 15cm x comprimentos variados",
    woodType: "Demolição",
    finish: "Rústico",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco3png, 
    description: "Taco premium para ambientes sofisticados",
    dimensions: "5cm x 15cm x comprimentos variados",
    woodType: "Jatobá",
    finish: "Polido",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco4jpeg, 
    description: "Taco resistente para alto tráfego",
    dimensions: "4cm x 10cm x comprimentos variados",
    woodType: "Cumarú",
    finish: "Natural",
    category_id: 2 
  },
  { 
    title: "Modelo Taco", 
    image: taco5jpeg, 
    description: "Taco com design moderno e acabamento premium",
    dimensions: "3cm x 8cm x comprimentos variados",
    woodType: "Ipê",
    finish: "Envernizado",
    category_id: 2 
  },
  { 
    title: "Modelo Taco", 
    image: taco5png, 
    description: "Taco para instalação em áreas úmidas",
    dimensions: "3cm x 8cm x comprimentos variados",
    woodType: "Cumarú",
    finish: "Impermeabilizado",
    category_id: 2 
  },

  { 
    title: "Modelo Taco ", 
    image: taco9png, 
    description: "Taco em madeira nobre com acabamento natural",
    dimensions: "4cm x 10cm x comprimentos variados",
    woodType: "Jatobá",
    finish: "Natural",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco10png, 
    description: "Taco para pisos de alto padrão",
    dimensions: "3cm x 9cm x comprimentos variados",
    woodType: "Ipê",
    finish: "Polido",
    category_id: 2 
  },

  { 
    title: "Modelo Taco ", 
    image: taco12png, 
    description: "Taco para ambientes internos e externos",
    dimensions: "3cm x 10cm x comprimentos variados",
    woodType: "Garapa",
    finish: "Natural",
    category_id: 2 
  },

  { 
    title: "Modelo Taco ", 
    image: taco15png, 
    description: "Taco premium com acabamento exclusivo",
    dimensions: "4cm x 12cm x comprimentos variados",
    woodType: "Jatobá",
    finish: "Envernizado",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco16png, 
    description: "Taco premium com acabamento exclusivo",
    dimensions: "4cm x 12cm x comprimentos variados",
    woodType: "Jatobá",
    finish: "Envernizado",
    category_id: 2 
  },
  { 
    title: "Modelo Taco ", 
    image: taco17png, 
    description: "Taco premium com acabamento exclusivo",
    dimensions: "4cm x 12cm x comprimentos variados",
    woodType: "Jatobá",
    finish: "Envernizado",
    category_id: 2 
  },

  // PAINÉIS
  { 
    title: "Modelo Painel 1", 
    image: painel1, 
    description: "Painel em madeira nobre para revestimento",
    dimensions: "1cm x 10cm x 4m",
    woodType: "Ipê",
    finish: "Natural",
    category_id: 3 
  },
  { 
    title: "Modelo Painel 3", 
    image: painel3, 
    description: "Painel com design moderno para ambientes contemporâneos",
    dimensions: "1.2cm x 12cm x 3.5m",
    woodType: "Cumarú",
    finish: "Envernizado",
    category_id: 3 
  },
  { 
    title: "Modelo Painel 6", 
    image: painel6, 
    description: "Painel rústico para decoração de interiores",
    dimensions: "1.5cm x 15cm x comprimentos variados",
    woodType: "Demolição",
    finish: "Rústico",
    category_id: 3 
  },
  { 
    title: "Modelo Painel 7", 
    image: painel7, 
    description: "Painel em madeira resistente para áreas externas",
    dimensions: "2cm x 12cm x 4m",
    woodType: "Garapa",
    finish: "Impermeabilizado",
    category_id: 3 
  },
  { 
    title: "Modelo Painel 12", 
    image: painel12, 
    description: "Painel premium para projetos especiais",
    dimensions: "1cm x 8cm x 5m",
    woodType: "Jatobá",
    finish: "Polido",
    category_id: 3 
  },

  // PAINÉIS RIPADOS
  { 
    title: "Modelo Painel Ripado 1", 
    image: painelRipado1, 
    description: "Painel ripado em madeira Ipê para revestimentos",
    dimensions: "1cm x 10cm x 4m",
    woodType: "Ipê",
    finish: "Natural",
    category_id: 4 
  },
  { 
    title: "Modelo Painel Ripado 2", 
    image: painelRipado2, 
    description: "Painel ripado com design diferenciado",
    dimensions: "1.2cm x 12cm x 3.5m",
    woodType: "Cumarú",
    finish: "Natural",
    category_id: 4 
  },

  // PAINÉIS DEMOLIÇÃO
  { 
    title: "Modelo Painel", 
    image: painelDemolicao1, 
    description: "Painel com madeira, aspecto vintage",
    dimensions: "1.5cm x 15cm x comprimentos variados",
    woodType: "Mista (demolição)",
    finish: "Rústico",
    category_id: 5 
  },
  { 
    title: "Modelo Painel", 
    image: painelDemolicao2, 
    description: "Painel com características únicas",
    dimensions: "1.8cm x 18cm x comprimentos variados",
    woodType: "Mista (demolição)",
    finish: "Rústico",
    category_id: 5 
  },

  // ESCADAS
  { 
    title: "Modelo Escada", 
    image: escada1, 
    description: "Escada em madeira maciça com design clássico",
    dimensions: "Degraus: 3cm x 25cm x comprimentos variados",
    woodType: "Ipê",
    finish: "Natural",
    category_id: 6 
  },

  { 
    title: "Modelo Escada", 
    image: escada10, 
    description: "Escada para ambientes internos com acabamento refinado",
    dimensions: "Degraus: 3cm x 26cm x comprimentos variados",
    woodType: "Garapa",
    finish: "Natural",
    category_id: 6 
  },
 
  { 
    title: "Modelo Escada", 
    image: escada13, 
    description: "Escada em madeira nobre para projetos especiais",
    dimensions: "Degraus: 3.5cm x 29cm x comprimentos variados",
    woodType: "Jatobá",
    finish: "Envernizado",
    category_id: 6 
  },
 
  // REVESTIMENTOS

  { 
    title: "Modelo Revestimento", 
    image: revestimento25, 
    description: "Revestimento premium para projetos especiais",
    dimensions: "2.5cm x 12cm x comprimentos variados",
    woodType: "Ipê",
    finish: "Polido",
    category_id: 7 
  },

  // FORROS
  { 
    title: "Modelo Forro 21", 
    image: forro21, 
    description: "Forro em madeira nobre para instalação contínua",
    dimensions: "10cm x 2cm x 2m-6m",
    woodType: "Cumarú",
    finish: "Natural",
    category_id: 8 
  },

  // DECKS
  { 
    title: "Modelo Deck", 
    image: deck1, 
    description: "Deck em madeira resistente para áreas externas",
    dimensions: "Estrutura: 10cm x 10cm, comprimentos variados",
    woodType: "Ipê",
    finish: "Impermeabilizado",
    category_id: 9 
  },
  { 
    title: "Modelo Deck", 
    image: deck2, 
    description: "Deck com design moderno e acabamento premium",
    dimensions: "Estrutura: 12cm x 12cm, comprimentos variados",
    woodType: "Cumarú",
    finish: "Envernizado",
    category_id: 9 
  },

]);

// ======================
// LÓGICA DE FILTROS E NAVEGAÇÃO
// ======================

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
  const phone = "5511970419195";
  const message = `Olá, gostaria de saber mais sobre o produto: ${product.title}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
</script>

<style>
/* Estilos personalizados, se necessário */
</style>