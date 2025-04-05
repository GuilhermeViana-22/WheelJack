<template>
  <div class="container mx-auto px-4 py-6 max-w-6xl">

    <!-- Breadcrumb navigation -->
    <div class="bg-amber-100 bg-opacity-50 py-2 px-4 md:mb-6 mb-2 rounded">
      <p class="text-gray-700 text-sm">
        <span @click="goToHome" class="cursor-pointer hover:underline"> Início </span> /
        <span @click="reloadPage" class="cursor-pointer hover:underline"> Catálogo de Produtos </span>
      </p>
    </div>

    <div class="flex flex-col md:flex-row md:px-4">

      <!-- Listagem de categorias -->
      <div class="flex flex-col space-y-4 mb-6 mr-24 p-4 md:pl-0 rounded h-auto border border-gray-200 md:border-0 w-full md:w-auto">
        <h2 class="text-gray-700 font-bold whitespace-nowrap text-lg">Categorias Relacionadas</h2>

        <div v-for="group in groupedCategories" :key="group.parent.id">
          <!-- Categoria Pai -->
          <router-link
            :to="{ path: $route.path, query: { category: group.parent.route } }"
            class="cursor-pointer hover:underline whitespace-nowrap font-medium text-gray-700 text-md"
          >
            {{ group.parent.title }}
          </router-link>

          <!-- Categorias Filhas -->
          <div
            v-for="child in group.children"
            :key="child.id"
            class="md:pl-6 font-normal md:border-l md:border-l-gray-200 md:ml-1 text-gray-700 text-sm"
          >
            <router-link
              :to="{ path: $route.path, query: { category: child.route } }"
              class="cursor-pointer hover:underline whitespace-nowrap"
            >
              {{ child.title }}
            </router-link>
          </div>
        </div>
      </div>
      

      <!-- Listagem de produtos filtrados -->
      <div class="space-y-6 mt-4">
        <div v-for="(product, index) in filteredProducts" :key="index" class="border border-gray-200 rounded p-4 flex flex-col md:flex-row item" v-scroll-reveal>
          <div class="md:w-1/4 mb-4 md:mb-0">
            <img :src="product.image" :alt="product.title" class="w-full h-auto" />
          </div>
          <div class="md:w-3/4 md:pl-6 flex flex-col justify-between">
            <div>
              <h2 class="text-xl text-gray-700 mb-2">{{ product.title }}</h2>
              <div class="mb-4">
                <p class="uppercase text-sm font-medium text-gray-600 mb-1">MEDIDAS</p>
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Espessura:</span> {{ product.thickness }}
                </p>
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Largura:</span> {{ product.width }}
                </p>
                <p class="text-sm text-gray-600">
                  <span class="font-medium">Comprimentos:</span> {{ product.length }}
                </p>
              </div>
              <button @click="openWhatsApp(product)" class="bg-black text-white text-sm px-4 py-1 rounded"> Saiba Mais </button>
            </div>
            <div class="mt-6">
              <button @click="openWhatsApp(product)" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
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
  { title: "Forro de Cedrinho Mesclado 4,00mt", image: img5, thickness: "1 cm", width: "10 cm", length: "4,00 m", category_id: 10 },
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
