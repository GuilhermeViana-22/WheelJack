<template>
  <div class="max-w-7xl mx-auto px-4 py-16 bg-white">

    <!-- Cabeçalho Elegante -->
    <div class="flex flex-col items-center mb-16 relative">
      <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">Dúvidas Frequentes</span>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        <span class="relative">
          Perguntas e Respostas
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#183614] mt-3"></span>
        </span>
      </h2>
      <p class="mt-6 text-lg text-center text-[#183614] max-w-3xl">
        Tire suas dúvidas sobre nossos serviços em madeiras nobres, instalação e manutenção de pisos, decks, forros e painéis.
      </p>
    </div>

    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">

        <div class="py-5" v-for="(topic, index) in topics" :key="index">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-[#6e451d] group-open:text-[#183614]"> {{ topic.text }} </span>
              <span class="transition group-open:rotate-180 text-[#6e451d]">
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

const topics = ref([
  {
    text: 'Quais tipos de madeira nobre vocês trabalham?',
    answer: 'Trabalhamos com diversas madeiras nobres como Ipê, Cumaru, Garapa, Massaranduba, Jatobá e outras espécies de alta durabilidade. Cada uma possui características específicas de cor, textura e resistência, que podem ser escolhidas conforme o projeto.'
  },
  {
    text: 'Como é o processo de instalação de assoalhos?',
    answer: 'Nossa instalação de assoalhos segue rigorosos padrões: preparação do subpiso, acomodação da madeira no ambiente por 48h, instalação com espaçamento adequado para dilatação, fixação mecânica ou colagem (conforme o caso), e finalmente acabamento com verniz ou óleo específico para madeira.'
  },
  {
    text: 'Qual a diferença entre taco e assoalho?',
    answer: 'O taco é composto por peças menores (geralmente 20x6cm) que formam padrões decorativos, enquanto o assoalho utiliza tábuas longas (de 1 a 3m). O taco oferece maior estabilidade dimensional, enquanto o assoalho proporciona visual mais clean e contemporâneo.'
  },
  {
    text: 'Decks externos precisam de manutenção especial?',
    answer: 'Sim, decks expostos às intempéries requerem manutenção anual que inclui limpeza profunda, lixamento leve (quando necessário) e reaplicação de óleo ou verniz UV. Para áreas com muito sol, recomendamos produtos com filtro UV para evitar desbotamento.'
  },
  {
    text: 'Posso instalar piso de madeira em áreas úmidas?',
    answer: 'Em áreas como banheiros ou lavanderias, recomendamos madeiras específicas como Teak ou Cumaru, com tratamento especial e instalação sobre contrapiso impermeabilizado. A manutenção preventiva é essencial nestes casos.'
  },
  {
    text: 'Quanto tempo dura um piso de madeira nobre?',
    answer: 'Com instalação profissional e manutenção adequada, nossos pisos em madeira nobre podem durar décadas. Madeiras como Ipê e Cumaru têm vida útil média de 30-50 anos em ambientes internos. A raspagem e renovação do acabamento podem ser feitas a cada 5-10 anos.'
  },
  {
    text: 'Vocês fazem restauração de pisos antigos?',
    answer: 'Sim, especializamo-nos em restauração de pisos históricos. O processo inclui raspagem para remover camadas desgastadas, tratamento de eventuais danos, preenchimento de fendas com massa específica e acabamento com produtos que preservam a autenticidade da madeira.'
  },
  {
    text: 'Qual o melhor acabamento para forros de madeira?',
    answer: 'Para forros, recomendamos verniz mate ou óleo natural, que preservam a respiração da madeira sem criar brilho excessivo. Em áreas externas, utilizamos produtos com proteção UV e fungicida para maior durabilidade.'
  },
  {
    text: 'Painéis de madeira exigem estrutura especial?',
    answer: 'Depende do tipo de painel. Painéis estruturais requerem suporte adequado, enquanto os decorativos podem ser instalados sobre alvenaria ou drywall. Fazemos estudo prévio para garantir a perfeita instalação em cada caso.'
  },
  {
    text: 'Como preparar o ambiente antes da instalação?',
    answer: 'Recomendamos que o ambiente tenha: temperatura estável (18-24°C), umidade relativa do ar entre 50-65%, obras "molhadas" (reboque, pintura) já concluídas, e sistema elétrico/hidráulico testado. A madeira deve aclimatar no local por 48h antes da instalação.'
  },
  {
    text: 'Qual o prazo médio para instalação?',
    answer: 'O prazo de execução pode variar de acordo com a metragem e a complexidade do serviço. Realizamos uma avaliação detalhada e, a partir disso, informamos o prazo estimado com precisão..'
  },
  {
    text: 'Como solicitar um orçamento?',
    answer: 'Entre em contato pelo WhatsApp (11) 97041-9195 para agendarmos uma visita técnica sem compromisso. Durante a visita, avaliaremos o local, discutiremos suas necessidades e apresentaremos opções de materiais e acabamentos.'
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
  color: #183614;
}
</style>