<template>
  <div class="mx-auto px-4 py-16 bg-black text-white">
    <!-- Cabeçalho Elegante -->
    <div class="flex flex-col items-center mb-16 relative">
      <span class="text-sm font-semibold tracking-wider text-red-600 uppercase mb-2">Dúvidas Frequentes</span>
      <h2 class="text-4xl md:text-5xl font-bold text-red-600 text-center">
        <span class="relative">
          Perguntas e Respostas
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 mt-3"></span>
        </span>
      </h2>
      <p class="mt-6 text-lg text-center text-gray-400 max-w-3xl">
        Tire suas dúvidas sobre compra, venda e manutenção de veículos.
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto px-5 bg-black min-h-screen">
      <div class="grid divide-y divide-neutral-800 max-w-xl mx-auto mt-8">

        <div class="py-5" v-for="(topic, index) in topics" :key="index">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-red-600 group-open:text-white">{{ topic.text }}</span>
              <span class="transition group-open:rotate-180 text-red-600">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p class="text-gray-400 mt-3 group-open:animate-fadeIn">
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

const topics = ref([
  {
    text: 'Como funciona o processo de compra de veículos?',
    answer: 'O processo de compra é simples e rápido. Após escolher o veículo, realizamos a análise de crédito, documentação e a transferência é feita em poucos dias.'
  },
  {
    text: 'Quais documentos são necessários para a venda do meu carro?',
    answer: 'Você precisará dos documentos do veículo (CRLV), comprovante de residência e documentos pessoais como RG e CPF.'
  },
  {
    text: 'Posso financiar um carro usado?',
    answer: 'Sim! Oferecemos diversas opções de financiamento para veículos novos e usados, com taxas competitivas.'
  },
  {
    text: 'Como funciona a garantia dos veículos?',
    answer: 'Todos os nossos veículos passam por uma rigorosa inspeção e possuem garantia de motor e câmbio por até 12 meses.'
  },
  {
    text: 'Vocês compram carros com dívida?',
    answer: 'Sim, compramos veículos com dívidas, porém, o valor da dívida será descontado do valor final de compra.'
  },
  {
    text: 'Posso fazer um test drive antes de comprar?',
    answer: 'Claro! Agende um test drive e experimente o carro antes de tomar sua decisão.'
  },
  {
    text: 'Vocês aceitam veículos como parte do pagamento?',
    answer: 'Sim, aceitamos veículos como parte do pagamento e fazemos a avaliação na hora.'
  }
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

details {
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

details[open] {
  padding-bottom: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.group-open:animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

summary::-webkit-details-marker {
  display: none;
}

summary {
  transition: color 0.2s ease;
}

summary:hover {
  color: #ffffff;
}
</style>
