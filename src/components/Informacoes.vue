<template>
  <div class="max-w-7xl mx-auto px-4 py-16 bg-white">
    <!-- Título simplificado -->
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-semibold text-[#5C2E00]">Informações</h2>
      <div class="w-16 h-1 bg-[#5C2E00] mt-2"></div>
    </div>

    <!-- Grid de imagens completo -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="(textGroup, index) in textGroups" 
        :key="index" 
        class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <!-- Container da imagem completa -->
        <div class="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
          <img 
            src="../assets/arquivos/logo-2.png" 
            alt="Informações" 
            class="w-full h-full object-contain p-4"
          />
        </div>
        
        <!-- Lista de itens -->
        <div class="p-6">
          <ul class="space-y-3">
            <li 
              v-for="(text, i) in textGroup" 
              :key="i" 
              class="text-[#5C2E00] flex items-start"
            >
              <span class="inline-block mr-2 text-[#5C2E00]">•</span>
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const textGroups = ref([
  [
    'Tipo de piso de madeira',
    'Instalação e acabamento',
    'Fornecedor e qualidade',
    'Entrega e armazenamento'
  ],
  [
    'Entendendo suas necessidades',
    'Passo a passo para a compra',
    'Contato e orçamento',
    'Compra e entrega'
  ],
  [
    'Informações sobre os produtos',
    'Dúvidas e detalhes',
    'Processos de instalação',
    'Manutenção e cuidados'
  ]
]);
</script>

<style scoped>
/* Estilo mínimo para melhorar a legibilidade */
li {
  line-height: 1.5;
}

/* Efeito hover sutil */
img {
  transition: transform 0.3s ease;
}

div:hover img {
  transform: scale(1.02);
}
</style>