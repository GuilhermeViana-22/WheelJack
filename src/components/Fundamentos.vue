<template>
    <div  id="missao" class="max-w-7xl mx-auto px-4 py-16">
      <!-- Heading with underline -->
      <div class="flex flex-col items-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-black mb-2">Nossos fundamentos</h2>
        <div class="h-1 w-full max-w-md bg-amber-500"></div>
      </div>
  
      <!-- Cards - Responsive grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Missão Card -->
        <div class="bg-[#f5e8d3] p-8 rounded-lg shadow-md  item" v-scroll-reveal >
          <div class="flex items-start mb-4">
            <div class="mr-4 text-amber-600">
              <i class="fas fa-bullseye fa-2x"></i>
            </div>
            <h3 class="text-2xl font-semibold text-amber-700">Missão</h3>
          </div>
          <p class="text-black">
            Oferecer soluções de alto padrão em pisos de madeira, tacos, assoalhos e decks, garantindo qualidade, durabilidade e sofisticação para cada ambiente.
          </p>
        </div>
  
        <!-- Visão Card -->
        <div class="bg-[#f5e8d3] p-8 rounded-lg shadow-md  item" v-scroll-reveal >
          <div class="flex items-start mb-4">
            <div class="mr-4 text-amber-600">
              <i class="fas fa-eye fa-2x"></i>
            </div>
            <h3 class="text-2xl font-semibold text-amber-700">Visão</h3>
          </div>
          <p class="text-black">
            Ser referência no mercado de revestimentos em madeira, destacando-se pela excelência no atendimento, inovação e compromisso com a sustentabilidade.
          </p>
        </div>
  
        <!-- Valores Card -->
        <div class="bg-[#f5e8d3] p-8 rounded-lg shadow-md  item" v-scroll-reveal >
          <div class="flex items-start mb-4">
            <div class="mr-4 text-amber-600">
              <i class="fas fa-clipboard-list fa-2x"></i>
            </div>
            <h3 class="text-2xl font-semibold text-amber-700">Valores</h3>
          </div>
          <p class="text-black">
            Qualidade e perfeição em cada detalhe<br />
            Compromisso com prazos e satisfação do cliente<br />
            Sustentabilidade e respeito ao meio ambiente<br />
            Ética e transparência em todas as relações
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NossosFundamentos'
  }
  </script>