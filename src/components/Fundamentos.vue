<template>
  <section id="missao" class="relative py-20 bg-white">
    <!-- Decoração sutil de fundo -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2UwY2RhZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Título com estilo minimalista -->
      <div class="flex flex-col items-center mb-16" data-aos="fade-up">
        <span class="text-sm font-semibold tracking-wider text-[#6e451d] uppercase mb-2">Nossa Essência</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          <span class="relative">
            Nossos Fundamentos
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#183614] mt-2"></span>
          </span>
        </h2>
      </div>

      <!-- Cards em grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <!-- Missão -->
        <div 
          class="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:border-[#6e451d]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex items-center mb-6">
            <div class="bg-white p-3 rounded-lg shadow-xs mr-5 border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#6e451d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800">Missão</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Oferecer soluções de alto padrão em pisos de madeira, tacos, assoalhos e decks, garantindo qualidade, durabilidade e sofisticação para cada ambiente.
          </p>
        </div>

        <!-- Visão -->
        <div 
          class="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:border-[#183614]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex items-center mb-6">
            <div class="bg-white p-3 rounded-lg shadow-xs mr-5 border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#183614]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800">Visão</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Ser referência no mercado de revestimentos em madeira, destacando-se pela excelência no atendimento, inovação e compromisso com a sustentabilidade.
          </p>
        </div>

        <!-- Valores -->
        <div 
          class="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:border-[#6e451d]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-center mb-6">
            <div class="bg-white p-3 rounded-lg shadow-xs mr-5 border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#6e451d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800">Valores</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6e451d] mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Qualidade e perfeição em cada detalhe</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6e451d] mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Compromisso com prazos e satisfação</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6e451d] mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Sustentabilidade e respeito ambiental</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#6e451d] mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Ética e transparência nas relações</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NossosFundamentos',
  async mounted() {
    // Carrega o AOS apenas no cliente
    await import('aos/dist/aos.css');
    const AOS = await import('aos');
    AOS.init({
      once: true,
      duration: 800,
    });
  }
}
</script>

<style scoped>
/* Efeitos personalizados */
.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
}

.shadow-xs {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Transições suaves */
.transform {
  transition: all 0.3s ease;
}

/* Padrão de fundo sutil */
.bg-gray-50 {
  background-color: #f9fafb;
}

.border-gray-100 {
  border-color: #f3f4f6;
}
</style>