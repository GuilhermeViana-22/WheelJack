<template>
  <div class="relative overflow-hidden">
    <!-- Seção principal com a cor de fundo especificada -->
    <div class="bg-[#e0cdaf] w-full py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Imagem com efeito flutuante e sombra -->
          <div class="relative max-w-lg mx-auto lg:mx-0">
            <div class="absolute -inset-4  bg-opacity-10 rounded-3xl blur-lg transform rotate-1"></div>
            <img 
              src="../assets/arquivos/logo-2.png" 
              alt="Logo Arte Nobre Service" 
              class="relative w-full h-auto object-contain transition-all duration-700 ease-out hover:scale-105"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="800"
            />
          </div>
          
          <!-- Conteúdo de texto com animação -->
          <div 
            class="space-y-8"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h1 class="text-center md:text-left text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#6e451d] to-[#183614]">
                Arte Nobre Service
              </span>
            </h1>
            
            <p class="text-lg md:text-xl text-[#183614] leading-relaxed">
  A <strong class="font-semibold text-[#6e451d]">Arte Nobre Service</strong> é resultado de uma trajetória sólida e inovadora iniciada em 1994, quando os primeiros conhecimentos e experiências na área de madeiras nobres e serviços de acabamento começaram a ser desenvolvidos. Com base nesse alicerce técnico e prático, a empresa foi oficialmente estruturada em 2000, evoluindo constantemente para atender às exigências do mercado com excelência.
</p>

<p class="text-lg md:text-xl text-[#183614] leading-relaxed">
  Hoje, a <strong class="font-semibold text-[#6e451d]">Arte Nobre Service</strong> atua com foco em soluções especializadas para ambientes residenciais, corporativos e comerciais, oferecendo instalação de assoalhos, tacos, decks, forros e painéis, além de acabamento refinado, como raspagem, lixamento e aplicação de vernizes ecológicos. Nosso compromisso é unir tradição, inovação e qualidade em cada projeto entregue.
</p>
            
            <!-- Botão CTA com as cores especificadas -->
            <div class="pt-2 md:pt-4 flex flex-row w-full">
              <button class="mx-auto md:mx-0 px-8 py-3 bg-[#6e451d] hover:bg-[#183614] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Saiba mais sobre nossos serviços
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Onda personalizada com gradiente das cores -->
    <div class="w-full h-24 sm:h-32 md:h-40 overflow-hidden">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        class="w-full h-full"
      >
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          opacity=".25" 
          class="fill-[#e0cdaf]"
        ></path>
        <path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          opacity=".5" 
          class="fill-[#e0cdaf]"
        ></path>
        <path 
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          class="fill-[#e0cdaf]"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  mounted() {
    // Verifica se está no lado do cliente
    if (typeof window !== 'undefined') {
      import('aos/dist/aos.css').then(() => {
        import('aos').then((AOS) => {
          AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-out-quart',
          });
        });
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');

/* Tipografia melhorada */
h1 {
  font-family: 'Playfair Display', serif;
}

p, button {
  font-family: 'Inter', sans-serif;
}

/* Transições suaves */
button, img {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Efeito de hover no botão */
button:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>