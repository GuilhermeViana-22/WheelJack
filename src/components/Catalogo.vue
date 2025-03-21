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
  import img6 from "@/assets/arquivos/6.png";
  
  const router = useRouter();
  const route = useRoute();
  
  const products = ref([
    {
      title: "Assoalho de Cumarú 6,5cm TG4",
      image: img6,
      thickness: "1,8cm",
      width: "6,5cm",
      length: "30cm a 210cm",
    },
    {
      title: "Assoalho de Cumarú 10cm TG4",
      image: img6,
      thickness: "1,8cm",
      width: "10cm",
      length: "30cm a 210cm",
    },
    {
      title: "Assoalho de Cumarú 13cm TG4",
      image: img6,
      thickness: "1,8cm",
      width: "13cm",
      length: "30cm a 210cm",
    },
    {
      title: "Assoalho de Cumarú Envernizado 6cm TG4",
      image: img6,
      thickness: "1,8cm",
      width: "6cm",
      length: "30cm a 210cm",
    },
    {
      title: "Assoalho de Cumarú Envernizado 10cm TG4",
      image: img6,
      thickness: "1,8cm",
      width: "10cm",
      length: "30cm a 210cm",
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
    const phone = "5511954509504"; // Substitua pelo número correto
    const message = `Olá, gostaria de saber mais sobre o produto: ${product.title}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  </script>
  
  <style>
  /* Adicione estilos personalizados aqui, se necessário */
  </style>