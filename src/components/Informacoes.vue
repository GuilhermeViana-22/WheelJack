<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Heading -->
    <div class="flex flex-col items-left mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-black mb-2">Informações</h2>
      <hr>
    </div>

    <!-- Grid de imagens -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        v-for="(textGroup, index) in textGroups" 
        :key="index" 
        class="bg-primary rounded shadow-md overflow-hidden item" v-scroll-reveal>
        <div class="bg-secondary p-3 flex justify-center items-center h-48">
          <img 
            src="../assets/arquivos/logo-2.png" 
            alt="Logo" 
            class="w-full ml-0"
          />
        </div>
        <div class="p-6 space-y-2">
          <p v-for="(text, i) in textGroup" :key="i" class="text-secondary font-medium">
            {{ text }}
          </p>
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

<style>
@keyframes skeletonPulse {
  0% { background-color: rgba(226, 232, 240, 0.6); }
  50% { background-color: rgba(226, 232, 240, 0.8); }
  100% { background-color: rgba(226, 232, 240, 0.6); }
}

.animate-pulse {
  animation: skeletonPulse 1.5s ease-in-out infinite;
}

.bg-primary { background-color: #e0cdaf; }
.bg-secondary { background-color: #e0cdaf; }
.text-secondary { color: #5C2E00; }
</style>
