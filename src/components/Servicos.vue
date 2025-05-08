<template>
  <section id="categorias-veiculos" class="relative py-20 bg-gray-900 overflow-hidden">


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
        <!-- Cada categoria será renderizada aqui -->
        <div 
          v-for="(category, index) in categories"
          :key="index"
          class="group relative overflow-hidden rounded-[1rem] bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="100 + (index * 50)"
        >
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-white">{{ category.name }}</h3>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-red-400">Desde {{ category.price }}</span>
            </div>
            <div class="px-6 pb-6">
              <ul class="space-y-3 text-gray-300">
                <li 
                  v-for="(model, modelIndex) in category.models.slice(0, 3)"
                  :key="modelIndex"
                  class="flex items-center"
                >
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                  {{ model }}
                </li>
              </ul>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-200">
                  Ver Todos ({{ category.count }})
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
  name: 'CategoriasVeiculos',
  data() {
    return {
      categories: [
        {
          name: "Utilitário",
          price: "4 990 €",
          models: ["Citroën C4", "Opel Astra", "Peugeot 208"],
          count: 49
        },
        {
          name: "S.U.V",
          price: "9 980 €",
          models: ["Jeep Renegade", "Fiat 500X", "Seat Arona"],
          count: 47
        },
        {
          name: "Carrinha",
          price: "6 990 €",
          models: ["Opel Astra Sports Tourer", "Peugeot 308 SW", "Peugeot 308 SW"],
          count: 51
        },
        {
          name: "Berlina",
          price: "12 490 €",
          models: ["BMW 318", "BMW 318", "Tesla Model 3"],
          count: 50
        },
        {
          name: "Desportivo",
          price: "7 740 €",
          models: ["Fiat 500C", "Fiat 500C", "MINI Cabrio"],
          count: 48
        },
        {
          name: "Comerciais",
          price: "4 990 €",
          models: ["Opel Combo", "Renault Kangoo", "Opel Astra GTC"],
          count: 86
        }
      ]
    }
  },
  async mounted() {
    // Carrega o AOS apenas no cliente
    await import('aos/dist/aos.css');
    const AOS = await import('aos');
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out'
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

/* Bordas arredondadas completas */
.rounded-\[1rem\] {
  border-radius: 1rem;
}

/* Efeito fade-in para os itens */
[data-aos="fade-up"] {
  opacity: 0;
  transform: translateY(20px);
  transition-property: opacity, transform;
}

[data-aos="fade-up"].aos-animate {
  opacity: 1;
  transform: translateY(0);
}
</style>