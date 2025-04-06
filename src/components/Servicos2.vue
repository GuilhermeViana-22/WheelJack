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
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(1)" 
      alt="Assoalhos Nobres"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Assoalhos Nobres</h3>
        <p class="text-sm mb-3">Instalação profissional de assoalhos de madeira de alta qualidade</p>
      </div>
    </div>
  </div>

  <!-- Serviço 2: Painéis Ripados -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(2)" 
      alt="Painéis Ripados"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Painéis Ripados</h3>
        <p class="text-sm mb-3">Design moderno em painéis de madeira ripada para ambientes internos</p>
      </div>
    </div>
  </div>

  <!-- Serviço 3: Painéis Demolição -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(3)" 
      alt="Painéis de Demolição"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Painéis de Demolição</h3>
        <p class="text-sm mb-3">Reutilização de madeira de demolição com acabamento refinado</p>
      </div>
    </div>
  </div>

  <!-- Serviço 4: Tacão -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(4)" 
      alt="Tacão de Madeira"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Tacão de Madeira</h3>
        <p class="text-sm mb-3">Pisos de tacão com durabilidade e estética sofisticada</p>
      </div>
    </div>
  </div>

  <!-- Serviço 5: Taco Palito -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(5)" 
      alt="Taco Palito"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Taco Palito</h3>
        <p class="text-sm mb-3">Charme retrô com tacos estreitos e padrão elegante</p>
      </div>
    </div>
  </div>

  <!-- Serviço 6: Escadas -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(6)" 
      alt="Escadas de Madeira"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Escadas de Madeira</h3>
        <p class="text-sm mb-3">Soluções elegantes e seguras para ambientes verticais</p>
      </div>
    </div>
  </div>

  <!-- Serviço 7: Escadas Estruturais -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(7)" 
      alt="Escadas Estruturais"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Escadas Estruturais</h3>
        <p class="text-sm mb-3">Projeto e instalação de escadas com estrutura metálica ou madeira</p>
      </div>
    </div>
  </div>

  <!-- Serviço 8: Revestimentos de Banheiras -->
  <div class="service-item relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <img 
      :src="getImageUrl(8)" 
      alt="Revestimento de Banheiras"
      class="w-full h-auto object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-[#183612]/90 via-[#183612]/30 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="w-full text-white">
        <h3 class="text-xl font-bold mb-1">Revestimento de Banheiras</h3>
        <p class="text-sm mb-3">Acabamento refinado para banheiras e áreas de spa</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  </template>
  
  <script>
  // Importação completa das 22 imagens
  import img1 from '../assets/servicos/1.png'
  import img2 from '../assets/servicos/2.png'
  import img3 from '../assets/servicos/3.png'
  import img4 from '../assets/servicos/4.png'
  import img5 from '../assets/servicos/5.png'
  import img6 from '../assets/servicos/6.png'
  import img7 from '../assets/servicos/7.png'
  import img8 from '../assets/servicos/8.png'
  import img9 from '../assets/servicos/9.png'
  import img10 from '../assets/servicos/10.png'
  import img11 from '../assets/servicos/11.png'
  import img12 from '../assets/servicos/12.png'
  import img13 from '../assets/servicos/13.png'
  import img14 from '../assets/servicos/14.png'
  import img15 from '../assets/servicos/15.png'
  import img16 from '../assets/servicos/16.png'
  import img17 from '../assets/servicos/17.png'
  import img18 from '../assets/servicos/18.png'
  import img19 from '../assets/servicos/19.png'
  import img20 from '../assets/servicos/20.png'
  import img21 from '../assets/servicos/21.png'
  import img22 from '../assets/servicos/22.png'
  
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
          12: img12,
          13: img13,
          14: img14,
          15: img15,
          16: img16,
          17: img17,
          18: img18,
          19: img19,
          20: img20,
          21: img21,
          22: img22
        },
        services: [
        {
    id: 1,
    title: "Assoalhos Nobres",
    description: "Instalação profissional de assoalhos de madeira de alta qualidade"
  },
  {
    id: 2,
    title: "Paredes Elegantes",
    description: "Revestimentos especiais para paredes internas e externas"
  },
  {
    id: 3,
    title: "Verniz Ecológico",
    description: "Aplicação de vernizes sustentáveis e não tóxicos"
  },
  {
    id: 4,
    title: "Acabamento Fino",
    description: "Detalhamento final com materiais de alto padrão"
  },
  {
    id: 5,
    title: "Restauração de Pisos",
    description: "Recuperação de pisos antigos com técnicas modernas"
  },
  {
    id: 6,
    title: "Pintura Decorativa",
    description: "Técnicas de pintura artística para ambientes personalizados"
  },
  {
    id: 7,
    title: "Instalação de Rodapés",
    description: "Rodapés modernos e clássicos com acabamento preciso"
  },
  {
    id: 8,
    title: "Tratamento de Madeira",
    description: "Proteção e durabilidade com produtos especiais"
  },
  {
    id: 9,
    title: "Pisos Laminados",
    description: "Instalação rápida e eficiente de laminados"
  },
  {
    id: 10,
    title: "Pisos Vinílicos",
    description: "Versatilidade e conforto com design moderno"
  },
  {
    id: 11,
    title: "Forro de Madeira",
    description: "Estilo e sofisticação com materiais naturais"
  },
  {
    id: 12,
    title: "Design de Interiores",
    description: "Consultoria e execução de projetos residenciais"
  },
  {
    id: 13,
    title: "Pisos de Demolição",
    description: "Reaproveitamento de madeiras nobres com história"
  },
  {
    id: 14,
    title: "Manutenção Periódica",
    description: "Serviço programado para manter o brilho dos pisos"
  },
  {
    id: 15,
    title: "Nivelamento de Piso",
    description: "Correção de desníveis para aplicação de acabamentos"
  },
  {
    id: 16,
    title: "Impermeabilização",
    description: "Proteção contra umidade em áreas internas e externas"
  },
  {
    id: 17,
    title: "Pintura Epóxi",
    description: "Alta resistência e acabamento brilhante para pisos"
  },
  {
    id: 18,
    title: "Consultoria Técnica",
    description: "Avaliação e orientação profissional para reformas"
  },
  {
    id: 19,
    title: "Rodameios e Molduras",
    description: "Acabamentos decorativos para paredes"
  },
  {
    id: 20,
    title: "Lixamento de Pisos",
    description: "Nivelamento e preparo para envernizamento"
  },
  {
    id: 21,
    title: "Aplicação de Stain",
    description: "Proteção contra fungos e raios solares em madeiras externas"
  },
  {
    id: 22,
    title: "Texturas Personalizadas",
    description: "Revestimentos criativos para paredes e tetos"
  }
          
          // Adicione os objetos para todos os 22 serviços...
        ]
      }
    },
    methods: {
      getImageUrl(index) {
        return this.images[index]
      },
      getServiceInfo(index) {
        return this.services.find(service => service.id === index) || {
          title: `Serviço ${index}`,
          description: `Descrição do serviço ${index}`
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .service-item {
    aspect-ratio: 1/1.5; /* Proporção similar ao WhatsApp */
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