<template>
  <div class="bg-beige w-full py-20">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
      <!-- Imagem à esquerda -->
      <div class="flex-1 mb-8 md:mb-0"  >
        <img 
          src="../assets/arquivos/logo-2.png" 
          alt="Logo" 
          class="w-full ml-0  item" v-scroll-reveal
        />
      </div>
  
      <!-- Texto à direita -->
      <div class="flex-1 text-left pl-8 md:pl-20"  >
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight item" v-scroll-reveal>
          Arte Nobre Service
        </h1>
        <p class="mt-6 text-base sm:text-lg md:text-2xl text-dark leading-relaxe item" v-scroll-reveal>
          A <strong>Arte Nobre Service</strong> é uma empresa especializada na venda e instalação de assoalhos, tacos, decks, forros, painéis e outros produtos, além de oferecer serviços de acabamento final, como raspagem, lixamento e aplicação de vernizes ecológicos. Nossa missão é fornecer soluções de alto padrão para residências, empresas e espaços comerciais, garantindo qualidade, durabilidade e sofisticação em cada projeto. Trabalhamos com materiais nobres e utilizamos técnicas avançadas de instalação para assegurar os melhores resultados.
        </p>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#e0cdaf" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,144C384,128,480,160,576,176C672,192,768,192,864,192C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>
</template>

<script>
export default {
  name: 'ResponsiveLogoText'
};
</script>

<style scoped>
/* Cor bege clara */
.bg-beige {
  background-color: #e0cdaf;
}
</style>
