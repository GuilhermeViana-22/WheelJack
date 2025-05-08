<template>
  <section id="veiculos-automotivos" class="relative py-20 bg-gray-900 overflow-hidden">

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Título com estilo premium -->
      <div class="flex flex-col items-center mb-16" data-aos="fade-up">
        <span class="text-sm font-semibold tracking-wider text-red-500 uppercase mb-2">Conheça Nosso Portfólio</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white text-center">
          <span class="relative">
            Veículos Automotivos
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 mt-2"></span>
          </span>
        </h2>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl text-center">
          Descubra nossa seleção premium de veículos para todas as necessidades.
        </p>
      </div>

      <!-- Filtros por categoria -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
        <button 
          v-for="(filter, index) in filters"
          :key="index"
          @click="activeFilter = filter.value"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
            activeFilter === filter.value 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Grid de veículos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Card de veículo -->
        <div 
          v-for="(vehicle, index) in filteredVehicles"
          :key="vehicle.id"
          class="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="100 + (index * 50)"
        >
          <!-- Badge de destaque -->
          <div v-if="vehicle.highlight" class="absolute top-4 right-4 z-10">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
              Destaque
            </span>
          </div>

          <!-- Imagem do veículo -->
          <div class="h-48 overflow-hidden">
            <img 
              :src="vehicle.image" 
              :alt="vehicle.model" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <!-- Informações do veículo -->
          <div class="p-5">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-white">{{ vehicle.brand }} {{ vehicle.model }}</h3>
              <span class="text-sm font-medium text-red-400">{{ vehicle.year }}</span>
            </div>

            <div class="flex items-center text-gray-400 text-sm mb-4">
              <span class="flex items-center mr-4">
                <svg class="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ vehicle.mileage }} km
              </span>
              <span class="flex items-center">
                <svg class="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ vehicle.transmission }}
              </span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-red-500">{{ vehicle.price }}</span>
              <button class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                Detalhes
              </button>
            </div>
          </div>

          <!-- Efeito hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div>
              <h4 class="text-white font-bold mb-1">{{ vehicle.brand }} {{ vehicle.model }}</h4>
              <p class="text-gray-300 text-sm mb-3">{{ vehicle.description }}</p>
              <button class="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                Ver Oferta
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão para carregar mais -->
      <div class="text-center mt-12" data-aos="fade-up">
        <button 
          @click="loadMore"
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-red-600 text-white rounded-lg font-medium transition-all duration-200 inline-flex items-center"
        >
          Carregar Mais Veículos
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VeiculosAutomotivos',
  data() {
    return {
      activeFilter: 'all',
      filters: [
        { label: 'Todos', value: 'all' },
        { label: 'Utilitários', value: 'utility' },
        { label: 'SUVs', value: 'suv' },
        { label: 'Esportivos', value: 'sport' },
        { label: 'Luxo', value: 'luxury' },
        { label: 'Elétricos', value: 'electric' }
      ],
      vehicles: [
        {
          id: 1,
          brand: 'BMW',
          model: 'Série 3',
          year: '2022',
          price: '45.990 €',
          mileage: '12.500',
          transmission: 'Automático',
          type: 'luxury',
          highlight: true,
          description: 'Série 3 em excelente estado, com apenas um ano de uso e garantia de fábrica.',
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          brand: 'Audi',
          model: 'Q5',
          year: '2021',
          price: '39.990 €',
          mileage: '18.200',
          transmission: 'Automático',
          type: 'suv',
          description: 'SUV premium com acabamento em couro e sistema de navegação completo.',
          image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          brand: 'Tesla',
          model: 'Model 3',
          year: '2023',
          price: '49.990 €',
          mileage: '5.000',
          transmission: 'Automático',
          type: 'electric',
          highlight: true,
          description: 'Elétrico com autonomia de 500km, carregamento rápido e tecnologia avançada.',
          image: 'https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 4,
          brand: 'Volkswagen',
          model: 'Golf',
          year: '2020',
          price: '22.990 €',
          mileage: '32.500',
          transmission: 'Manual',
          type: 'utility',
          description: 'Clássico hatchback alemão, econômico e em perfeito estado de conservação.',
          image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 5,
          brand: 'Porsche',
          model: '911 Carrera',
          year: '2021',
          price: '89.990 €',
          mileage: '8.700',
          transmission: 'Automático',
          type: 'sport',
          highlight: true,
          description: 'Esportivo lendário com motor traseiro e desempenho excepcional.',
          image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 6,
          brand: 'Jeep',
          model: 'Renegade',
          year: '2022',
          price: '28.990 €',
          mileage: '15.300',
          transmission: 'Automático',
          type: 'suv',
          description: 'SUV compacto com tração 4x4 e design marcante, ideal para cidade e estrada.',
          image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 7,
          brand: 'Ford',
          model: 'Ranger',
          year: '2021',
          price: '35.990 €',
          mileage: '25.800',
          transmission: 'Automático',
          type: 'utility',
          description: 'Picape robusta com capacidade de carga e tecnologia para trabalho e lazer.',
          image: 'https://images.unsplash.com/photo-1580274437635-89b4fdf0147b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 8,
          brand: 'Mercedes-Benz',
          model: 'Classe A',
          year: '2023',
          price: '38.990 €',
          mileage: '3.200',
          transmission: 'Automático',
          type: 'luxury',
          description: 'Compacto premium com interior sofisticado e tecnologia Mercedes-Benz.',
          image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ],
      displayedVehicles: 8
    }
  },
  computed: {
    filteredVehicles() {
      if (this.activeFilter === 'all') {
        return this.vehicles.slice(0, this.displayedVehicles);
      }
      return this.vehicles
        .filter(vehicle => vehicle.type === this.activeFilter)
        .slice(0, this.displayedVehicles);
    }
  },
  methods: {
    loadMore() {
      this.displayedVehicles += 4;
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
/* Efeitos personalizados */
.group:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(220, 38, 38, 0.15);
}

/* Animação fade-in */
[data-aos="fade-up"] {
  opacity: 0;
  transform: translateY(20px);
  transition-property: opacity, transform;
}

[data-aos="fade-up"].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Transições suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Gradiente hover */
.group:hover .bg-gradient-to-t {
  opacity: 1;
}
</style>