<template>
  <section id="servicos" class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Cabeçalho estilizado -->
      <div class="flex flex-col items-center mb-16">
        <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">O que fazemos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          <span class="relative">
            Nossos Serviços
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#183614] mt-2"></span>
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <!-- Serviço 1: Assoalhos -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(1)" alt="Assoalhos Nobres" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(1) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 2: Painéis Ripados -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(2)" alt="Painéis Ripados" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(2) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 3: Painéis Demolição -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(3)" alt="Painéis de Demolição" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(3) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 4: Tacão -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(4)" alt="Tacão de Madeira" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(4) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 5: Taco Palito -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(5)" alt="Taco Palito" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(5) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 6: Escadas -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(6)" alt="Escadas de Madeira" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(6) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 7: Escadas Estruturais -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(7)" alt="Escadas Estruturais" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(7) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 8: Revestimentos -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(8)" alt="Revestimento de Banheiras" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(8) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 9: Revestimentos -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(9)" alt="Revestimento de Banheiras" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(9) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 10: Revestimentos -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(10)" alt="Revestimento de Banheiras" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(10) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 11: Revestimentos -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(11)" alt="Revestimento de Banheiras" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(11) }}</p>
            </div>
          </div>
        </div>

        <!-- Serviço 12: Revestimentos -->
        <div
          class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
          <img :src="getImageUrl(12)" alt="Revestimento de Banheiras" class="w-full h-auto object-cover" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full text-white">
              <h3 class="text-xl font-bold mb-1">Arte Nobre Service</h3>
              <p class="text-sm mb-3">{{ getPraisePhrase(12) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importação das imagens permanece a mesma
import img1 from '../assets/catalogo/tacos/1.png'
import img2 from '../assets/catalogo/tacos/2.png'
import img3 from '../assets/catalogo/tacos/3.png'
import img4 from '../assets/catalogo/assoalhos/4.png'
import img5 from '../assets/catalogo/paineis/7.png'
import img6 from '../assets/catalogo/paineis/6.png'
import img7 from '../assets/catalogo/escadas/1.jpeg'
import img8 from '../assets/catalogo/escadas/27.png'
import img9 from '../assets/catalogo/escadas/13.png'
import img10 from '../assets/catalogo/deck/25.png'
import img11 from '../assets/catalogo/deck/26.png'
import img12 from '../assets/catalogo/tacos/15.png'

export default {
  data() {
    return {
      images: {
        1: img1,
        2: img2,
        3: img3,
        4: img4,
        5: img5,
        6: img6,
        7: img7,
        8: img8,
        9: img9,
        10: img10,
        11: img11,
        12: img12
      },
      praisePhrases: [
        "Excelência em cada detalhe, transformando madeira em arte",
        "Inovação e tradição trabalhando juntas para seu lar",
        "Qualidade que impressiona em cada projeto",
        "O melhor acabamento para sua residência",
        "Trabalho artesanal com precisão de máquina",
        "Elevando o padrão de acabamentos em madeira",
        "Soluções criativas para seu espaço",
        "O toque nobre que sua casa merece",
        "Madeira trabalhada com maestria e cuidado",
        "Técnica apurada para resultados perfeitos",
        "Dedicação que transforma ambientes",
        "Harmonia entre beleza e funcionalidade",
        "Profissionalismo em cada etapa do serviço",
        "Acabamentos que encantam e duram",
        "Tradição em madeira, visão em design",
        "Sua casa com o charme da madeira nobre",
        "Precisão e bom gosto em cada projeto",
        "Inovação que respeita a essência da madeira",
        "Qualidade que você pode ver e sentir",
        "Transformando espaços com elegância",
        "O luxo discreto da madeira bem trabalhada",
        "Arte e técnica em perfeito equilíbrio"
      ]
    }
  },
  methods: {
    getImageUrl(index) {
      return this.images[index]
    },
    getPraisePhrase(index) {
      // Retorna uma frase elogiosa baseada no índice
      return this.praisePhrases[(index - 1) % this.praisePhrases.length]
    }
  }
}
</script>

<style scoped>
.service-item {
  aspect-ratio: 1/1.5;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
}

.from-\[\#183612\]\/90 {
  --tw-gradient-from: #183612e6;
  --tw-gradient-to: #18361200;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.via-\[\#183612\]\/30 {
  --tw-gradient-to: #18361200;
  --tw-gradient-stops: #1836124d, var(--tw-gradient-to);
}
</style>