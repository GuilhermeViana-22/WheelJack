<template>
  <div class="max-w-7xl mx-auto px-4 py-16 bg-white">

    <!-- Cabeçalho Elegante -->
    <div class="flex flex-col items-center mb-16 relative">
      <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">Saiba mais</span>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        <span class="relative">
          Informações
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#183614] mt-3"></span>
        </span>
      </h2>

    </div>

    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">

        <div class="py-5" v-for="(topic, index) in topics" :key="index">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> {{ topic.text }} </span>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              {{ topic.answer }}
            </p>
          </details>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const topics = ref(
  [
    {
      text: 'Tipo de piso de madeira',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Instalação e acabamento',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Fornecedor e qualidade',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Entrega e armazenamento',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Entendendo suas necessidades',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Passo a passo para a compra',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Contato e orçamento',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Compra e entrega',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Informações sobre os produtos',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Dúvidas e detalhes',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Processos de instalação',
      answer: 'Aqui virá as informações sobre esse tópico...'
    },
    {
      text: 'Manutenção e cuidados',
      answer: 'Aqui virá as informações sobre esse tópico...'
    }
]);
</script>