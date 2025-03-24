<template>
    <div class="container mx-auto px-4 py-6 max-w-6xl">
      <!-- Breadcrumb navigation -->
      <div class="bg-amber-100 bg-opacity-50 py-2 px-4 mb-6 rounded">
        <p class="text-gray-700 text-sm">
          <span @click="goToHome" class="cursor-pointer hover:underline"> Início </span> /
          <span @click="reloadPage" class="cursor-pointer hover:underline"> Catálogo de Produtos </span>
        </p>
      </div>
  
      <!-- Main heading -->
      <h1 class="text-2xl font-medium text-gray-700 mb-6">Assoalhos</h1>
  
      <!-- listgaem de produtso -->
      <div class="space-y-6">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="border border-gray-200 rounded p-4 flex flex-col md:flex-row item"
          v-scroll-reveal
        >
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
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import img1 from "@/assets/catalogo/assoalho_garapa.jpg";
  import img2 from "@/assets/catalogo/assoalho_jatoba.webp";
  import img3 from "@/assets/catalogo/assoalho_sucupira_amarela.jpg";
  import img4 from "@/assets/arquivos/6.png";
  import img5 from "@/assets/catalogo/forro.jpg";
  
  const router = useRouter();
  const route = useRoute();
  
  const products = ref([
    {
      title: "Assoalho Garapa Extra",
      image: img1,
      thickness: "5,5cm",
      width: "5,5cm",
      length: "5,5cm",
    },
    {
      title: "Assoalho Jatobá Extra",
      image: img2,
      thickness: "15cm",
      width: "15cm",
      length: "2cm a 15cm",
    },
    {
      title: "Assoalho Sucupira Amarela Extra 10cm Curto",
      image: img3,
      thickness: "10cm",
      width: "10cm",
      length: "3cm a 10cm",
    },
    {
      title: "Assoalho de Cumarú Envernizado 6cm TG4",
      image: img4,
      thickness: "1,8cm",
      width: "6cm",
      length: "30cm a 210cm",
    },
    {
      title: "Forro de Cedrinho Mesclado 4,00mt",
      image: img5,
      thickness: "1 cm",
      width: "10 cm",
      length: "4,00 m",
    },
  ]);
  
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
  /* Adicione estilos personalizados aqui, se necessário */
  </style>