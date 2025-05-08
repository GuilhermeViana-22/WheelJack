<template>
  <section id="tipos-veiculos" class="relative py-20 bg-gray-900 overflow-hidden">

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Título com estilo premium -->
      <div class="flex flex-col items-center mb-16" data-aos="fade-up">
        <span class="text-sm font-semibold tracking-wider text-red-500 uppercase mb-2">Nossa Seleção</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white text-center">
          <span class="relative">
            Encontre o Tipo que Procura
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-600 mt-2"></span>
          </span>
        </h2>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl text-center">
          Temos várias soluções para atender todas as suas necessidades automotivas.
        </p>
      </div>

      <!-- Grid de categorias -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Utilitário -->
        <div class="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">Utilitário</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde 4 990 €</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Citroën C4
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Opel Astra
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Peugeot 208
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos (49)
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- S.U.V -->
        <div class="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">S.U.V</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde 9 980 €</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Jeep Renegade
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Fiat 500X
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Seat Arona
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos (47)
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Carrinha -->
        <div class="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">Carrinha</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde 6 990 €</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Opel Astra Sports Tourer
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Peugeot 308 SW
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Peugeot 308 SW
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos (51)
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Berlina -->
        <div class="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">Berlina</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde 12 490 €</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  BMW 318
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  BMW 318
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Tesla Model 3
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos (50)
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Desportivo -->
        <div class="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="150">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">Desportivo</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde 7 740 €</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Fiat 500C
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Fiat 500C
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  MINI Cabrio
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos (48)
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <!-- Comerciais -->
        <div class="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">Comerciais</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde 4 990 €</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Opel Combo
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Renault Kangoo
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  Opel Astra GTC
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos (86)
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TiposVeiculos',
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
/* Efeitos de hover premium */
.group:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(220, 38, 38, 0.1);
}

/* Transições suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Gradiente sutil no hover */
.group:hover .bg-gradient-to-r {
  opacity: 1;
}

/* Estilo dos cards */
.rounded-xl {
  border-radius: 1rem;
}

/* Espaçamento interno consistente */
.p-6 {
  padding: 1.5rem;
}
</style>